import { model, Schema } from "mongoose";
import type Course from "./course.js";

const courseSchema = new Schema<Course>({
  courseId: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  catagory: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  courseOverview: {
    type: String,
    trim: true,
  },
  courseIncludes: {
    type: [String],
    trim: true,
  },
  curriculums: {
    type: [String],
    trim: true,
  },
  softwareIncludes: {
    type: [String],
    trim: true,
  },
  jobOptions: {
    type: [String],
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
  },
  courseStart: {
    type: Number,
    required: true,
  },
  lectureCount: {
    type: Number,
    required: true,
  },
  projectCount: {
    type: Number,
    required: true,
  },
  examCount: {
    type: Number,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  totalRating: {
    type: Number,
    required: true,
  },
  mentor: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  totalStudentEnroll: {
    type: Number,
    required: true,
  },
});

const CourseModel = model<Course>("course", courseSchema);
export default CourseModel;
