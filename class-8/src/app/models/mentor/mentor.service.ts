import type Mentor from "./mentor.js";
import MentorModel from "./mentor.model.js";

export async function createMentorService(payload: Mentor) {
  const mentor = await MentorModel.create(payload);
  return mentor;
}
