import type Course from "./course.js";

export default interface User {
id: string;
name: string;
gender: 'male' | 'female' | 'other';
dateOfBirth: string;
email: string;
contactNo: string;
emergencyContact: string;
address: string;
profileImg: string;
role: 'student' | 'mentor' | 'admin';
createdAt: Date;
updatedAt: Date;
}
