import type mongoose from "mongoose";

export interface Product {
  id: string;
  name: string;
  description: string;
  sale?: boolean;
  price: {
    original_price: string;
    discounted_price: string;
    discount_percentage: number;
  };
  availability: string;
  rating: { value: number; quantity: number };
  sku: string;
  brand: string;
  category: mongoose.ObjectId;
  tags: string[];
  additional_information: {
    weight: string;
    organic: boolean;
    nutrition: string;
  };
  images: string[];
}
