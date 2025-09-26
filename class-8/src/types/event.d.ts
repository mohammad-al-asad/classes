import type Mentor from "../app/models/mentor/mentor.js";

export default interface Event {
  id: string;
  title: string;
  mentor: Mentor;
  image: string;
  time: string;
  date: string;
  tag: string[];
  startingIn: string;
}
