import mongoose, { Schema } from 'mongoose';
import type { IDigitalProduct } from './digitalProduct.js';


const digitalProductSchema = new Schema<IDigitalProduct>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true,
    maxlength: 200
  },
  productType: {
    type: String,
    enum: ['chrome-extension', 'software-plugin', 'wordpress-plugin', 'ebook', 'other'],
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  discountedPrice: {
    type: Number,
    min: 0
  },
  category: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  files: [{
    fileUrl: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      required: true
    },
    fileSize: {
      type: Number,
      required: true
    },
    version: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  }],
  images: [{
    type: String
  }],
  featuredImage: {
    type: String,
    required: true
  },
  licenseKeys: [{
    key: {
      type: String,
      required: true
    },
    isUsed: {
      type: Boolean,
      default: false
    },
    usedAt: {
      type: Date
    },
    usedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  downloadLimit: {
    type: Number,
    default: 1, // Default 1 download per purchase
    min: -1 // -1 for unlimited
  },
  version: {
    type: String,
    required: true,
    default: '1.0.0'
  },
  changelog: {
    type: String,
    default: ''
  },
  systemRequirements: {
    type: String
  },
  compatibility: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  salesCount: {
    type: Number,
    default: 0
  },
  viewCount: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true
});

// Index for search and filtering
digitalProductSchema.index({ title: 'text', description: 'text', tags: 'text' });
digitalProductSchema.index({ productType: 1, category: 1, isActive: 1, isFeatured: 1 });
digitalProductSchema.index({ price: 1, salesCount: -1 });

export default mongoose.model<IDigitalProduct>('DigitalProduct', digitalProductSchema);