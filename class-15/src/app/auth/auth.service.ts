import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { User } from "../user/user.js";
import UserModel from "../user/user.model.js";

export async function registerUserService(payload: User) {
  const hashPassword = await bcrypt.hash(String(payload.password), 10);
  const user = await UserModel.create({
    ...payload,
    password: hashPassword,
  });
  return user;
}

export async function loginUserService(user: any, payload: User) {
  const isValidPassword = await bcrypt.compare(
    String(payload.password),
    String(user.password)
  );
  if (isValidPassword) {
    
    const token = jwt.sign(
      { name: user.name, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      {
        expiresIn: parseInt(process.env.JWT_EXPIRE as string),
      }
    );
    return token;
  } else {
    throw Error("Invalid email or password");
  }
}
