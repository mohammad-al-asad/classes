import type User from "../../../types/user.js";

export default interface Mentor extends User{
  id: string;
  name: string;
  designation: string;
  subject: string;
  experienceCount: number;
  experience: string[];
}
