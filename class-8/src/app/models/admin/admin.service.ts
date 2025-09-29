import type Admin from "./admin.js";
import AdminModel from "./admin.model.js";

export async function createAdminService(payload: Admin) {
  const admin = await AdminModel.create(payload);
  return admin;
}

export async function getAllAdminService() {
  const admins = await AdminModel.find();
  return admins;
}

export async function getSingleAdminService(id: string) {
  const admins = await AdminModel.findOne({ id });
  return admins;
}
export async function deleteAdminService(id: string) {
  await AdminModel.deleteOne({ id });
  return;
}

export async function updateAdminService(data: Admin, id: string) {
  const admin = await AdminModel.updateOne({ id }, data);
  return admin;
}
