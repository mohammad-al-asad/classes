import { model, Schema } from "mongoose";
import type Student from "./student.js";

const studentSchema = new Schema<Student>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    address: { type: String, required: true },
    profileImg: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "mentor", "admin"],
      required: true,
    },
    guardian: { type: String, required: true },
    courseName: { type: String, required: true },
  },
  { timestamps: true }
);

const studentModel = model<Student>("student", studentSchema);
export default studentModel;
