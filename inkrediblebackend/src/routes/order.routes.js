// Import necessary modules
const express = require("express");
// Import the authentication middleware to protect routes
const authenticate = require("../middleware/authenticat.js");
// Import the order controller to handle order-related actions
const orderController = require("../controllers/order.controller.js");

const router = express.Router(); // Initialize an express router

/**
 * POST / - Creates a new order for the authenticated user.
 * Requires authentication.
 */
router.post("/", authenticate, orderController.createOrder);

/**
 * GET /user - Retrieves the order history for the authenticated user.
 * Requires authentication.
 */
router.get("/user", authenticate, orderController.orderHistory);

/**
 * GET /:id - Retrieves details of a specific order by order ID.
 * Requires authentication.
 * @param {string} id - The ID of the order to retrieve.
 */
router.get("/:id", authenticate, orderController.findOrderById);

// Export the router for use in the main application
module.exports = router;