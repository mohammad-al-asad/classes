import type { Request, Response } from "express";
import {
  createReviewService,
  getReviewsByDesignService,
  deleteReviewService,
  updateReviewService,
} from "./review.service.js";

export async function createReviewController(req: Request, res: Response) {
  try {
    const review = await createReviewService(req.body);
    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: review,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create review",
    });
  }
}

export async function getReviewsByDesignController(req: Request, res: Response) {
  try {
    const designId = req.params.designId;
    const reviews = await getReviewsByDesignService(designId as string);
    res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
    });
  }
}

export async function deleteReviewController(req: Request, res: Response) {
  try {
    await deleteReviewService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete review",
    });
  }
}

export async function updateReviewController(req: Request, res: Response) {
  try {
    const updatedReview = await updateReviewService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: updatedReview,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update review",
    });
  }
}
