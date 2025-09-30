import type { Category } from "./catagory.js";
import CategoryModel from "./category.model.js";

export async function getCategoriesService() {
  const catagories = await CategoryModel.find();
  return catagories;
}

export async function getSingleCategoryService(id: string) {
  const category = await CategoryModel.findById(id);
  return category;
}

export async function createCategoryService(payload: Category) {
  const category = await CategoryModel.create(payload);
  return category;
}
export async function deleteCategoryService(id: string) {
  const response = await CategoryModel.findByIdAndDelete(id);
  return response;
}
export async function updateCategoryService(id: string, payload: Category) {
  const response = await CategoryModel.updateOne({ id }, payload);
  return response;
}
