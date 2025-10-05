import type mongoose from "mongoose";

export interface Purchase {
  customer: mongoose.ObjectId;         
  design: mongoose.ObjectId;          
  selectedPricingPlan: string;         
  paymentStatus: "Pending" | "Paid" | "Cancelled";
  purchaseDate?: Date;
}
