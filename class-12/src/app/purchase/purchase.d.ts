import type mongoose from "mongoose";

export interface Purchase {
  customer: mongoose.ObjectId;         // Reference to User
  design: mongoose.ObjectId;           // Reference to Design
  selectedPricingPlan: string;         // Plan name (e.g. "Basic", "Standard", "Premium")
  paymentStatus: "Pending" | "Paid" | "Cancelled";
  purchaseDate?: Date;
}
