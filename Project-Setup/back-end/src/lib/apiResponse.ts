import type { Response } from "express";

export class ApiResponse {
  constructor(
    response: Response,
    status: number,
    messsage: string,
    data: any = {}
  ) {
    response.json({
      success: status > 300 ? false : true,
      status,
      messsage,
      data,
    });
  }
}
