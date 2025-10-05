import bcrypt from "bcrypt";
import type { User } from "../user/user.js";
import UserModel from "../user/user.model.js";

export async function registerUserService(payload: User) {
  const hashPassword = await bcrypt.hash(payload.password, 10);
  const user = await UserModel.create({
    ...payload,
    password: hashPassword,
  });
  return user;
}

export async function loginUserService(user: any, payload: User) {
  
  const isValidPassword = await bcrypt.compare(payload.password, user.password);
  if (isValidPassword) {
    return user;
  } else {
    throw Error("Invalid email or password");
  }
}
