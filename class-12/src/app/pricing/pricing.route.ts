import express from "express";
import {
  createPricingController,
  deletePricingController,
  getPricingsController,
  getSinglePricingController,
  updatePricingController
} from "./pricing.controller.js";

const pricingRouter = express.Router();

pricingRouter.get("/", getPricingsController);
pricingRouter.get("/:id", getSinglePricingController);
pricingRouter.delete("/:id", deletePricingController);
pricingRouter.put("/:id", updatePricingController);
pricingRouter.post("/create-pricing", createPricingController);

export default pricingRouter;
