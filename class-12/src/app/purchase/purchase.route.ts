import express from "express";
import {
  createPurchaseController,
  getPurchasesByCustomerController,
  getPurchasesByDesignController,
  updatePurchaseStatusController,
  deletePurchaseController,
} from "./purchase.controller.js";

const purchaseRouter = express.Router();

// Create purchase record
purchaseRouter.post("/", createPurchaseController);

// Get purchases by customer
purchaseRouter.get("/customer/:customerId", getPurchasesByCustomerController);

// Get purchases by design
purchaseRouter.get("/design/:designId", getPurchasesByDesignController);

// Update purchase payment status
purchaseRouter.put("/:id/status", updatePurchaseStatusController);

// Delete purchase record
purchaseRouter.delete("/:id", deletePurchaseController);

export default purchaseRouter;
