import type { Request, Response } from "express";
import {
  createPricingService,
  deletePricingService,
  getPricingsService,
  getSinglePricingService,
  updatePricingService,
} from "./pricing.service.js";

export async function getPricingsController(req: Request, res: Response) {
  try {
    const pricings = await getPricingsService();
    res.status(200).json({
      success: true,
      message: "Pricings fetched successfully",
      data: pricings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch pricings",
    });
  }
}

export async function getSinglePricingController(req: Request, res: Response) {
  try {
    const pricing = await getSinglePricingService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Pricing fetched successfully",
      data: pricing,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch pricing",
    });
  }
}

export async function createPricingController(req: Request, res: Response) {
  try {
    const pricing = await createPricingService(req.body);
    res.status(200).json({
      success: true,
      message: "Pricing created successfully",
      data: pricing,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to create pricing",
    });
  }
}

export async function deletePricingController(req: Request, res: Response) {
  try {
    await deletePricingService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Pricing deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete pricing",
    });
  }
}

export async function updatePricingController(req: Request, res: Response) {
  try {
    await updatePricingService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Pricing updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to update pricing",
    });
  }
}
