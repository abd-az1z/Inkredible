const CartItem = require("../models/cartItem.model.js");
const Cart = require("../models/cart.model.js");
// const userService = require("../services/user.service.js"); // Importing user service for user-related functions
const mongoose = require("mongoose");

/**
 * Function to update a cart item's quantity and price details.
 * @param {String} userId - The ID of the user attempting to update the cart item.
 * @param {String} cartItemId - The ID of the cart item to update.
 * @param {Object} cartItemData - Data containing the updated quantity for the cart item.
 * @returns {Object} - The updated cart item.
 * @throws {Error} - Throws an error if the user is unauthorized or if the item or user is not found.
 */
async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    console.log("Finding cart for user:", userId);

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      throw new Error("Cart not found for user: " + userId);
    }

    console.log("Finding cart item:", cartItemId);

    const itemIndex = cart.cartItems.findIndex(
      (item) => item._id.toString() === cartItemId
    );

    if (itemIndex === -1) {
      throw new Error("Cart item not found: " + cartItemId);
    }
    // Update the quantity
    cart.cartItems[itemIndex].quantity = cartItemData.quantity;

    await cart.save();

    console.log("Updated cart item:", cart.cartItems[itemIndex]);

    // Return the updated cart item with populated product details
    const updatedCartItem = await Cart.findOne(
      { user: userId, "cartItems._id": cartItemId },
      { "cartItems.$": 1 } // Project only the updated cart item
    ).populate("cartItems.product");

    return updatedCartItem.cartItems[0];
  } catch (error) {
    console.error("Error updating cart item:", error.message);
    throw new Error(error.message);
  }
}

/**
 * Function to remove a cart item for a given user.
 * @param {String} userId - The ID of the user attempting to remove the cart item.
 * @param {String} cartItemId - The ID of the cart item to be removed.
 * @throws {Error} - Throws an error if the user is unauthorized or if the cart item is not found.
 */
async function removeCartItem(userId, cartItemId) {
  try {
    // Find the user's cart
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      throw new Error("Cart not found for user: " + userId);
    }

    // Find the index of the cart item to remove
    const itemIndex = cart.cartItems.findIndex(
      (item) => item._id.toString() === cartItemId
    );

    if (itemIndex === -1) {
      throw new Error("Cart item not found: " + cartItemId);
    }

    // Remove the item from the cartItems array
    cart.cartItems.splice(itemIndex, 1);

    // Save the updated cart
    await cart.save();

    return { message: "Cart item removed successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Function to find a cart item by its ID.
 * @param {String} cartItemId - The ID of the cart item to find.
 * @returns {Object|null} - The found cart item or null if not found.
 * @throws {Error} - Throws an error if the cart item is not found.
 */
async function findCartItemById(userId, cartItemId) {
  try {
    const cart = await Cart.findOne(
      { user: userId, "cartItems._id": cartItemId },
      { "cartItems.$": 1 } // Project only the matching cart item
    );

    if (!cart || cart.cartItems.length === 0) {
      throw new Error("Cart item not found: " + cartItemId);
    }

    return cart.cartItems[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
// Exporting the functions to be used in other parts of the application
module.exports = { updateCartItem, removeCartItem, findCartItemById };
