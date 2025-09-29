import type Catagory from "./catagory.js";
import CatagoryModel from "./catagory.model.js";

export async function createCatagoryService(payload: Catagory) {
  const Catagory = await CatagoryModel.create(payload);
  return Catagory;
}

export async function getAllCatagoryService() {
  const Catagorys = await CatagoryModel.find();
  return Catagorys;
}

export async function getSingleCatagoryService(id: string) {
  const Catagorys = await CatagoryModel.findOne({ id });
  return Catagorys;
}
export async function deleteCatagoryService(id: string) {
  await CatagoryModel.deleteOne({ id });
  return;
}

export async function updateCatagoryService(data: Catagory, id: string) {
  const Catagory = await CatagoryModel.updateOne({ id }, data);
  return Catagory;
}
