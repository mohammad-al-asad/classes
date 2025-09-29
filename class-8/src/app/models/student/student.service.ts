import type Student from "./student.js";
import StudentModel from "./student.model.js";

export async function createStudentService(payload: Student) {
  const student = await StudentModel.create(payload);
  return student;
}

export async function getAllStudentService() {
  const students = await StudentModel.find();
  return students;
}

export async function getSingleStudentService(id: string) {
  const students = await StudentModel.findOne({ id });
  return students;
}
export async function deleteStudentService(id: string) {
  await StudentModel.deleteOne({ id });
  return;
}

export async function updateStudentService(data: Student, id: string) {
  const student = await StudentModel.updateOne({ id }, data);
  return student;
}
