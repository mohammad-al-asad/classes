import z from "zod";

export const DigitalProductSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  productType: z.enum([
    "chrome-extension",
    "software-plugin",
    "wordpress-plugin",
    "ebook",
    "other",
  ]),
  price: z.number().min(0, "Price must be a positive number"),
  discountedPrice: z.number().min(0).optional(),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).default([]),

  files: z.array(
    z.object({
      fileUrl: z.url("Invalid file URL"),
      fileName: z.string().min(1, "File name is required"),
      fileSize: z.number().min(0, "File size must be positive"),
      version: z.string().min(1, "Version is required"),
      isActive: z.boolean(),
    })
  ),

  images: z.array(z.url("Invalid image URL")).default([]),
  featuredImage: z.url("Invalid featured image URL"),
  downloadLimit: z.number().min(0, "Download limit must be positive"),
  version: z.string().min(1, "Version is required"),
  changelog: z.string().min(1, "Changelog is required"),
  systemRequirements: z.string().optional(),
  compatibility: z.string().optional(),
  isActive: z.boolean(),
  isFeatured: z.boolean(),
});

export type DigitalProductInput = z.infer<typeof DigitalProductSchema>;

