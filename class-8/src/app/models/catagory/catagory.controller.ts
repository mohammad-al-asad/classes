import type { Request, Response } from "express";
import {
  createCatagoryService,
  deleteCatagoryService,
  getAllCatagoryService,
  getSingleCatagoryService,
  updateCatagoryService,
} from "./catagory.service.js";

export async function createCatagoryController(req: Request, res: Response) {
  try {
    const catagory = await createCatagoryService(req.body);
    res.status(200).json({
      sucsess: true,
      message: "Catagory created successfully",
      data: catagory,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function getAllCatagoryController(req: Request, res: Response) {
  try {
    const catagorys = await getAllCatagoryService();
    res.status(200).json({
      sucsess: true,
      message: "Catagorys fetched successfully",
      data: catagorys,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function getSingleCatagoryController(req: Request, res: Response) {
  try {
    const catagory = await getSingleCatagoryService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Catagory fetched successfully",
      data: catagory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function deleteCatagoryController(req: Request, res: Response) {
  try {
    await deleteCatagoryService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Catagory deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function updateCatagoryController(req: Request, res: Response) {
  try {
    const catagory = await updateCatagoryService(req.body, req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Catagory updated successfully",
      data: catagory,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}
