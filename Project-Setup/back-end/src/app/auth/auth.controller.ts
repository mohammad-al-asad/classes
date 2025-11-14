import type { Request, Response } from "express";
import { AuthServices } from "./auth.service.js";
import { ApiResponse } from "../../lib/apiResponse.js";
import type { AuthRequest } from "../../lib/authMiddleware.js";

const AuthService = new AuthServices();

export const loginUser = async (req: Request, res: Response) => {
  await AuthService.loginService(req, res);
};

export const signupUser = async (req: Request, res: Response) => {
  await AuthService.signupService(req, res);
};

export const logoutUser = async (req: Request, res: Response) => {
  await AuthService.logoutService(req, res);
};
export const getAuth = async (req: AuthRequest, res: Response) => {
  console.log(req.user);
  
  new ApiResponse(res, 200, "Successfully fetched data", req.user);
};
