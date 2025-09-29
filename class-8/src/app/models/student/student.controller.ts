import type { Request, Response } from "express";
import {
  createStudentService,
  deleteStudentService,
  getAllStudentService,
  getSingleStudentService,
  updateStudentService,
} from "./student.service.js";

export async function createStudentController(req: Request, res: Response) {
  try {
    const student = await createStudentService(req.body);
    res.status(200).json({
      sucsess: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function getAllStudentController(req: Request, res: Response) {
  try {
    const students = await getAllStudentService();
    res.status(200).json({
      sucsess: true,
      message: "Students fetched successfully",
      data: students,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function getSingleStudentController(req: Request, res: Response) {
  try {
    const student = await getSingleStudentService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Student fetched successfully",
      data: student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function deleteStudentController(req: Request, res: Response) {
  try {
    await deleteStudentService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function updateStudentController(req: Request, res: Response) {
  try {
    const student = await updateStudentService(req.body, req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}
