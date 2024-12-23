// Import the order service to handle order-related operations
const orderService = require("../services/order.service.js");

/**
 * Retrieves and sends all orders.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAllOrders = async (req, res) => {
  try {
    // Call the service to fetch all orders
    const orders = await orderService.getAllOrders();
    // Send the orders with a 200 status
    res.status(200).send(orders);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: error.message });
  }
};

/**
 * Confirms an order by its ID.
 * @param {Object} req - The request object with `orderId` in params.
 * @param {Object} res - The response object.
 */
const confirmedOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    // Call the service to confirm the order
    const orders = await orderService.confirmedOrder(orderId);
    // Send the confirmed order with a 200 status
    res.status(200).send(orders);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: error.message });
  }
};

/**
 * Updates an order status to "Shipped" by its ID.
 * @param {Object} req - The request object with `orderId` in params.
 * @param {Object} res - The response object.
 */
const shipOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    // Call the service to update the order status to "Shipped"
    const orders = await orderService.shipOrders(orderId);
    // Send the updated order with a 200 status
    res.status(200).send(orders);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: error.message });
  }
};

/**
 * Updates an order status to "Delivered" by its ID.
 * @param {Object} req - The request object with `orderId` in params.
 * @param {Object} res - The response object.
 */
const deliverOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    // Call the service to update the order status to "Delivered"
    const orders = await orderService.deliverOrders(orderId);
    // Send the updated order with a 200 status
    res.status(200).send(orders);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: error.message });
  }
};

/**
 * Cancels an order by its ID.
 * @param {Object} req - The request object with `orderId` in params.
 * @param {Object} res - The response object.
 */
const cancelOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    // Call the service to cancel the order
    const orders = await orderService.cancelOrders(orderId);
    // Send the canceled order with a 200 status
    res.status(200).send(orders);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: error.message });
  }
};

/**
 * Deletes an order by its ID.
 * @param {Object} req - The request object with `orderId` in params.
 * @param {Object} res - The response object.
 */
const deleteOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    // Call the service to delete the order
    const orders = await orderService.deleteOrder(orderId);
    // Send a success message with the deleted order information and a 200 status
    res.status(200).send(orders);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: error.message });
  }
};

// Export all controller functions for use in routes
module.exports = {
  getAllOrders,
  confirmedOrders,
  shipOrders,
  deliverOrders,
  cancelOrders,
  deleteOrders,
};
