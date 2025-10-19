import z from "zod";

export const ActivitySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Image must be a valid URL"),
  createdAt: z.date().optional(),
});

export type ActivityFromSchema = z.infer<typeof ActivitySchema>;
