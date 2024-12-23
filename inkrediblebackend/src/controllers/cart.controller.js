// Import express and initialize a router instance
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import cart service to handle cart-related operations
const cartService = require("../services/cart.service.js");
const Cart = require("../models/cart.model.js");

/**
 * Retrieves the user's cart.
 * @param {Object} req - The request object, with user data in `req.user`.
 * @param {Object} res - The response object.
 */

const findUserCart = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log("Fetching cart for User ID:", userId); // Log user ID

    // Ensure userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.log("Cart not found for User ID:", userId); // Log cart absence
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const cart = await Cart.findOne({
      user: new mongoose.Types.ObjectId(userId),
    })
      .populate("cartItems.product")
      .exec();

    if (!cart) {
      return res
        .status(200)
        .json({ cartItems: [], totalItem: 0, totalPrice: 0 });
    }

    const totalItem = cart.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = cart.cartItems.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
    console.log("Cart Details:", cart); // Log cart details
    res.status(200).json({ cartItems: cart.cartItems, totalItem, totalPrice });
  } catch (error) {
    console.error("Error fetching user cart:", error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve cart", error: error.message });
  }
};

const addItemToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const updatedCart = await cartService.addCartItem(userId, req.body);
    res.status(200).json({
      message: "Item added to cart successfully",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error adding item to cart:", error.message);
    res.status(500).json({
      message: "Failed to add item to cart.",
      error: error.message,
    });
  }
};

// Export the controller functions for use in routes
module.exports = { findUserCart, addItemToCart };
