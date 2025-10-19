import type { Request, Response } from "express";
import {
  createTourService,
  deleteTourService,
  getToursService,
  getSingleTourService,
  updateTourService,
} from "./tour.service.js";

export async function getToursController(req: Request, res: Response) {
  try {
    const tours = await getToursService();
    res.status(200).json({
      success: true,
      message: "Tours fetched successfully",
      data: tours,
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to fetch Tours");
    (error as any).status = 500;
    throw error;
  }
}

export async function getSingleTourController(req: Request, res: Response) {
  try {
    const tour = await getSingleTourService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Tour fetched successfully",
      data: tour,
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to fetch Tour");
    (error as any).status = 500;
    throw error;
  }
}

export async function createTourController(req: Request, res: Response) {
  try {
    const tour = await createTourService(req.body);
    res.status(200).json({
      success: true,
      message: "Tour created successfully",
      data: tour,
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to create Tour");
    (error as any).status = 500;
    throw error;
  }
}

export async function deleteTourController(req: Request, res: Response) {
  try {
    await deleteTourService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Tour deleted successfully",
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to delete Tour");
    (error as any).status = 500;
    throw error;
  }
}

export async function updateTourController(req: Request, res: Response) {
  try {
    await updateTourService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Tour updated successfully",
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to update Tour");
    (error as any).status = 500;
    throw error;
  }
}
