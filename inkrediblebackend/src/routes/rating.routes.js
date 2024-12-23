// Import necessary modules
const express = require("express");
// Import the authentication middleware to protect routes
const authenticate = require("../middleware/authenticat.js");
// Import the rating controller to handle rating-related actions
const ratingController = require("../controllers/rating.controller.js"); // Corrected to use controller

const router = express.Router(); // Initialize an express router

/**
 * POST /create - Creates a new rating for a product.
 * Requires authentication.
 * Calls the rating controller's `createRating` function to add a new rating.
 */
router.post("/create", authenticate, ratingController.createRating);

/**
 * GET /product/:productId - Retrieves all ratings for a specific product.
 * Requires authentication.
 * @param {string} productId - The ID of the product to get ratings for.
 * Calls the rating controller's `getProductsRating` function to fetch ratings for the specified product.
 */
router.get("/product/:productId", authenticate, ratingController.getProductsRating);

// Export the router for use in the main application
module.exports = router;