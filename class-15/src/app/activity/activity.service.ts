import type Activity from "./activity.js";
import ActivityModel from "./activity.model.js";

export async function getActivitiesService() {
  const activities = await ActivityModel.find();
  return activities;
}

export async function getSingleActivityService(id: string) {
  const activity = await ActivityModel.findById(id);
  return activity;
}

export async function createActivityService(payload: Activity) {
  const activity = await ActivityModel.create(payload);
  return activity;
}

export async function deleteActivityService(id: string) {
  const response = await ActivityModel.findByIdAndDelete(id);
  return response;
}

export async function updateActivityService(id: string, payload: Activity) {
  const response = await ActivityModel.updateOne({ _id: id }, payload);
  return response;
}
