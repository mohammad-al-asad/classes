export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'student' | 'instructor' | 'admin';
  profilePicture?: string;
  phone?: string;
  isBlocked: boolean;
  language: 'en' | 'th';
  createdAt: Date;
  updatedAt: Date;
}

export type UserRegisterInput = {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'instructor';
  language: 'en' | 'th';
};

export type UserLoginInput = {
  email: string;
  password: string;
};