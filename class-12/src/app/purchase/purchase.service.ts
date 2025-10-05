import PurchaseModel from "./puchase.model.js";
import type { Purchase } from "./purchase.js";


export async function createPurchaseService(payload: Purchase) {
  const purchase = await PurchaseModel.create(payload);
  return purchase;
}

export async function getPurchasesByCustomerService(customerId: string) {
  const purchases = await PurchaseModel.find({ customer: customerId })
    .populate("design")
    .populate("customer", "name email");
  return purchases;
}

export async function getPurchasesByDesignService(designId: string) {
  const purchases = await PurchaseModel.find({ design: designId })
    .populate("design")
    .populate("customer", "name email");
  return purchases;
}

export async function updatePurchaseStatusService(purchaseId: string, status: "Pending" | "Paid" | "Cancelled") {
  const updatedPurchase = await PurchaseModel.findByIdAndUpdate(
    purchaseId,
    { paymentStatus: status },
    { new: true }
  );
  return updatedPurchase;
}

export async function deletePurchaseService(purchaseId: string) {
  const result = await PurchaseModel.findByIdAndDelete(purchaseId);
  return result;
}
