import type { Request, Response, NextFunction } from "express";
import {
  createDesignService,
  deleteDesignService,
  getDesignsService,
  getSingleDesignService,
  updateDesignService,
} from "./design.service.js";

// Get all designs
export async function getDesignsController(req: Request, res: Response, next: NextFunction) {
  try {
    const designs = await getDesignsService();
    res.status(200).json({
      success: true,
      message: "Designs fetched successfully",
      data: designs,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch designs");
    error.status = 500;
    next(error);
  }
}

// Get single design
export async function getSingleDesignController(req: Request, res: Response, next: NextFunction) {
  try {
    const design = await getSingleDesignService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Design fetched successfully",
      data: design,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch design");
    error.status = 500;
    next(error);
  }
}

// Create design
export async function createDesignController(req: Request, res: Response, next: NextFunction) {
  try {
    const design = await createDesignService(req.body);
    res.status(200).json({
      success: true,
      message: "Design created successfully",
      data: design,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to create design");
    error.status = 500;
    next(error);
  }
}

// Delete design
export async function deleteDesignController(req: Request, res: Response, next: NextFunction) {
  try {
    await deleteDesignService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Design deleted successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to delete design");
    error.status = 500;
    next(error);
  }
}

// Update design
export async function updateDesignController(req: Request, res: Response, next: NextFunction) {
  try {
    await updateDesignService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Design updated successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to update design");
    error.status = 500;
    next(error);
  }
}
