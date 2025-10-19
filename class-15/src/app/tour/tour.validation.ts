import z from "zod";

export const TourSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive("Price must be positive"),
  duration: z.string().min(1, "Duration is required"),
  destination: z.string().length(24, "Invalid Destination ID"), // ObjectId is 24 chars
  activities: z.array(z.string().length(24, "Invalid Activity ID")).optional(),
  startDate: z.date(),
  endDate: z.date(),
  image: z.string().url("Image must be a valid URL"),
  createdAt: z.date().optional(),
});

export type TourFromSchema = z.infer<typeof TourSchema>;
