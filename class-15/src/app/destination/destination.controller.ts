import type { Request, Response } from "express";
import {
  createDestinationService,
  deleteDestinationService,
  getDestinationsService,
  getSingleDestinationService,
  updateDestinationService,
} from "./destination.service.js";

export async function getDestinationsController(req: Request, res: Response) {
  try {
    const destinations = await getDestinationsService();
    res.status(200).json({
      success: true,
      message: "Destinations fetched successfully",
      data: destinations,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch Destinations");
    error.status = 500;
    throw error;
  }
}

export async function getSingleDestinationController(req: Request, res: Response) {
  try {
    const destination = await getSingleDestinationService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Destination fetched successfully",
      data: destination,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch Destination");
    error.status = 500;
    throw error;
  }
}

export async function createDestinationController(req: Request, res: Response) {
  try {
    const destination = await createDestinationService(req.body);
    res.status(200).json({
      success: true,
      message: "Destination created successfully",
      data: destination,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to create Destination");
    error.status = 500;
    throw error;
  }
}

export async function deleteDestinationController(req: Request, res: Response) {
  try {
    await deleteDestinationService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Destination deleted successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to delete Destination");
    error.status = 500;
    throw error;
  }
}

export async function updateDestinationController(req: Request, res: Response) {
  try {
    await updateDestinationService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Destination updated successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to update Destination");
    error.status = 500;
    throw error;
  }
}
