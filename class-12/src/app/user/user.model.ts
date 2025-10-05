import mongoose from "mongoose";
import type { User } from "./user.js";

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Customer", "Admin", "Designer"],
    default: "Customer",
  },
}, {
  timestamps: true,
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
