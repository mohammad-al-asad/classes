import type { Design } from "./design.js";
import DesignModel from "./design.model.js";

export async function getDesignsService() {
  const designs = await DesignModel.find();
  return designs;
}

export async function getSingleDesignService(id: string) {
  const design = await DesignModel.findById(id);
  return design;
}

export async function createDesignService(payload: Design) {
  const design = await DesignModel.create(payload);
  return design;
}

export async function deleteDesignService(id: string) {
  const response = await DesignModel.findByIdAndDelete(id);
  return response;
}

export async function updateDesignService(
  id: string,
  payload: Partial<Design>
) {
  const response = await DesignModel.updateOne({ _id: id }, payload);
  return response;
}
