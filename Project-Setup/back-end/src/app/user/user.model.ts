import mongoose from "mongoose";
import type { IUser } from "./user.js";

const userSchema = new mongoose.Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  password: { type: String},
  role: { type: String, enum: ["admin", "provider", "consumer"] },
});

export const UserModel = mongoose.model<IUser>("user", userSchema);
