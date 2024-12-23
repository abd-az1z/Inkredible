const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user.model");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("Authorization Token:", token); // Log token for debugging
    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded); // Log decoded token
    const userId = decoded.userId; // Adjust if the key is `userId` or similar

    // Ensure userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.error("Invalid User ID:", userId); // Log invalid user ID
      return res.status(400).json({ error: "Invalid user ID in token" });
    }

    // Fetch the user from the database
    const user = await User.findById(new mongoose.Types.ObjectId(userId));
    console.log("Authenticated User:", user); // Log authenticated user
    if (!user) {
      return res.status(401).json({ error: "Unauthorized user" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    res.status(401).json({ error: "Authentication failed" });
  }
};

module.exports = authenticate;