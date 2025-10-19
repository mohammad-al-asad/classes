import type Destination from "./destination.js";
import DestinationModel from "./destination.model.js";

export async function getDestinationsService() {
  const destinations = await DestinationModel.find();
  return destinations;
}

export async function getSingleDestinationService(id: string) {
  const destination = await DestinationModel.findById(id);
  return destination;
}

export async function createDestinationService(payload: Destination) {
  const destination = await DestinationModel.create(payload);
  return destination;
}

export async function deleteDestinationService(id: string) {
  const response = await DestinationModel.findByIdAndDelete(id);
  return response;
}

export async function updateDestinationService(
  id: string,
  payload: Destination
) {
  const response = await DestinationModel.updateOne({ _id: id }, payload);
  return response;
}
