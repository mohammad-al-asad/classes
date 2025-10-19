import express from "express";
import {
  loginUserController,
  registerUserController,
} from "./auth.controller.js";
import { UserSchema } from "../user/user.validation.js";
import { validateRequest } from "../../middleware/validateRequest.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateRequest(UserSchema as any),
  registerUserController
);
authRouter.get("/login", loginUserController);

export default authRouter;
