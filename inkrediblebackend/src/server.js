require("dotenv").config();
const app = require(".");
const connectDb = require("./config/db");

const PORT = 5454;
app.listen(PORT, async () => {
  try {
    await connectDb();
    console.log("Database connected successfully");
    console.log(`Inkredible API listening on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1); // Exit process if DB connection fails
  }
});

app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.message);
  if (err.name === "CastError") {
    res.status(400).json({ error: "Invalid ID format" });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error.message);
});