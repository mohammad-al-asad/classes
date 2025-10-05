import type { Pricing } from "./pricing.js";
import PricingModel from "./pricing.model.js";

export async function getPricingsService() {
  const pricings = await PricingModel.find();
  return pricings;
}

export async function getSinglePricingService(id: string) {
  const pricing = await PricingModel.findById(id);
  return pricing;
}

export async function createPricingService(payload: Pricing) {
  const pricing = await PricingModel.create(payload);
  return pricing;
}

export async function deletePricingService(id: string) {
  const response = await PricingModel.findByIdAndDelete(id);
  return response;
}

export async function updatePricingService(
  id: string,
  payload: Partial<Pricing>
) {
  const response = await PricingModel.updateOne({ _id: id }, payload);
  return response;
}
