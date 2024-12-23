const mongoose = require("mongoose");
const Cart = require("../models/cart.model");

/**
 * Utility function to create a new cart for a given user.
 * @param {Object} user - The user object with an `_id` field.
 */
const createCart = async function (user) {
  try {
    if (!user || !user._id) {
      throw new Error("Invalid user object provided for cart creation.");
    }
    const cart = new Cart({ user: mongoose.Types.ObjectId(user._id) });
    return await cart.save();
  } catch (error) {
    throw new Error("Failed to create cart: " + error.message);
  }
};

console.log("Exporting createCart function from cartUtils.js");
module.exports = { createCart };
