import type { Request, Response } from "express";
import {
  createCategoryService,
  deleteCategoryService,
  getCategoriesService,
  getSingleCategoryService,
  updateCategoryService,
} from "./category.service.js";

export async function getCategoriesController(req: Request, res: Response) {
  try {
    const catagories = await getCategoriesService();
    res.status(200).json({
      success: true,
      message: "Catagories fetched successfully",
      data: catagories,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch Catagories");
    error.status = 500;
    throw error;
  }
}

export async function getSingleCategoryController(req: Request, res: Response) {
  try {
    const category = await getSingleCategoryService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: category,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetched Category");
    error.status = 500;
    throw error;
  }
}

export async function createCategoryController(req: Request, res: Response) {
  try {
    const category = await createCategoryService(req.body);
    res.status(200).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to create Category");
    error.status = 500;
    throw error;
  }
}

export async function deleteCategoryController(req: Request, res: Response) {
  try {
    await deleteCategoryService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to delete Category");
    error.status = 500;
    throw error;
  }
}

export async function updateCategoryController(req: Request, res: Response) {
  try {
    await updateCategoryService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Category updated successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to update Category");
    error.status = 500;
    throw error;
  }
}
