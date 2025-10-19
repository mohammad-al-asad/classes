import type Booking from "./booking.js";
import BookingModel from "./booking.model.js";

export async function getBookingsService() {
  return await BookingModel.find().populate("user tour");
}

export async function getSingleBookingService(id: string) {
  return await BookingModel.findById(id).populate("user tour");
}

export async function createBookingService(payload: Booking) {
  return await BookingModel.create(payload);
}

export async function deleteBookingService(id: string) {
  return await BookingModel.findByIdAndDelete(id);
}

export async function updateBookingService(id: string, payload: Partial<Booking>) {
  return await BookingModel.updateOne({ _id: id }, payload);
}
