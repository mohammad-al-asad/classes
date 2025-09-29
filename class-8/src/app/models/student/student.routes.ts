import express from "express";
import {
  createStudentController,
  deleteStudentController,
  getAllStudentController,
  getSingleStudentController,
  updateStudentController,
} from "./student.controller.js";

const studentRouter = express.Router();

studentRouter.post("/create-student", createStudentController);
studentRouter.get("/", getAllStudentController);
studentRouter.get("/:id", getSingleStudentController);
studentRouter.delete("/:id", deleteStudentController);
studentRouter.put("/:id", updateStudentController);

export default studentRouter;
