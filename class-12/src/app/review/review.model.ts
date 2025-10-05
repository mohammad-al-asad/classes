import mongoose from "mongoose";
import type { Review } from "./pricing.js";

const reviewSchema = new mongoose.Schema<Review>({
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  design: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "design",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ReviewModel = mongoose.model("Review", reviewSchema);

export default ReviewModel;
