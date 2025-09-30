import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoriesController,
  getSingleCategoryController,
  updateCategoryController,
} from "./category.controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getCategoriesController);
categoryRouter.get("/:id", getSingleCategoryController);
categoryRouter.delete("/:id", deleteCategoryController);
categoryRouter.put("/:id", updateCategoryController);
categoryRouter.post("/create-category", createCategoryController);

export default categoryRouter;
