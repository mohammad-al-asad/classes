import type User from "../../../types/user.js";

export default interface Mentor extends User{
designation: string;
departmentName: string;
specialized_area: string[];
education_qualification: string[];
workExperience: string[];
experienceYears: string;
experienceTrainedStudents: string;
reviews: number;
bio: string;
lifeJourney: string;
}
