import z from "zod";

export const DestinationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Image must be a valid URL"),
  location: z.string().min(1, "Location is required"),
  createdAt: z.date().optional(),
});

export type DestinationFromSchema = z.infer<typeof DestinationSchema>;
