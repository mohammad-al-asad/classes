import type mongoose from "mongoose";

export interface IService {
    title:string;
    provider:mongoose.Types.ObjectId
    serviceType:string;
    location:string;
}