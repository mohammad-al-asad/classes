import type { Request, Response } from "express";
import {
  createAdminService,
  deleteAdminService,
  getAllAdminService,
  getSingleAdminService,
  updateAdminService,
} from "./admin.service.js";

export async function createAdminController(req: Request, res: Response) {
  try {
    const admin = await createAdminService(req.body);
    res.status(200).json({
      sucsess: true,
      message: "Admin created successfully",
      data: admin,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function getAllAdminController(req: Request, res: Response) {
  try {
    const admins = await getAllAdminService();
    res.status(200).json({
      sucsess: true,
      message: "Admins fetched successfully",
      data: admins,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function getSingleAdminController(req: Request, res: Response) {
  try {
    const admin = await getSingleAdminService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Admin fetched successfully",
      data: admin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function deleteAdminController(req: Request, res: Response) {
  try {
    await deleteAdminService(req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Admin deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}

export async function updateAdminController(req: Request, res: Response) {
  try {
    const admin = await updateAdminService(req.body, req.params.id as string);
    res.status(200).json({
      sucsess: true,
      message: "Admin updated successfully",
      data: admin,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      sucsess: false,
      message: "There was an error",
    });
  }
}
