import mongoose, { Schema, Document } from 'mongoose';

export interface IDestination extends Document {
  name: string;
  description: string;
  image: string;
  location: string;
  createdAt: Date;
}

const DestinationSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const DestinationModel = mongoose.model<IDestination>('Destination', DestinationSchema);

export default DestinationModel;
