import { model, Schema } from "mongoose";
import type Course from "./course.js";

const courseSchema = new Schema<Course>({
  id: Number,
  title: { type: String },
  slug: { type: String },
  category: { type: String },
  type: { type: String },
  image: { type: String },
  fee: { type: String },
  rating: { type: Number },
  totalRating: { type: Number },
  totalStudentsEnroll: { type: Number },
  mentorName: { type: String },
  mentordesignation: { type: String },
  mentorSubject: { type: String },
  mentorImg: { type: String },
  mentorReviews: { type: Number },
  mentorExperience: { type: String },
  mentorBio: { type: String },
  technology: { type: String },
  courseStart: { type: String },
  durationMonth: { type: Number },
  lectures: { type: Number },
  totalExam: { type: Number },
  totalProject: { type: Number },
  details: { type: String },
  courseOverview: { type: String },
  curriculum: { type: [String] },
  courseIncludes: { icon: { type: String }, text: { type: String } },
  softwareYoullLearn: { type: [String] },
  jobPositions: { type: [String] },
});

const CourseModel = model<Course>("course", courseSchema);
export default CourseModel;
