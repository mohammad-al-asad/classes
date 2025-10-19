import type { User } from "./user.js";
import UserModel from "./user.model.js";

export async function getUserByEmailService(email: string) {
  const user = await UserModel.findOne({ email });
  return user;
}

export async function updateUserService(
  userId: string,
  payload: Partial<User>
) {
  const updatedUser = await UserModel.findByIdAndUpdate(userId, payload, {
    new: true,
  }).select("-password");
  return updatedUser;
}
