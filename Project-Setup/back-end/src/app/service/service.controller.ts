import type { Request, Response } from "express";
import { ServiceServices } from "./service.service.js";

const ServiceService = new ServiceServices();

export const getAllServices = async (req: Request, res: Response) => {
  await ServiceService.getAllService(req, res);
};
