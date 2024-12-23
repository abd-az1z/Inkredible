// Import necessary modules
const express = require("express");
// Import the authentication middleware to protect routes
const authenticate = require("../middleware/authenticat.js");
// Import the review controller to handle review-related actions
const reviewController = require("../controllers/review.controller.js");

const router = express.Router(); // Initialize an express router

/**
 * POST /create - Creates a new review for a product.
 * Requires authentication.
 * Calls the review controller's `createReview` function to add a new review.
 */
router.post("/create", authenticate, reviewController.createReview);

/**
 * GET /product/:productId - Retrieves all reviews for a specific product.
 * Requires authentication.
 * @param {string} productId - The ID of the product to get reviews for.
 * Calls the review controller's `getAllReview` function to fetch reviews for the specified product.
 */
router.get("/product/:productId", authenticate, reviewController.getAllReview);

// Export the router for use in the main application
module.exports = router;
