import type { Product } from "./product.js";
import ProductModel from "./product.model.js";

export async function getProductsService() {
  const products = await ProductModel.find();
  return products;
}

export async function getSingleProductService(id: string) {
  const product = await ProductModel.findById(id);
  return product;
}

export async function createProductService(payload: Product) {
  const product = await ProductModel.create(payload);
  return product;
}

export async function deleteProductService(id: string) {
  const response = await ProductModel.findByIdAndDelete(id);
  return response;
}

export async function updateProductService(
  id: string,
  payload: Partial<Product>
) {
  const response = await ProductModel.updateOne({ id }, payload);
  return response;
}
