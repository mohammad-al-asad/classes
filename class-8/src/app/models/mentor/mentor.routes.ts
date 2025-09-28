import express from "express";
import { createMentorController } from "./mentor.controller.js";

const courseRouter = express.Router();

courseRouter.post("/create-mentor",createMentorController);

export default courseRouter;
