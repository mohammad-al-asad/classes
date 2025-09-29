import type Mentor from "./mentor.js";
import MentorModel from "./mentor.model.js";

export async function createMentorService(payload: Mentor) {
  const mentor = await MentorModel.create(payload);
  return mentor;
}

export async function getAllMentorService() {
  const mentors = await MentorModel.find();
  return mentors;
}

export async function getSingleMentorService(id: string) {
  const mentors = await MentorModel.findOne({ id });
  return mentors;
}
export async function deleteMentorService(id: string) {
  await MentorModel.deleteOne({ id });
  return;
}

export async function updateMentorService(data: Mentor, id: string) {
  const mentor = await MentorModel.updateOne({ id }, data);
  return mentor;
}
