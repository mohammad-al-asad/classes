import express from "express";
import {
  createAdminController,
  deleteAdminController,
  getAllAdminController,
  getSingleAdminController,
  updateAdminController,
} from "./admin.controller.js";

const adminRouter = express.Router();

adminRouter.post("/create-Admin", createAdminController);
adminRouter.get("/", getAllAdminController);
adminRouter.get("/:id", getSingleAdminController);
adminRouter.delete("/:id", deleteAdminController);
adminRouter.put("/:id", updateAdminController);

export default adminRouter;
