import mongoose, { Schema } from "mongoose";
import type Tour from "./tour.js";

const TourSchema: Schema = new Schema<Tour>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  destination: { type: Schema.Types.ObjectId, ref: "Destination", required: true },
  activities: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const TourModel = mongoose.model<Tour>("Tour", TourSchema);

export default TourModel;
