import { model, Schema } from "mongoose";
import type Student from "./admin.js";

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
    status: { type: String, enum: ["active", "inactive", "pending"] },
    managementDepartment: { type: String },
  },
  { timestamps: true }
);

const studentModel = model<Student>("admin", studentSchema);
export default studentModel;
