import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

// Replace with your MongoDB URI
const MONGO_URI = process.env.MONGO_URI; // Local
// const MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase"; // Atlas

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the application if the connection fails
  }
};

export default connectDB;
