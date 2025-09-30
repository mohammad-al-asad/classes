import type { Request, Response } from "express";
import {
  createProductService,
  deleteProductService,
  getProductsService,
  getSingleProductService,
  updateProductService,
} from "./product.service.js";

export async function getProductsController(req: Request, res: Response) {
  try {
    const products = await getProductsService();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetched products",
    });
  }
}

export async function getSingleProductController(req: Request, res: Response) {
  try {
    const product = await getSingleProductService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetched product",
    });
  }
}

export async function createProductController(req: Request, res: Response) {
  try {
    const product = await createProductService(req.body);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
}

export async function deleteProductController(req: Request, res: Response) {
  try {
    await deleteProductService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
}

export async function updateProductController(req: Request, res: Response) {
  try {
    await updateProductService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
}
