import type { Request, Response } from "express";
import {
  createUserService,
  getUserByIdService,
  getUserByEmailService,
  updateUserService,
  deleteUserService,
} from "./user.service.js";

export async function createUserController(req: Request, res: Response) {
  try {
    const user = await createUserService(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
}

export async function getUserByIdController(req: Request, res: Response) {
  try {
    const user = await getUserByIdService(req.params.id as string);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to get user",
    });
  }
}

export async function updateUserController(req: Request, res: Response) {
  try {
    const updatedUser = await updateUserService(req.params.id as string, req.body);
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update user",
    });
  }
}

export async function deleteUserController(req: Request, res: Response) {
  try {
    const deletedUser = await deleteUserService(req.params.id as string);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
}
