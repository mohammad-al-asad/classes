import mongoose from "mongoose";
import type { Purchase } from "./purchase.js";

const purchaseSchema = new mongoose.Schema<Purchase>({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  design: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Design",
    required: true,
  },
  selectedPricingPlan: {
    type: String,
    enum: ["Basic", "Standard", "Premium"],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid", "Cancelled"],
    default: "Pending",
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
});

const PurchaseModel = mongoose.model("Purchase", purchaseSchema);

export default PurchaseModel;
