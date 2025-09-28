import type { Request, Response } from "express";
import { createMentorService } from "./mentor.service.js";

export async function createMentorController(req: Request, res: Response) {
  try {
    const mentor = await createMentorService(req.body);
    res.status(200).json({
      sucsess: true,
      message: "Mentor created successfully",
      data: mentor,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}
