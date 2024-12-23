const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart.service.js");

// Register: Creates a new user and generates a JWT
const register = async (req, res) => {
  try {
    // Log the incoming request body
    console.log("Incoming Request Body:", req.body);

    // Await user creation to ensure it completes before proceeding
    const user = await userService.createUser(req.body);

    // Log user creation success
    console.log("User created successfully:", user);

    // Generate a JWT token for the new user
    const token = jwtProvider.generateToken(user._id);

    // Log the generated token
    console.log("Generated JWT Token:", token);

    // Create a cart for the new user
    await cartService.createCart(user);

    // Log cart creation success
    console.log("Cart created successfully for user:", user._id);

    // Send the response
    return res.status(200).send({ token, message: "Registration successful" });
  } catch (error) {
    // Log the error with a detailed message
    console.error("Error during registration:", error.message);

    // Send the error response
    return res.status(500).send({ error: error.message });
  }
};

// Login: Authenticates user and returns a JWT if credentials are valid
// const login = async (req, res) => {
//   const { password, email } = req.body;
//   try {
//     const user = await userService.getUserByEmail(email);
//     if (!user) {
//       return res.status(404).send({ message: `User not found with email: ${email}` });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).send({ error: "Invalid credentials" });
//     }

//     const token = jwtProvider.generateToken(user._id);  // Rename `jwt` to `token` for clarity
//     return res.status(200).send({ token, message: "Login successful" });
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// };
const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    // Log incoming login request
    console.log("Login attempt with email:", email);

    // Fetch the user by email
    const user = await userService.getUserByEmail(email);
    if (!user) {
      console.log(`User not found with email: ${email}`); // Log user not found
      return res
        .status(404)
        .send({ message: `User not found with email: ${email}` });
    }

    // Validate the provided password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log(`Invalid password for user: ${email}`); // Log invalid password
      return res.status(401).send({ error: "Invalid credentials" });
    }

    // Generate a JWT token for the user
    const token = jwtProvider.generateToken(user._id);
    console.log(`Login successful for user: ${email}, Token: ${token}`); // Log success and token

    // Send the response
    return res.status(200).send({ token, message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error.message); // Log any unexpected errors
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { register, login };
