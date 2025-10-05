import type { User } from "./user.js";
import UserModel from "./user.model.js";

export async function createUserService(payload: User) {
  const user = await UserModel.create(payload);
  return user;
}

export async function getUserByIdService(userId: string) {
  const user = await UserModel.findById(userId).select("-password");
  return user;
}

export async function getUserByEmailService(email: string) {
  const user = await UserModel.findOne({ email });
  return user;
}

export async function updateUserService(userId: string, payload: Partial<User>) {
  const updatedUser = await UserModel.findByIdAndUpdate(userId, payload, { new: true }).select("-password");
  return updatedUser;
}

export async function deleteUserService(userId: string) {
  const deletedUser = await UserModel.findByIdAndDelete(userId);
  return deletedUser;
}
