const Joi = require("joi"); // Joi for validation
const User = require("../models/user.model"); // Importing the User model
const bcrypt = require("bcrypt"); // Importing bcrypt for password hashing
const jwtProvider = require("../config/jwtProvider"); // Importing the JWT provider function

const userValidationSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required().messages({
    "string.base": "First name must be a string",
    "string.empty": "First name is required",
    "string.min": "First name must have at least 2 characters",
  }),
  lastName: Joi.string().min(2).max(50).required().messages({
    "string.base": "Last name must be a string",
    "string.empty": "Last name is required",
    "string.min": "Last name must have at least 2 characters",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
  }),
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
      "string.empty": "Password is required",
      "string.min": "Password must have at least 8 characters",
    }),
});

// Function to create a new user
const createUser = async (userData) => {
  try {
    console.log("Incoming User Data:", userData); // Log incoming data
    const ifUserExists = await User.findOne({ email: userData.email });
    if (ifUserExists) {
      console.error("User already exists:", userData.email); // Log duplicate
      throw new Error("User already exists: " + userData.email);
    }

    // Log password hashing step
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    console.log("Password hashed successfully");

    const user = await User.create({ ...userData, password: hashedPassword });
    console.log("User created:", user);

    return user;
  } catch (error) {
    console.error("Error in createUser:", error.message); // Log errors
    throw new Error(error.message);
  }
};
// const createUser = async (userData) => {
//   try {
//     // Validate user input against the schema
//     const { error, value } = userValidationSchema.validate(userData, {
//       abortEarly: false,
//     });
//     if (error) {
//       throw new Error(error.details.map((err) => err.message).join(", ")); // Combine error messages
//     }

//     let { firstName, lastName, email, password } = value;

//     // Normalize email to lowercase for consistent comparison
//     email = email.toLowerCase();

//     // Check if a user with the given email already exists
//     const ifUserExists = await User.findOne({ email });
//     if (ifUserExists) {
//       throw new Error("User already exists: " + email);
//     }

//     // Hash the password before storing it
//     password = await bcrypt.hash(password, 10);

//     // Create a new user with hashed password
//     const user = await User.create({ firstName, lastName, email, password });

//     // Generate a JWT token for the new user
//     const token = jwtProvider.generateToken(user._id);

//     // Return both the created user object and the generated JWT
//     return { user, token };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// Function to find a user by their ID
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    // .populate("address"); // Search for user by ID
    if (!user) {
      throw new Error("User not found: " + userId); // Error if user is not found
    }
    return user;
  } catch (error) {
    throw new Error(error.message); // Handle any errors
  }
};

// Function to find a user by their email
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email }); // Search for user by email
    if (!user) {
      throw new Error("User not found: " + email); // Error if user is not found
    }
    return user;
  } catch (error) {
    throw new Error(error.message); // Handle any errors
  }
};

// Function to get a user profile based on a token
const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await findUserById(userId);
    if (!user) {
      throw new Error("User not found : " + userId); // Error if user is not found
    }
    return user;
  } catch (error) {
    throw new Error(error.message); // Handle any errors
  }
};

// Function to get all users
const getAllUsers = async () => {
  try {
    const users = await User.find(); // Find all users
    return users;
  } catch (error) {
    throw new Error(error.message); // Handle any errors
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  findUserById,
  getUserProfileByToken,
  getAllUsers,
};
