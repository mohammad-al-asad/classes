import express from "express";
import {
  createMentorController,
  deleteMentorController,
  getAllMentorController,
  getSingleMentorController,
  updateMentorController,
} from "./mentor.controller.js";

const mentorRouter = express.Router();

mentorRouter.post("/create-mentor", createMentorController);
mentorRouter.get("/", getAllMentorController);
mentorRouter.get("/:id", getSingleMentorController);
mentorRouter.delete("/:id", deleteMentorController);
mentorRouter.put("/:id", updateMentorController);

export default mentorRouter;
