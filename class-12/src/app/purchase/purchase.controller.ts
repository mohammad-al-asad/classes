import type { Request, Response } from "express";
import {
  createPurchaseService,
  getPurchasesByCustomerService,
  getPurchasesByDesignService,
  updatePurchaseStatusService,
  deletePurchaseService,
} from "./purchase.service.js";

export async function createPurchaseController(req: Request, res: Response) {
  try {
    const purchase = await createPurchaseService(req.body);
    res.status(201).json({
      success: true,
      message: "Purchase record created successfully",
      data: purchase,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create purchase record",
    });
  }
}

export async function getPurchasesByCustomerController(req: Request, res: Response) {
  try {
    const customerId = req.params.customerId;
    const purchases = await getPurchasesByCustomerService(customerId as string);
    res.status(200).json({
      success: true,
      message: "Purchases fetched successfully",
      data: purchases,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch purchases",
    });
  }
}

export async function getPurchasesByDesignController(req: Request, res: Response) {
  try {
    const designId = req.params.designId;
    const purchases = await getPurchasesByDesignService(designId as string);
    res.status(200).json({
      success: true,
      message: "Purchases fetched successfully",
      data: purchases,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch purchases",
    });
  }
}

export async function updatePurchaseStatusController(req: Request, res: Response) {
  try {
    const purchaseId = req.params.id;
    const { paymentStatus } = req.body;
    const updatedPurchase = await updatePurchaseStatusService(purchaseId as string, paymentStatus);
    res.status(200).json({
      success: true,
      message: "Purchase status updated successfully",
      data: updatedPurchase,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update purchase status",
    });
  }
}

export async function deletePurchaseController(req: Request, res: Response) {
  try {
    await deletePurchaseService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Purchase record deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete purchase record",
    });
  }
}
