// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");

// Import the authentication middleware to protect routes
const authenticate = require("../../src/middleware/authenticat.js");
// Import the cart controller to handle cart-related actions
const cartController = require("../controllers/cart.controller.js");
// Import the cart service to interact with the database
const cartService = require("../services/cart.service.js");

const router = express.Router(); // Initialize an express router

/**
 * GET / - Retrieves the authenticated user's cart.
 * Requires authentication.
 */
router.get("/", authenticate, cartController.findUserCart);

/**
 * PUT /add - Adds an item to the authenticated user's cart.
 * Requires authentication.
 */
// router.put("/add", authenticate, cartController.addItemToCart);
router.put("/add", authenticate, async (req, res) => {
  console.log("Add to Cart Request Body:", req.body);

  try {
    const { productId, size, quantity } = req.body;

    // Check if all fields are present
    if (!productId || !size || !quantity) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate productId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid Product ID" });
    }

    // Ensure user is authenticated
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized user" });
    }

    const userId = req.user._id;

    // Call cartService to add item to cart
    const updatedCart = await cartService.addItemToCart(userId, {
      productId: new mongoose.Types.ObjectId(productId),
      size,
      quantity,
    });

    res
      .status(200)
      .json({ message: "Item added to cart successfully", cart: updatedCart });
  } catch (error) {
    console.error("Error in Add to Cart API:", error.message);

    // Handle specific error cases
    if (error.message.includes("Invalid product ID")) {
      return res.status(400).json({ error: "Invalid Product ID provided" });
    } else if (error.message.includes("Product not found")) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Generic error response
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// Export the router for use in the main application
module.exports = router;
