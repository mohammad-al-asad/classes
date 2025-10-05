import mongoose, { Schema } from "mongoose";
import type { Product } from "./product.js";

const productSchema = new mongoose.Schema<Product>({
  id: { type: String, unique: true },
  name: { type: String },
  description: { type: String },
  sale: { type: Boolean },
  price: {
    original_price: { type: String },
    discounted_price: { type: String },
    discount_percentage: { type: Number },
  },
  availability: { type: String },
  rating: { value: { type: Number }, quantity: { type: Number } },
  sku: { type: String },
  brand: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "category" },
  tags: { type: [String] },
  additional_information: {
    weight: { type: String },
    organic: { type: Boolean },
    nutrition: { type: String },
  },
  images: { type: [String] },
});

const ProductModel = mongoose.model<Product>("product", productSchema);
export default ProductModel;
