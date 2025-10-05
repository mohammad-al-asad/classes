import type { Review } from "./pricing.js";
import ReviewModel from "./review.model.js";

export async function createReviewService(payload: Review) {
  const review = await ReviewModel.create(payload);
  return review;
}

export async function getReviewsByDesignService(designId: string) {
  const reviews = await ReviewModel.find({ design: designId }).populate("reviewer", "name email"); 
  return reviews;
}

export async function deleteReviewService(reviewId: string) {
  const result = await ReviewModel.findByIdAndDelete(reviewId);
  return result;
}

export async function updateReviewService(reviewId: string, payload: Partial<Review>) {
  const result = await ReviewModel.findByIdAndUpdate(reviewId, payload, { new: true });
  return result;
}
