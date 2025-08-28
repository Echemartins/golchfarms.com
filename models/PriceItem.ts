// models/PriceItem.ts
import { Schema, model, models } from 'mongoose';

const PriceItemSchema = new Schema(
  {
    name: String,
    unit: String,
    price: Number,
    category: String,
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.PriceItem || model('PriceItem', PriceItemSchema);