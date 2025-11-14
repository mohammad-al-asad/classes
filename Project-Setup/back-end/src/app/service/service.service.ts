import type { Request, Response } from "express";
import { ApiResponse } from "../../lib/apiResponse.js";
import { ServiceModel } from "./service.model.js";

export class ServiceServices {
  async getAllService(req: Request, res: Response) {
    try {
      const services = await ServiceModel.find({});
      return new ApiResponse(res, 200, "Data fetched succesfully", services);
    } catch (error) {
      return new ApiResponse(res, 500, "There was an error");
    }
  }
}
