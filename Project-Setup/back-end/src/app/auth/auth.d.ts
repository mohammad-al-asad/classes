import type mongoose from "mongoose";

export interface IUser {
  username: string;
  email:string;
  password:string;
  role: "admin" | "provider" | "consumer";
}
