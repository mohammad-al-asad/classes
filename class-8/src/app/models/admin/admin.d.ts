import type User from "../../../types/user.js";

export default interface Admin extends User {
  status: "active" | "inactive" | "pending";
  managementDepartment: string;
  createdAt: Date;
  updatedAt: Date;
}
