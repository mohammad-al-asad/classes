import type { Request, Response } from "express";
import {
  createBookingService,
  deleteBookingService,
  getBookingsService,
  getSingleBookingService,
  updateBookingService,
} from "./booking.service.js";

export async function getBookingsController(req: Request, res: Response) {
  try {
    const bookings = await getBookingsService();
    res.status(200).json({
      success: true,
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to fetch Bookings");
    (error as any).status = 500;
    throw error;
  }
}

export async function getSingleBookingController(req: Request, res: Response) {
  try {
    const booking = await getSingleBookingService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Booking fetched successfully",
      data: booking,
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to fetch Booking");
    (error as any).status = 500;
    throw error;
  }
}

export async function createBookingController(req: Request, res: Response) {
  try {
    const booking = await createBookingService(req.body);
    res.status(200).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to create Booking");
    (error as any).status = 500;
    throw error;
  }
}

export async function deleteBookingController(req: Request, res: Response) {
  try {
    await deleteBookingService(req.params.id as string);
    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to delete Booking");
    (error as any).status = 500;
    throw error;
  }
}

export async function updateBookingController(req: Request, res: Response) {
  try {
    await updateBookingService(req.params.id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
    });
  } catch (err: any) {
    const error = new Error(err.message || "Failed to update Booking");
    (error as any).status = 500;
    throw error;
  }
}
