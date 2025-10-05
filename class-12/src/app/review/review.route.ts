import express from "express";
import {
  createReviewController,
  deleteReviewController,
  getReviewsByDesignController,
  updateReviewController,
} from "./review.controller.js";

const reviewRouter = express.Router();

reviewRouter.get("/design/:designId", getReviewsByDesignController);

reviewRouter.post("/", createReviewController);

reviewRouter.put("/:id", updateReviewController);

reviewRouter.delete("/:id", deleteReviewController);

export default reviewRouter;
