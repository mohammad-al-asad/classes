import type Tour from "./tour.js";
import TourModel from "./tour.model.js";

export async function getToursService() {
  return await TourModel.find().populate("destination activities");
}

export async function getSingleTourService(id: string) {
  return await TourModel.findById(id).populate("destination activities");
}

export async function createTourService(payload: Tour) {
  return await TourModel.create(payload);
}

export async function deleteTourService(id: string) {
  return await TourModel.findByIdAndDelete(id);
}

export async function updateTourService(id: string, payload: Partial<Tour>) {
  return await TourModel.updateOne({ _id: id }, payload);
}
