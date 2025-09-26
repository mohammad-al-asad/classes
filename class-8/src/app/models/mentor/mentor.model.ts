import { model, Schema } from "mongoose";
import type Mentor from "./mentor.js";

const mentorSchema = new Schema<Mentor>(
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
    designation: { type: String },
    departmentName: { type: String },
    specialized_area: { type: [String] },
    education_qualification: { type: [String] },
    workExperience: { type: [String] },
    experienceYears: { type: String },
    experienceTrainedStudents: { type: String },
    reviews: { type: Number },
    bio: { type: String },
    lifeJourney: { type: String },
  },
  { timestamps: true }
);

const MentorModel = model<Mentor>("mentor", mentorSchema);
export default MentorModel;
