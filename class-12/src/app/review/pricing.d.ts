import type mongoose from "mongoose";

export interface Review {
  reviewer: mongoose.ObjectId; // reference to User
  design: mongoose.ObjectId;   // reference to Design
  rating: number;              // 1 to 5
  comment: string;
  createdAt?: Date;
}
