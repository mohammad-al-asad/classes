import type { Request, Response } from "express";
import {
  createCourseService,
  deleteCourseService,
  getAllCourseService,
  getSingleCourseService,
  updateCourseService,
} from "./course.service.js";

export async function createCourseController(req: Request, res: Response) {
  try {
    const course = await createCourseService(req.body);
    res.status(200).json({
      sucsess: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function getAllCourseController(req: Request, res: Response) {
  try {
    const courses = await getAllCourseService();
    res.status(200).json({
      sucsess: true,
      message: "Courses fetched successfully",
      data: courses,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function getSingleCourseController(req: Request, res: Response) {
  try {
    const course = await getSingleCourseService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Course fetched successfully",
      data: course,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function deleteCourseController(req: Request, res: Response) {
  try {
    await deleteCourseService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function updateCourseController(req: Request, res: Response) {
  try {
    const course = await updateCourseService(req.body, req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}
