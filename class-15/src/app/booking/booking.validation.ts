import z from "zod";

export const BookingSchema = z.object({
  user: z.string().length(24, "Invalid User ID"),
  tour: z.string().length(24, "Invalid Tour ID"),
  nidNumber: z.string().min(1, "NID Number is required"),
  bookingDate: z.date(),
  status: z.enum(["Pending", "Confirmed", "Cancelled"]).optional(),
});

export type BookingFromSchema = z.infer<typeof BookingSchema>;
