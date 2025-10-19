import type { Types } from "mongoose";

export default interface Tour {
  title: string;
  description: string;
  price: number;
  duration: string;
  destination: Types.ObjectId;
  activities: Types.ObjectId[];
  startDate: Date;
  endDate: Date;
  image: string;
  createdAt: Date;
}
