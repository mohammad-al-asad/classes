import mongoose from "mongoose";
import type { IUser } from "./auth.js";

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  role: {
    type: String,
    enum: ["admin", "provider", "consumer"],
    default: "consumer",
  },
});

export const UserModel = mongoose.model<IUser>("user", userSchema);
