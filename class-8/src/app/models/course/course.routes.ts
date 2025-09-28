import express from "express";
import { createCourseController, deleteCourseController, getAllCourseController, getSingleCourseController, updateCourseController } from "./course.controller.js";

const courseRouter = express.Router();

courseRouter.post("/create-course",createCourseController);
courseRouter.get("/",getAllCourseController);
courseRouter.get("/:id",getSingleCourseController);
courseRouter.delete("/:id",deleteCourseController);
courseRouter.put("/:id",updateCourseController);

export default courseRouter;
