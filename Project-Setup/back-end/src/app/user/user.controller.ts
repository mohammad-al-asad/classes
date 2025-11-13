import type { Request, Response } from "express";
import { ApiResponse } from "../../lib/apiResponse.js";
import { UserModel } from "./user.model.js";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    new ApiResponse(res, 200, "Data fetched succesfully", users);
  } catch (error) {
    new ApiResponse(res, 500, "There was an error");
  }
};
