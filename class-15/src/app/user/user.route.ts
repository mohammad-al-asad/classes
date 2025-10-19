import express from "express";
import {
  getUserByEmailController,
  updateUserController,
} from "./user.controller.js";

const userRouter = express.Router();

userRouter.get("/profile", getUserByEmailController);
userRouter.put("/update", updateUserController);

export default userRouter;
