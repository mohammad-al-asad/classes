import type { Types } from "mongoose";

export interface IDigitalProduct {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  productType: 'chrome-extension' | 'software-plugin' | 'wordpress-plugin' | 'ebook' | 'other';
  price: number;
  discountedPrice?: number;
  category: string;
  tags: string[];
  files: {
    fileUrl: string;
    fileName: string;
    fileSize: number;
    version: string;
    isActive: boolean;
  }[];
  images: string[];
  featuredImage: string;
  licenseKeys: {
    key: string;
    isUsed: boolean;
    usedAt?: Date;
    usedBy?: Types.ObjectId;
  }[];
  downloadLimit: number; // -1 for unlimited
  version: string;
  changelog: string;
  systemRequirements?: string;
  compatibility?: string;
  isActive: boolean;
  isFeatured: boolean;
  salesCount: number;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type DigitalProductInput = {
  title: string;
  description: string;
  shortDescription: string;
  productType: 'chrome-extension' | 'software-plugin' | 'wordpress-plugin' | 'ebook' | 'other';
  price: number;
  discountedPrice?: number;
  category: string;
  tags: string[];
  files: {
    fileUrl: string;
    fileName: string;
    fileSize: number;
    version: string;
    isActive: boolean;
  }[];
  images: string[];
  featuredImage: string;
  downloadLimit: number;
  version: string;
  changelog: string;
  systemRequirements?: string;
  compatibility?: string;
  isActive: boolean;
  isFeatured: boolean;
};

export type LicenseKeyInput = {
  productId: string;
  keys: string[];
};

export type UpdateVersionInput = {
  version: string;
  changelog: string;
  files: {
    fileUrl: string;
    fileName: string;
    fileSize: number;
    version: string;
    isActive: boolean;
  }[];
};