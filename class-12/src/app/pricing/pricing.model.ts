import mongoose from "mongoose";
import type { Pricing } from "./pricing.js";

const pricingSchema = new mongoose.Schema<Pricing>({
  name: {
    type: String,
    enum: ["Basic", "Standard", "Premium"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  features: {
    type: [String],
    default: [],
  },
  duration: {
    type: String,
    required: true, // e.g., "1 month", "6 months", "1 year"
  },
});

const PricingModel = mongoose.model("pricing", pricingSchema);

export default PricingModel;