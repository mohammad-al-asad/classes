import type { Types } from "mongoose";
import type Mentor from "./mentor.js";

export default interface Course {
  id: number;
  title: string;
  slug: string;
  category: string;
  type: string;
  image: string;
  fee: string;
  rating: number;
  totalRating: number;
  totalStudentsEnroll: number;
  mentorName: string;
  mentordesignation: string;
  mentorSubject: string;
  mentorImg: string;
  mentorReviews: number;
  mentorExperience: string;
  mentorBio: string;
  technology: string;
  courseStart: string;
  durationMonth: number;
  lectures: number;
  totalExam: number;
  totalProject: number;
  details: string;
  courseOverview: string;
  curriculum: string[];
  courseIncludes: { icon: string; text: string }[];
  softwareYoullLearn: string[];
  jobPositions: string[];
}
