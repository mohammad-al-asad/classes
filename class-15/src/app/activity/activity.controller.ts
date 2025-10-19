import type { Request, Response } from "express";
import {
  createActivityService,
  deleteActivityService,
  getActivitiesService,
  getSingleActivityService,
  updateActivityService,
} from "./activity.service.js";

export async function getActivitiesController(req: Request, res: Response) {
  try {
    const activities = await getActivitiesService();
    res.status(200).json({
      success: true,
      message: "Activities fetched successfully",
      data: activities,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch Activities");
    error.status = 500;
    throw error;
  }
}

export async function getSingleActivityController(req: Request, res: Response) {
  try {
    const activity = await getSingleActivityService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Activity fetched successfully",
      data: activity,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch Activity");
    error.status = 500;
    throw error;
  }
}

export async function createActivityController(req: Request, res: Response) {
  try {
    const activity = await createActivityService(req.body);
    res.status(200).json({
      success: true,
      message: "Activity created successfully",
      data: activity,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to create Activity");
    error.status = 500;
    throw error;
  }
}

export async function deleteActivityController(req: Request, res: Response) {
  try {
    await deleteActivityService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Activity deleted successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to delete Activity");
    error.status = 500;
    throw error;
  }
}

export async function updateActivityController(req: Request, res: Response) {
  try {
    await updateActivityService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Activity updated successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to update Activity");
    error.status = 500;
    throw error;
  }
}
