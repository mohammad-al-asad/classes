import { generateLicenseKey } from "../../util/generateLicenseKey.js";
import type { DigitalProductInput, IDigitalProduct, UpdateVersionInput } from "./digitalProduct.js";
import digitalProductModel from "./digitalProduct.model.js";

export class DigitalProductService {
  async createProduct(
    productData: DigitalProductInput
  ): Promise<IDigitalProduct> {
    const product = await digitalProductModel.create(productData);
    return product;
  }

  async getProductById(id: string): Promise<IDigitalProduct | null> {
    return await digitalProductModel.findById(id)
      .populate("licenseKeys.usedBy", "name email");
  }

  async getAllProducts(
    page: number = 1,
    limit: number = 10,
    filters: {
      productType?: string;
      category?: string;
      isActive?: boolean|undefined;
      isFeatured?: boolean|undefined;
      search?: string;
    } = {}
  ) {
    const skip = (page - 1) * limit;

    let query: any = {};

    // Apply filters
    if (filters.productType) query.productType = filters.productType;
    if (filters.category) query.category = filters.category;
    if (filters.isActive !== undefined) query.isActive = filters.isActive;
    if (filters.isFeatured !== undefined) query.isFeatured = filters.isFeatured;

    // Search filter
    if (filters.search) {
      query.$or = [
        { title: { $regex: filters.search, $options: "i" } },
        { description: { $regex: filters.search, $options: "i" } },
        { tags: { $in: [new RegExp(filters.search, "i")] } },
      ];
    }

    const products = await digitalProductModel.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await digitalProductModel.countDocuments(query);

    return {
      products,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
    };
  }

  async updateProduct(
    id: string,
    updateData: Partial<DigitalProductInput>
  ): Promise<IDigitalProduct | null> {
    return await digitalProductModel.findByIdAndUpdate(id, updateData, {
      new: true,
    })
  }

  async deleteProduct(id: string): Promise<IDigitalProduct | null> {
    return await digitalProductModel.findByIdAndDelete(id);
  }

  async generateLicenseKeys(
    productId: string,
    count: number = 1
  ): Promise<IDigitalProduct | null> {
    const licenseKeys = [];

    for (let i = 0; i < count; i++) {
      licenseKeys.push({
        key: generateLicenseKey(),
        isUsed: false,
      });
    }

    return await digitalProductModel.findByIdAndUpdate(
      productId,
      { $push: { licenseKeys: { $each: licenseKeys } } },
      { new: true }
    );
  }

  async assignLicenseKey(
    productId: string,
    userId: string
  ): Promise<{ licenseKey: string; downloadUrl: string } | null> {
    const product = await digitalProductModel.findById(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    // Find available license key
    const availableKey = product.licenseKeys.find((key) => !key.isUsed);

    if (!availableKey) {
      throw new Error("No available license keys");
    }

    // Update license key
    await digitalProductModel.updateOne(
      { _id: productId, "licenseKeys._id": (availableKey as any)._id },
      {
        $set: {
          "licenseKeys.$.isUsed": true,
          "licenseKeys.$.usedAt": new Date(),
          "licenseKeys.$.usedBy": userId,
        },
        $inc: { salesCount: 1 },
      }
    );

    // Get active file version
    const activeFile = product.files.find((file) => file.isActive);

    if (!activeFile) {
      throw new Error("No active file version found");
    }

    return {
      licenseKey: availableKey.key,
      downloadUrl: activeFile.fileUrl,
    };
  }

  async updateProductVersion(
    productId: string,
    versionData: UpdateVersionInput
  ): Promise<IDigitalProduct | null> {
    return await digitalProductModel.findByIdAndUpdate(
      productId,
      {
        $set: {
          version: versionData.version,
          changelog: versionData.changelog,
        },
        $push: { files: { $each: versionData.files } },
      },
      { new: true }
    );
  }

  async getProductsByType(productType: string): Promise<IDigitalProduct[]> {
    return await digitalProductModel.find({
      productType,
      isActive: true,
    }).sort({ createdAt: -1 });
  }

  async getFeaturedProducts(): Promise<IDigitalProduct[]> {
    return await digitalProductModel.find({
      isFeatured: true,
      isActive: true,
    })
      .sort({ createdAt: -1 })
      .limit(10);
  }

  async incrementViewCount(productId: string): Promise<void> {
    await digitalProductModel.findByIdAndUpdate(productId, {
      $inc: { viewCount: 1 },
    });
  }

  async getProductStats(): Promise<{
    totalProducts: number;
    activeProducts: number;
    totalSales: number;
    productsByType: { [key: string]: number };
  }> {
    const totalProducts = await digitalProductModel.countDocuments();
    const activeProducts = await digitalProductModel.countDocuments({
      isActive: true,
    });

    const salesResult = await digitalProductModel.aggregate([
      { $group: { _id: null, totalSales: { $sum: "$salesCount" } } },
    ]);

    const productsByType = await digitalProductModel.aggregate([
      { $group: { _id: "$productType", count: { $sum: 1 } } },
    ]);

    const productsByTypeMap: { [key: string]: number } = {};
    productsByType.forEach((item) => {
      productsByTypeMap[item._id] = item.count;
    });

    return {
      totalProducts,
      activeProducts,
      totalSales: salesResult[0]?.totalSales || 0,
      productsByType: productsByTypeMap,
    };
  }
}
