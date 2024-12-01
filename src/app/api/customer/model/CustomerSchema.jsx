import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: { type: String, unique: true, required: [true, "Name is required"] },
  phone: { type: Number, unique: true, required: [true, "Name is required"] },
  country: { type: String, required: [true, "Name is required"] },
  city: { type: String, required: [true, "Name is required"] },
  comment: String,
});

export const customer =
  mongoose.models.customers || mongoose.model("customers", customerSchema);
