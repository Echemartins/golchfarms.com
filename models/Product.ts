// models/Product.ts
import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema(
  {
    slug: { type: String, unique: true, index: true },
    title: String,
    category: String, // fresh, dried, feed, hatchery, consultancy
    description: String,
    features: [String],
    unit: String,
    price: Number, // optional retail reference
    images: [String],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.Product || model('Product', ProductSchema);