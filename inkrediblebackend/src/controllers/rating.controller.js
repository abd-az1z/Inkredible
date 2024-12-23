// Import the rating service to handle rating-related operations
const ratingService = require("../services/rating.service.js");

/**
 * Creates a new rating for a product.
 * @param {Object} req - The request object, containing the user in `req.user` and rating data in `req.body`.
 * @param {Object} res - The response object.
 */
const createRating = (req, res) => {
  try {
    const user = req.user; // Retrieve user information from the request (assuming authentication middleware is applied)
    const reqBody = req.body; // Retrieve rating data from the request body

    // Call the service to create a new rating with the provided data and user information
    const rating = ratingService.createRating(reqBody, user);

    // Send the created rating with a 202 status
    res.status(202).json(rating);
  } catch (error) {
    // Handle errors and send a 500 response if something goes wrong
    res.status(500).json({ error: "Something went wrong" });
  }
};

/**
 * Retrieves all ratings for a specific product.
 * @param {Object} req - The request object, with the product ID in `req.params.productId`.
 * @param {Object} res - The response object.
 */
const getProductsRating = async (req, res) => {
  try {
    const productId = req.params.productId; // Get the product ID from the request parameters

    // Call the service to retrieve all ratings for the specified product
    const ratings = await ratingService.getProductsRating(productId);

    // Send the retrieved ratings with a 200 status
    res.status(200).json(ratings);
  } catch (error) {
    // Handle errors and send a 500 response if something goes wrong
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Export the controller functions for use in routes
module.exports = { getProductsRating, createRating };
