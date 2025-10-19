import type { Types } from "mongoose";

export default interface Booking {
  user: Types.ObjectId;
  tour: Types.ObjectId;
  nidNumber: string;
  bookingDate: Date;
  status: "Pending" | "Confirmed" | "Cancelled";
}
