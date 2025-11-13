import mongoose from "mongoose";
import type { IService } from "./service.js";

const serviceSchema = new mongoose.Schema<IService>({
  title: { type: String, trim: true },
  provider: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  serviceType: String,
  location: String,
});

export const ServiceModel = mongoose.model<IService>("service", serviceSchema);
