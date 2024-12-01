import mongoose from "mongoose";
import { connectionString } from "../../../../lib/database/database_string";
import { NextResponse } from "next/server";
import { customer } from "./model/CustomerSchema";

// Helper to check database connection
const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    return; // Already connected
  }
  await mongoose.connect(connectionString);
};

export const POST = async (req) => {
  try {
    // Step 1: Parse incoming JSON payload
    const payload = await req.json();

    // Step 2: Connect to the database
    await connectToDatabase();

    // Step 3: Create a new customer instance using the payload
    const newCustomer = new customer(payload);

    // Step 4: Save the customer to the database
    const savedCustomer = await newCustomer.save();

    // Step 5: Return success response with saved data
    return NextResponse.json({
      success: true,
      message: "Customer successfully added!",
      result: savedCustomer,
    });
  } catch (error) {
    // Handle any errors that occur during the request processing
    console.error("Error while adding customer:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message || "An error occurred while saving the customer data.",
      },
      { status: 500 }
    );
  }
};
