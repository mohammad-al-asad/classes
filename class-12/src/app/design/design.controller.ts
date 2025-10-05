import type { Request, Response } from "express";
import {
  createDesignService,
  deleteDesignService,
  getDesignsService,
  getSingleDesignService,
  updateDesignService,
} from "./design.service.js";

export async function getDesignsController(req: Request, res: Response) {
  try {
    const designs = await getDesignsService();
    res.status(200).json({
      success: true,
      message: "Designs fetched successfully",
      data: designs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch designs",
    });
  }
}

export async function getSingleDesignController(req: Request, res: Response) {
  try {
    const design = await getSingleDesignService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Design fetched successfully",
      data: design,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch design",
    });
  }
}

export async function createDesignController(req: Request, res: Response) {
  try {
    const design = await createDesignService(req.body);
    res.status(200).json({
      success: true,
      message: "Design created successfully",
      data: design,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to create design",
    });
  }
}

export async function deleteDesignController(req: Request, res: Response) {
  try {
    await deleteDesignService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Design deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete design",
    });
  }
}

export async function updateDesignController(req: Request, res: Response) {
  try {
    await updateDesignService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Design updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to update design",
    });
  }
}
