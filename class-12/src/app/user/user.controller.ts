import type { Request, Response, NextFunction } from "express";
import { getUserByEmailService, updateUserService } from "./user.service.js";

// Get user by email
export async function getUserByEmailController(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await getUserByEmailService(req.body.email as string);

    if (!user) {
      const error: any = new Error("User not found");
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to get user");
    error.status = err.status || 500;
    next(error);
  }
}

// Update user
export async function updateUserController(req: Request, res: Response, next: NextFunction) {
  try {
    const updatedUser = await updateUserService(req.params.id as string, req.body);

    if (!updatedUser) {
      const error: any = new Error("User not found");
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err: any) {
    const error: any = new Error(err.message || "Failed to update user");
    error.status = err.status || 500;
    next(error);
  }
}
