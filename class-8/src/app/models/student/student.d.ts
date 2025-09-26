import type User from "../../../types/user.js";

export default interface Student extends User {
  guardian: string;
  courseName: string;
}
