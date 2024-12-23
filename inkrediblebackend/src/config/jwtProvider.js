const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || "default_fallback_secret";

const testGenerateToken = () => {
  const userId = "12345"; // Example user ID
  const token = jwtProvider.generateToken(userId);
  console.log("Generated Token:", token);
};

const generateToken = (userId) => jwt.sign({ userId }, SECRET_KEY, { expiresIn: "24h" });

const getUserIdFromToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    return decodedToken.userId;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

module.exports = { testGenerateToken, generateToken, getUserIdFromToken };