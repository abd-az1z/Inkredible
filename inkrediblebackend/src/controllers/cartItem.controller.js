// Import cart item service to manage cart item-related operations
const cartItemService = require("../services/cartItem.service.js");
const Cart = require("../models/cart.model.js")

/**
 * Updates a cart item for the specified user.
 * @param {Object} req - The request object, with user data in `req.user`, item ID in `req.params.id`, and update data in `req.body`.
 * @param {Object} res - The response object.
 */
async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    // Find the user's cart
    const cart = await Cart.findOne({ user: userId });
    if (!cart) throw new Error("Cart not found for this user");

    // Find the item in the cart
    const itemIndex = cart.cartItems.findIndex(
      (item) => item._id.toString() === cartItemId
    );
    if (itemIndex === -1) throw new Error("Cart item not found");

    // Update the item's quantity
    cart.cartItems[itemIndex].quantity = cartItemData.quantity;

    // Save the cart
    await cart.save();

    return cart.cartItems[itemIndex];
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Removes a cart item for the specified user.
 * @param {Object} req - The request object, with user data in `req.user` and item ID in `req.params.id`.
 * @param {Object} res - The response object.
 */
async function removeCartItem(req, res) {
  const userId = req.user._id; // Get the user ID from the authenticated request
  const cartItemId = req.params.id; // Get the cart item ID from the URL params

  try {
    // Call the service to remove the cart item
    const response = await cartItemService.removeCartItem(userId, cartItemId);

    // Send a success response
    return res.status(200).json(response);
  } catch (err) {
    // Log the error and send a 500 response
    console.error("Error removing cart item:", err.message);
    return res.status(500).json({ error: err.message });
  }
}

// Export the controller functions for use in routes
module.exports = { updateCartItem, removeCartItem };

// Key Points

// •	Error Handling: Both functions include error handling, logging the error to the console, and sending a 500 response with the error message if an issue occurs.
// •	Assumptions:
// •	req.user contains the user information (usually added by an authentication middleware).
// •	req.params.id holds the ID of the cart item being modified or removed.
