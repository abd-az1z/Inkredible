// Import required models
const mongoose = require("mongoose");
const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");

/**
 * Function to create a new cart for a given user.
 *  The user for whom the cart is being created.
 *  createdCart - The newly created cart object.
 */
async function createCart(user) {
  try {
    // Create a new Cart instance with the provided user
    const cart = new Cart({ user: user._id });
    // Save the cart to the database
    const createdCart = await cart.save();
    // Return the saved cart
    return createdCart;
  } catch (error) {
    // Throw an error if cart creation fails
    throw new Error(error.message);
  }
}

/**
 * Function to find a user's cart and calculate details like total price and discount.
 *  - The ID of the user whose cart is being fetched.
 *  cart - The user's cart with items and calculated details.
 */
async function findUserCart(userId) {
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) throw new Error("Cart not found");

    const cartItems = await CartItem.find({ cart: cart._id }).populate(
      "product"
    );

    cart.cartItems = cartItems || [];
    cart.totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    cart.totalItem = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cart.totalDiscountedPrice = cartItems.reduce(
      (sum, item) => sum + item.discountedPrice,
      0
    );
    cart.discount = cart.totalPrice - cart.totalDiscountedPrice;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Function to add a new item to the user's cart.
 *  - The ID of the user adding an item to the cart.
 *  - The request object containing product details to add.
 *  - Success message if the item is added.
 */
const addItemToCart = async (userId, { productId, size, quantity }) => {
  try {
    // Ensure `productId` is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      console.error("Invalid Product ID:", productId); // Log invalid product ID

      throw new Error("Invalid product ID");
    }

    // Convert `productId` and `userId` to ObjectId
    const productObjectId = new mongoose.Types.ObjectId(productId);
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const product = await Product.findById(productObjectId);
    console.log("Product Found:", product); // Log product details
    if (!product) {
      throw new Error("Product not found");
    }

    let cart = await Cart.findOne({ user: userObjectId });
    console.log("User Cart Before Update:", cart); // Log user's cart
    if (!cart) {
      cart = new Cart({ user: userObjectId, cartItems: [] });
    }

    const existingItem = cart.cartItems.find(
      (item) =>
        item.product.toString() === productObjectId.toString() &&
        item.size === size
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.cartItems.push({ product: productObjectId, size, quantity });
    }

    const updatedCart = await cart.save();
    console.log("User Cart After Update:", updatedCart); // Log updated cart
    return updatedCart;
  } catch (error) {
    console.error("Error in addItemToCart:", error.message);
    throw new Error(error.message);
  }
};

// Export the functions to be used in other parts of the application
module.exports = { createCart, findUserCart, addItemToCart };
