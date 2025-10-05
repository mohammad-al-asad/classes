import type { Request, Response, NextFunction } from "express";
import {
  createPurchaseService,
  getPurchasesByCustomerService,
  getPurchasesByDesignService,
  updatePurchaseStatusService,
  deletePurchaseService,
} from "./purchase.service.js";

// Create Purchase
export async function createPurchaseController(req: Request, res: Response, next: NextFunction) {
  try {
    const purchase = await createPurchaseService(req.body);
    res.status(201).json({
      success: true,
      message: "Purchase record created successfully",
      data: purchase,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to create purchase record");
    error.status = 500;
    next(error);
  }
}

// Get Purchases by Customer
export async function getPurchasesByCustomerController(req: Request, res: Response, next: NextFunction) {
  try {
    const customerId = req.params.customerId;
    const purchases = await getPurchasesByCustomerService(customerId as string);
    res.status(200).json({
      success: true,
      message: "Purchases fetched successfully",
      data: purchases,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch purchases by customer");
    error.status = 500;
    next(error);
  }
}

// Get Purchases by Design
export async function getPurchasesByDesignController(req: Request, res: Response, next: NextFunction) {
  try {
    const designId = req.params.designId;
    const purchases = await getPurchasesByDesignService(designId as string);
    res.status(200).json({
      success: true,
      message: "Purchases fetched successfully",
      data: purchases,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch purchases by design");
    error.status = 500;
    next(error);
  }
}

// Update Purchase Status
export async function updatePurchaseStatusController(req: Request, res: Response, next: NextFunction) {
  try {
    const purchaseId = req.params.id;
    const { paymentStatus } = req.body;
    const updatedPurchase = await updatePurchaseStatusService(purchaseId as string, paymentStatus);
    res.status(200).json({
      success: true,
      message: "Purchase status updated successfully",
      data: updatedPurchase,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to update purchase status");
    error.status = 500;
    next(error);
  }
}

// Delete Purchase
export async function deletePurchaseController(req: Request, res: Response, next: NextFunction) {
  try {
    await deletePurchaseService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Purchase record deleted successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to delete purchase record");
    error.status = 500;
    next(error);
  }
}
