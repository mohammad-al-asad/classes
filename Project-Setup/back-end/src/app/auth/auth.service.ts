import type { Request, Response } from "express";
import { UserModel } from "./auth.model.js";
import { ApiResponse } from "../../lib/apiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthServices {
  async signupService(req: Request, res: Response) {
    try {
      const { password, ...user } = (await UserModel.create({
        ...req.body,
        password: await bcrypt.hash(req.body.password, 10),
      })) as any;
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "");
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return new ApiResponse(res, 200, "User created succesfully", user._doc);
    } catch (error) {
      console.log(error);
      new ApiResponse(res, 500, "There was an error");
    }
  }

  async loginService(req: Request, res: Response) {
    try {
      const user = await UserModel.findOne({
        $or: [{ email: req.body.username }, { username: req.body.username }],
      });

      if (!user || !(await bcrypt.compare(req.body.password, user.password)))
        return new ApiResponse(res, 403, "invalid email or password");

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "");
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      const { password, ...restUser } = user as any;

      return new ApiResponse(res, 200, "Login succesfully", restUser._doc);
    } catch (error) {
      console.log(error);

      new ApiResponse(res, 500, "There was an error");
    }
  }

  async logoutService(req: Request, res: Response) {
    try {
      res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      new ApiResponse(res, 200, "Successfully logged out");
    } catch (error) {
      new ApiResponse(res, 500, "There was an error");
    }
  }
}
