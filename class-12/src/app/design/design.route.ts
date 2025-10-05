import express from "express";
import {
  createDesignController,
  deleteDesignController,
  getDesignsController,
  getSingleDesignController,
  updateDesignController
} from "./design.controller.js";

const designRouter = express.Router();

designRouter.get("/", getDesignsController);
designRouter.get("/:id", getSingleDesignController);
designRouter.delete("/:id", deleteDesignController);
designRouter.put("/:id", updateDesignController);
designRouter.post("/create-design", createDesignController);

export default designRouter;
