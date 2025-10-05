export interface Pricing {
  name: "Basic" | "Standard" | "Premium";
  price: number;
  features: string[];
  duration: string;
}
