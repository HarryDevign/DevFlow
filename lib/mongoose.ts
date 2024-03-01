import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MISSING MONGODB_URL");

  if (isConnected) return console.log("Already connected to the database");

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "DevFlow",
    });

    isConnected = true;

    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};
