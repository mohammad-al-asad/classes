import type User from "../../../types/user.js";
import type Course from "../course/course.js";

export default interface Student extends User{
      GuardianName: string;
  guardianRelation: string;
  GuardianNumber: string;
  enrollCourse : Course
}