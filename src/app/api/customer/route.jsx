import mongoose from "mongoose";
import { connectionString } from "../../../../lib/database/database_string";
import { NextResponse } from "next/server";
import { customer } from "./model/CustomerSchema";

export const POST = async (req) => {
  const payload = await req.json();
  await mongoose.connect(connectionString);

  const newcustomer = new customer(payload);

  const response = await newcustomer.save();

  return NextResponse.json({ result: response, success: true });
};
