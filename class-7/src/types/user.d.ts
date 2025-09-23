interface user {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "student" | "teacher" | "admin";
  phone: string;
  location: string;
  EmergencyNumber: string;
  GuardianName: string;
  guardianRelation: string;
  GuardianNumber: string;
  // enrollCourse : Course
  isActive: boolean;
}
