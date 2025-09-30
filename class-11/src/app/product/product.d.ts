export interface Product {
  id: string;
  name: string;
  description: string;
  price: {
    original_price: string;
    discounted_price: string;
    discount_percentage: number;
  };
  availability: string;
  rating: { value: number; quantity: number };
  sku: string;
  brand: string;
  category: string;
  tags: string[];
  additional_information: {
    weight: string;
    organic: boolean;
    nutrition: string;
  };
  images: string[];
}