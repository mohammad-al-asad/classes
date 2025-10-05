import mongoose from "mongoose";
import type { Category } from "./catagory.js";

const categorySchema = new mongoose.Schema<Category>({
  image: { type: String },
  name: { type: String },
  count: { type: Number },
});

const CategoryModel = mongoose.model<Category>("category", categorySchema);
export default CategoryModel;
