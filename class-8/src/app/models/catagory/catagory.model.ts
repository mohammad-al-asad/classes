import { model, Schema } from "mongoose";
import type Catagory from "./catagory.js";

const catagorySchema = new Schema<Catagory>({
  id: { type: Number },
  name: { type: String },
  slug: { type: String },
  icon: { type: String },
});

const CatagoryModel = model<Catagory>("catagory", catagorySchema);
export default CatagoryModel;
