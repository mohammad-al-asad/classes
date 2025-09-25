import type { Types } from "mongoose";
import type Mentor from "./mentor.js";

export default interface Course {
  courseId: string;
  title: string;
  description: string;
  courseOverview: string;
  courseIncludes: string[];
  curriculums: string[];
  softwareIncludes:string[]                         
  jobOptions:string[]                         
  image: string;
  duration: number;
  slug: string;
  catagory: Types.ObjectId;
  courseStart: number;
  lectureCount: number;
  projectCount: number;
  examCount: number;
  fee: string;
  rating: number;
  totalRating: number;
  mentor: Types.ObjectId;
  totalStudentEnroll: number;
}
