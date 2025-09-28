import type Course from "./course.js";
import CourseModel from "./course.model.js";

export async function createCourseService(payload: Course) {
  const course = await CourseModel.create(payload);
  return course;
}

export async function getAllCourseService() {
  const courses = await CourseModel.find();
  return courses;
}

export async function getSingleCourseService(id: string) {
  const courses = await CourseModel.findOne({ id });
  return courses;
}
export async function deleteCourseService(id: string) {
  await CourseModel.deleteOne({ id });
  return;
}

export async function updateCourseService(data: Course, id: string) {
  const course = await CourseModel.updateOne({ id }, data);
  return course;
}
