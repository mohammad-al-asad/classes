export interface User {
  name: String;
  email: String;
  password: String;
  phone: String;
  role: "admin" | "customer";
  createdAt: Date;
}
