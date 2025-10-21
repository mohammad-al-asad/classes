import type { Request, Response } from "express";
import ApiResponse from "../../util/apiResponse.js";
import { DigitalProductService } from "./digitalProduct.service.js";


const digitalProductService = new DigitalProductService();

export const createDigitalProduct = async (req: Request, res: Response) => {
  const productData = req.body as any;
  
  if (productData == null) {
    return new ApiResponse(400, 'Invalid product data').send(res);
  }
  
  const product = await digitalProductService.createProduct(productData);
  
  new ApiResponse(201, 'Digital product created successfully', product).send(res);
}

export const getDigitalProducts = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  
  const filters = {
    productType: req.query.productType as string,
    category: req.query.category as string,
    isActive: req.query.isActive ? req.query.isActive === 'true' : undefined,
    isFeatured: req.query.isFeatured ? req.query.isFeatured === 'true' : undefined,
    search: req.query.search as string
  };

  const result = await digitalProductService.getAllProducts(page, limit, filters);
  
  new ApiResponse(200, 'Digital products fetched successfully', result).send(res);
}

export const getDigitalProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const product = await digitalProductService.getProductById(id as string);
  
  if (!product) {
    return new ApiResponse(404, 'Digital product not found').send(res);
  }

  // Increment view count for non-admin users
  if (!req.user || req.user.role !== 'admin') {
    await digitalProductService.incrementViewCount(id as string);
  }
  
  new ApiResponse(200, 'Digital product fetched successfully', product).send(res);
}

export const updateDigitalProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const product = await digitalProductService.updateProduct(id as string, updateData);
  if (!product) {
    return new ApiResponse(404, 'Digital product not found').send(res);
  }
  new ApiResponse(200, 'Digital product updated successfully', product).send(res);
}

export const deleteDigitalProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await digitalProductService.deleteProduct(id as string);
  
  if (!product) {
    return new ApiResponse(404, 'Digital product not found').send(res);
  }
  
  new ApiResponse(200, 'Digital product deleted successfully').send(res);
}

export const generateLicenseKeys = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { count } = req.body;
  
  const product = await digitalProductService.generateLicenseKeys(id as string, count || 1);
  
  if (!product) {
    return new ApiResponse(404, 'Digital product not found').send(res);
  }
  
  new ApiResponse(200, 'License keys generated successfully', product).send(res);
}

export const assignLicenseKey = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const result = await digitalProductService.assignLicenseKey(id as string, req.user.id);
  
  new ApiResponse(200, 'License key assigned successfully', result).send(res);
}

export const updateProductVersion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const versionData = req.body;
  
  const product = await digitalProductService.updateProductVersion(id as string, versionData);
  
  if (!product) {
    return new ApiResponse(404, 'Digital product not found').send(res);
  }
  
  new ApiResponse(200, 'Product version updated successfully', product).send(res);
}

export const getProductsByType = async (req: Request, res: Response) => {
  const { type } = req.params;
  
  const products = await digitalProductService.getProductsByType(type as string);
  
  new ApiResponse(200, 'Products fetched successfully', products).send(res);
}

export const getFeaturedProducts = async (req: Request, res: Response) => {
  const products = await digitalProductService.getFeaturedProducts();
  
  new ApiResponse(200, 'Featured products fetched successfully', products).send(res);
}

export const getProductStats = async (req: Request, res: Response) => {
  const stats = await digitalProductService.getProductStats();
  
  new ApiResponse(200, 'Product stats fetched successfully', stats).send(res);
}