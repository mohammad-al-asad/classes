import type mongoose from "mongoose";

export interface Review {
  reviewer: mongoose.ObjectId;
  design: mongoose.ObjectId;   
  rating: number;              
  comment: string;
  createdAt?: Date;
}
