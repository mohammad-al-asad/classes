import z from "zod";

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include uppercase, lowercase, number, and special character"
    ),
  phone: z.string().min(1, "Phone number is required"),
  role: z.enum(["admin", "customer"]).optional(),
  createdAt: z.date().optional(),
});

export type UserFromSchema = z.infer<typeof UserSchema>;
