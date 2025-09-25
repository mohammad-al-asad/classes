import type Mentor from "./mentor.js";

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
