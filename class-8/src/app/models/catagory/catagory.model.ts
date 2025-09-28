import { model, Schema } from "mongoose";
import type Catagory from "./catagory.js";

const catagorySchema = new Schema<Catagory>({
  id: { type: Number ,required:true},
  name: { type: String ,required:true},
  slug: { type: String ,required:true},
  icon: { type: String ,required:true},
});

const CatagoryModel = model<Catagory>("catagory", catagorySchema);
export default CatagoryModel;
