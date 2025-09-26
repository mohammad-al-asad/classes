import { model, Schema } from "mongoose";
import type Student from "./student.js";

const studentSchema = new Schema<Student>(
  {
    id: { type: String },
    name: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    dateOfBirth: { type: String },
    email: { type: String },
    contactNo: { type: String },
    emergencyContact: { type: String },
    address: { type: String },
    profileImg: { type: String },
    role: { type: String, enum: ["student", "mentor", "admin"] },
    guardian: { type: String },
    courseName: { type: String },
  },
  { timestamps: true }
);

const studentModel = model<Student>("student", studentSchema);
export default studentModel;
