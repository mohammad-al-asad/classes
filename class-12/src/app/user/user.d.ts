import type mongoose from "mongoose";

export interface User {
  name: string;
  email: string;
  password: string;
  role: "Customer" | "Admin" | "Designer";
  createdAt?: Date;
  updatedAt?: Date;
}
