import { model, Schema } from "mongoose";
import type Course from "./course.js";

const courseSchema = new Schema<Course>({
  id: Number,
  title: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  fee: { type: String, required: true },
  rating: { type: Number, required: true },
  totalRating: { type: Number, required: true },
  totalStudentsEnroll: { type: Number, required: true },
  mentorName: { type: String, required: true },
  mentordesignation: { type: String, required: true },
  mentorSubject: { type: String, required: true },
  mentorImg: { type: String, required: true },
  mentorReviews: { type: Number, required: true },
  mentorExperience: { type: String, required: true },
  mentorBio: { type: String, required: true },
  technology: { type: String, required: true },
  courseStart: { type: String, required: true },
  durationMonth: { type: Number, required: true },
  lectures: { type: Number, required: true },
  totalExam: { type: Number, required: true },
  totalProject: { type: Number, required: true },
  details: { type: String, required: true },
  courseOverview: { type: String, required: true },
  curriculum: { type: [String], required: true },
  courseIncludes: {
    icon: { type: String, required: true },
    text: { type: String, required: true },
  },
  softwareYoullLearn: { type: [String], required: true },
  jobPositions: { type: [String], required: true },
});

const CourseModel = model<Course>("course", courseSchema);
export default CourseModel;
