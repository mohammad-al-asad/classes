import type { Request, Response } from "express";
import {
  createMentorService,
  deleteMentorService,
  getAllMentorService,
  getSingleMentorService,
  updateMentorService,
} from "./mentor.service.js";

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

export async function getAllMentorController(req: Request, res: Response) {
  try {
    const mentors = await getAllMentorService();
    res.status(200).json({
      sucsess: true,
      message: "Mentors fetched successfully",
      data: mentors,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function getSingleMentorController(req: Request, res: Response) {
  try {
    const mentor = await getSingleMentorService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Mentor fetched successfully",
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

export async function deleteMentorController(req: Request, res: Response) {
  try {
    await deleteMentorService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Mentor deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function updateMentorController(req: Request, res: Response) {
  try {
    const mentor = await updateMentorService(req.body, req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Mentor updated successfully",
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
