// Import necessary modules
const express = require("express");
// Import the authentication middleware to protect routes
const authenticate = require("../middleware/authenticat.js");
// Import the cart item controller to handle cart item-specific actions
const cartItemController = require("../controllers/cartItem.controller.js");

const router = express.Router(); // Initialize an express router

/**
 * PUT /:id - Updates a specific item in the user's cart.
 * Requires authentication.
 * @param {string} id - The ID of the cart item to update.
 */
router.put("/:id", authenticate, cartItemController.updateCartItem);

/**
 * DELETE /:id - Removes a specific item from the user's cart.
 * Requires authentication.
 * @param {string} id - The ID of the cart item to remove.
 */
router.delete("/:id", authenticate, cartItemController.removeCartItem);

// Export the router for use in the main application
module.exports = router;
