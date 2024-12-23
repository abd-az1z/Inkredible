// Import the review service to handle review-related operations
const reviewService = require("../services/review.service.js");

/**
 * Creates a new review for a product.
 * @param {Object} req - The request object, containing the user in `req.user` and review data in `req.body`.
 * @param {Object} res - The response object.
 */
const createReview = async (req, res) => {
  const user = req.user; // Retrieve the user information from the request (assuming it’s added by authentication middleware)
  const reqBody = req.body; // Retrieve review data from the request body

  console.log(
    `Creating review for product ID ${reqBody.productId} - Review content: ${reqBody.review}`
  );

  try {
    // Call the service to create a new review, passing the review data and user information
    const review = await reviewService.createReview(reqBody, user);

    // Send the created review with a 201 status
    return res.status(201).send(review);
  } catch (error) {
    // Log the error for debugging
    console.log("Error creating review --- ", error.message);

    // Send a 500 response if there was an error creating the review
    return res.status(500).json({ error: "Something went wrong" });
  }
};

/**
 * Retrieves all reviews for a specific product.
 * @param {Object} req - The request object, with the product ID in `req.params.productId`.
 * @param {Object} res - The response object.
 */
const getAllReview = async (req, res) => {
  const productId = req.params.productId; // Get the product ID from the request parameters
  console.log("Retrieving reviews for product ID:", productId);

  try {
    // Call the service to retrieve all reviews for the specified product
    const reviews = await reviewService.getAllReview(productId);

    // Send the retrieved reviews with a 200 status
    return res.status(200).send(reviews);
  } catch (error) {
    // Log the error for debugging
    console.log("Error retrieving reviews --- ", error.message);

    // Send a 500 response if there was an error retrieving reviews
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// Export the controller functions for use in routes
module.exports = { createReview, getAllReview };
