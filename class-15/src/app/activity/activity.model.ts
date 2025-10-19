import mongoose, { Schema } from "mongoose";
import type Activity from "../activity/activity.js";

const ActivitySchema: Schema = new Schema<Activity>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ActivityModel = mongoose.model<Activity>(
  "Activity",
  ActivitySchema
);

export default ActivityModel;
