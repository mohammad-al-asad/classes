import mongoose, { Schema } from "mongoose";
import type Booking from "./booking.js";

const BookingSchema: Schema = new Schema<Booking>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tour: { type: Schema.Types.ObjectId, ref: "Tour", required: true },
  nidNumber: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  status: { 
    type: String, 
    enum: ["Pending", "Confirmed", "Cancelled"], 
    default: "Pending",
    required: true 
  },
});

const BookingModel = mongoose.model<Booking>("Booking", BookingSchema);

export default BookingModel;
