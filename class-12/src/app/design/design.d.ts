import type mongoose from "mongoose";

export interface Design {
  title: string;
  category: mongoose.ObjectId;
  description: String;
  previewImageURL: string;
  designerName: string;
  software: string[];
  //যেমন: ["Figma", "Adobe XD", "Illustrator", "Photoshop"]
  effects: string[];
  //যেমন: ["Glassmorphism", "3D Shadows", "Gradient Overlay","Parallax"]
  price: number;
  process: string;
  //যেমন: “Wireframe → Mockup → Prototype → Final UI”
  complexityLevel: "Basic" | "Intermediate" | "Advanced";
  tags: string[];
  //যেমন: ["Landing Page", "Dashboard", "Mobile UI", "Dark Mode"]
  status: "Active" | "Draft" | "Archived";
  likes: number;
  downloads: number;
}
