import express from "express";
import {
  createUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "./user.controller.js";

const userRouter = express.Router();

userRouter.post("/", createUserController);
userRouter.get("/:id", getUserByIdController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);

export default userRouter;
