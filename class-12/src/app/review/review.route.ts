import express from "express";
import {
  createReviewController,
  deleteReviewController,
  getReviewsByDesignController,
  updateReviewController,
} from "./review.controller.js";

const reviewRouter = express.Router();

// Get reviews for a specific design
reviewRouter.get("/design/:designId", getReviewsByDesignController);

// Create a new review
reviewRouter.post("/", createReviewController);

// Update a review by id
reviewRouter.put("/:id", updateReviewController);

// Delete a review by id
reviewRouter.delete("/:id", deleteReviewController);

export default reviewRouter;
