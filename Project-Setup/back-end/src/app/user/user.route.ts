import expres from "express";
import { getAllUsers } from "./user.controller.js";
const UserRouter = expres.Router();

UserRouter.get("/", getAllUsers);

export default UserRouter;
