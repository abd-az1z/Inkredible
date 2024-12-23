const userService = require("../services/user.service.js");

// This function retrieves the profile of the authenticated user based on the JWT (JSON Web Token) provided in the request headers.
const getUserProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(404)
        .json({ status: "error", message: "Token not found" });
    }

    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await userService.findUserById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    res.status(200).json({ status: "success", data: { user } });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// This function retrieves a list of all users from the database.
const getAllUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await userService.getAllUsers();
    // Respond with the list of users
    return res.status(200).send({ users });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getUserProfile, getAllUsers };

// 	JWT Extraction: The function attempts to extract the JWT from the Authorization header of the incoming request. It expects the header to be in the format Bearer <token>.
// Token Validation: If the JWT is not present, the function responds with a 404 status code and an error message indicating that the token was not found.
// User Retrieval: If the JWT is present, the function calls userService.getUserProfileByToken(jwt) to retrieve the user profile associated with the token.
// Response: Upon successful retrieval, the function responds with a 200 status code and the user profile. If an error occurs during the process, it catches the error and responds with a 500 status code and the error message.

// User Retrieval: The function calls userService.getAllUsers() to fetch all user records from the database.
// Response: Upon successful retrieval, it responds with a 200 status code and the list of users. If an error occurs during the process, it catches the error and responds with a 500 status code and the error message.

// Both functions utilize the userService module to interact with the database, adhering to the separation of concerns principle by keeping the controller logic separate from the data access logic.
