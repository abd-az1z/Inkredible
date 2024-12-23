const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Ensure MONGO_URI is set
    if (!process.env.MONGO_URI) {
      console.error("MongoDB URI is not set in .env file");
      process.exit(1);
    }

    // Log partial URI for debugging
    console.log("Connecting to MongoDB...");

    // Connect to MongoDB with options
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    // Log success message
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log the error and exit the process
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }

  // Handle process termination
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  });
};

module.exports = connectDB;