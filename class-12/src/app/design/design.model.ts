import mongoose from "mongoose";
import type { Design } from "./design.js";

const designSchema = new mongoose.Schema<Design>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  previewImageURL: {
    type: String,
    required: true,
  },
  designerName: {
    type: String,
    required: true,
  },
  software: {
    type: [String],
    enum: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    default: [],
  },
  effects: {
    type: [String],
    enum: ["Glassmorphism", "3D Shadows", "Gradient Overlay", "Parallax"],
    default: [],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  process: {
    type: String,
    default: '',
  },
  complexityLevel: {
    type: String,
    enum: ["Basic", "Intermediate", "Advanced"],
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ["Active", "Draft", "Archived"],
    default: "Draft",
  },
  likes: {
    type: Number,
    default: 0,
    min: 0,
  },
  downloads: {
    type: Number,
    default: 0,
    min: 0,
  }
}, {
  timestamps: true
});

// Create and export the model
const DesignModel = mongoose.model('design', designSchema);

export default DesignModel;
