import express from "express";
import {
  loginUserController,
  registerUserController,
} from "./auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerUserController);
authRouter.get("/login", loginUserController);

export default authRouter;
