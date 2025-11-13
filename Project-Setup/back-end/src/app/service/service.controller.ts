import type { Request, Response } from "express";
import { ServiceModel } from "./service.model.js";
import { ApiResponse } from "../../lib/apiResponse.js";

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const services = await ServiceModel.find({});
    new ApiResponse(res, 200, "Data fetched succesfully", services);
  } catch (error) {
    new ApiResponse(res, 500, "There was an error");
  }
};
