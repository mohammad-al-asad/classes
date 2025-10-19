import express from "express";
import {
  createPurchaseController,
  getPurchasesByCustomerController,
  getPurchasesByDesignController,
  updatePurchaseStatusController,
  deletePurchaseController,
} from "./purchase.controller.js";
import { authValidation } from "../../middleware/authValidation.js";
import { roleValidation } from "../../middleware/roleValidation.js";

const purchaseRouter = express.Router();

purchaseRouter.post(
  "/",
  authValidation,
  roleValidation("user"),
  createPurchaseController
);

purchaseRouter.get("/customer/:customerId", getPurchasesByCustomerController);

purchaseRouter.get("/design/:designId", getPurchasesByDesignController);

purchaseRouter.put("/:id/status", updatePurchaseStatusController);

purchaseRouter.delete("/:id", deletePurchaseController);

export default purchaseRouter;
