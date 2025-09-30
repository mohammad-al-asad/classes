import mongoose from "mongoose";
import type { Product } from "./product.js";

const productSchema = new mongoose.Schema<Product>({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  price: {
    original_price: { type: String },
    discounted_price: { type: String },
    discount_percentage: { type: Number },
  },
  availability: { type: String },
  rating: { value: { type: Number }, quantity: { type: Number } },
  sku: { type: String },
  brand: { type: String },
  category: { type: String },
  tags: { type: [String] },
  additional_information: {
    weight: { type: String },
    organic: { type: Boolean },
    nutrition: { type: String },
  },
  images: { type: [] },
});

const ProductModel = mongoose.model<Product>("product", productSchema);
export default ProductModel
