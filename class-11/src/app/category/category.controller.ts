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
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch Catagories",
    });
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
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetched Category",
    });
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
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to create Category",
    });
  }
}

export async function deleteCategoryController(req: Request, res: Response) {
  try {
    await deleteCategoryService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete Category",
    });
  }
}

export async function updateCategoryController(req: Request, res: Response) {
  try {
    await updateCategoryService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Category updated successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to update Category",
    });
  }
}
