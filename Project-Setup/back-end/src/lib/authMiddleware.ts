import type { NextFunction, Request, Response } from "express";
import { ApiResponse } from "./apiResponse.js";
import jwt from "jsonwebtoken";
import { UserModel } from "../app/auth/auth.model.js";
export interface AuthRequest extends Request {
  user?: any;
}
export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) return new ApiResponse(res, 401, "Unauthorized");
    const { id } = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const user = await UserModel.findById(id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return new ApiResponse(res, 500, "There was an error");
  }
};
