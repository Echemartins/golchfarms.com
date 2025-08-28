// models/Inquiry.ts
import { Schema, model, models } from 'mongoose';

const InquirySchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    source: String, // e.g. "website/contact" or "cta-quote"
  },
  { timestamps: true }
);

export default models.Inquiry || model('Inquiry', InquirySchema);