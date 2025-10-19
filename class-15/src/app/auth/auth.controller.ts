import type { Request, Response } from "express";
import { loginUserService, registerUserService } from "./auth.service.js";
import UserModel from "../user/user.model.js";

export async function registerUserController(req: Request, res: Response) {
  try {
    const user = await registerUserService(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        email: user.email,
        role: user.role,
        name: user.name,
        phone: user.phone,
        createdAt: user.createdAt,
      },
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
      const token = await loginUserService(user, req.body);
      // res.cookie(process.env.COOKIE_NAME as string, token,{
      //     maxAge: parseInt(process.env.JWT_EXPIRE as string),
      //     httpOnly: true,
      //     signed: true,
      //   });

      res.status(201).json({
        success: true,
        message: "User logged in successfully",
        data: token,
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
