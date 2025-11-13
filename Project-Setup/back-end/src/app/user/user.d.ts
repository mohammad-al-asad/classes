import type mongoose from "mongoose";

export interface IUser {
  name: string;
  email:string;
  password:string;
  role: "admin" | "provider" | "consumer";
}
