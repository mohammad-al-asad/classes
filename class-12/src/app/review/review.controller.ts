import type { Request, Response, NextFunction } from "express";
import {
  createReviewService,
  getReviewsByDesignService,
  deleteReviewService,
  updateReviewService,
} from "./review.service.js";

// Create Review
export async function createReviewController(req: Request, res: Response, next: NextFunction) {
  try {
    const review = await createReviewService(req.body);
    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: review,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to create review");
    error.status = 500;
    next(error);
  }
}

// Get Reviews by Design
export async function getReviewsByDesignController(req: Request, res: Response, next: NextFunction) {
  try {
    const designId = req.params.designId;
    const reviews = await getReviewsByDesignService(designId as string);
    res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      data: reviews,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to fetch reviews");
    error.status = 500;
    next(error);
  }
}

// Delete Review
export async function deleteReviewController(req: Request, res: Response, next: NextFunction) {
  try {
    await deleteReviewService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to delete review");
    error.status = 500;
    next(error);
  }
}

// Update Review
export async function updateReviewController(req: Request, res: Response, next: NextFunction) {
  try {
    const updatedReview = await updateReviewService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: updatedReview,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to update review");
    error.status = 500;
    next(error);
  }
}
