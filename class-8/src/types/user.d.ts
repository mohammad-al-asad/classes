import type Course from "./course.js";

export default interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "student" | "teacher" | "admin";
  phone: string;
  location: string;
  EmergencyNumber: string;
  isActive: boolean;
}
