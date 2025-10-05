import type { Request, Response } from "express";
import { loginUserService, registerUserService } from "./auth.service.js";
import UserModel from "../user/user.model.js";

export async function registerUserController(req: Request, res: Response) {
  try {
    const user = await registerUserService(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to create user");
    error.status = 500;
    throw error;
  }
}

export async function loginUserController(req: Request, res: Response) {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
    });
    if (user) {
      await loginUserService(user, req.body);
      res.status(201).json({
        success: true,
        message: "User logged in successfully",
        data: user,
      });
    } else {
      const error: any = new Error("User not found");
      error.status = 404;
      throw error;
    }
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to login user");
    error.status = 500;
    throw error;
  }
}
