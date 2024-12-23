// Import required models and services
const Order = require("../models/order.model.js");
const cartService = require("../services/cart.service.js");
const Address = require("../models/address.model.js"); // Adjust path if necessary

/**
 * Creates a new order for the given user, using a provided shipping address.
 * @param {Object} user - The user placing the order.
 * @param {Object} shippingAddress - The shipping address for the order.
 * @returns {Object} - The created order.
 */
async function createOrder(user, shippingAddress) {
  let address;

  // Check if the shipping address already exists by ID
  if (shippingAddress._id) {
    let existAddress = await Address.findById(shippingAddress._id);
    address = existAddress;
  } else {
    // If it's a new address, create and save it to the database
    address = new Address(shippingAddress);
    address.user = user;
    await address.save();

    // Add the address to the user's address list and save
    user.addresses.push(address);
    await user.save();
  }

  // Retrieve the user's cart details
  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  // Create order items from the items in the cart
  for (const item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product._id,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });
    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }

  // Create the order with the calculated cart details and address
  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItem,
    shippingAddress: address,
  });

  // Save the order to the database
  const savedOrder = await createdOrder.save();
  return savedOrder;
}

/**
 * Updates the status of an order to "Placed" and marks payment as completed.
 * @param {String} orderId - The ID of the order to update.
 * @returns {Object} - The updated order.
 */
async function placeOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "Placed";
  order.paymentDetails = "Completed";
  return await order.save();
}

/**
 * Updates the status of an order to "Confirmed."
 * @param {String} orderId - The ID of the order to update.
 * @returns {Object} - The updated order.
 */
async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "Confirmed";
  return await order.save();
}

/**
 * Updates the status of an order to "Shipping."
 * @param {String} orderId - The ID of the order to update.
 * @returns {Object} - The updated order.
 */
async function shippingOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "Shipping";
  return await order.save();
}

/**
 * Updates the status of an order to "Delivered."
 * @param {String} orderId - The ID of the order to update.
 * @returns {Object} - The updated order.
 */
async function deliveredOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "Delivered";
  return await order.save();
}

/**
 * Updates the status of an order to "Cancelled."
 * @param {String} orderId - The ID of the order to cancel.
 * @returns {Object} - The updated order.
 */
async function cancelledOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "Cancelled";
  return await order.save();
}

/**
 * Finds an order by its ID, including related user and product details.
 * @param {String} orderId - The ID of the order to find.
 * @returns {Object} - The order with populated details.
 */
async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
}

/**
 * Retrieves the order history for a specific user, showing only "Placed" orders.
 * @param {String} userId - The ID of the user.
 * @returns {Array} - An array of the user's placed orders with populated details.
 */
async function usersOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "Placed" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Retrieves all orders in the system with populated item details.
 * @returns {Array} - An array of all orders.
 */
async function getAllOrders() {
  return await Order.find({})
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

/**
 * Deletes an order by its ID.
 * @param {String} orderId - The ID of the order to delete.
 */
async function deleteOrder(orderId) {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
}

module.exports = {
  createOrder,
  placeOrder,
  confirmedOrder,
  shippingOrder,
  deliveredOrder,
  cancelledOrder,
  findOrderById,
  usersOrderHistory,
  getAllOrders,
  deleteOrder,
};