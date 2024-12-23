// Import the order service to handle order-related operations
const orderService = require("../services/order.service.js");

/**
 * Creates a new order for the specified user.
 * @param {Object} req - The request object, with user data in `req.user` and order details in `req.body`.
 * @param {Object} res - The response object.
 */
const createOrder = async (req, res) => {
  const user = req.user; // Retrieve user information from the request

  try {
    // Call the service to create a new order for the user
    let createdOrder = await orderService.createOrder(user, req.body);

    // Log the created order for debugging purposes
    console.log("Order created: ", createdOrder);

    // Send the created order with a 201 status
    return res.status(201).send(createdOrder);
  } catch (error) {
    // Handle any errors that occur during order creation
    return res.status(500).send({ error: error.message });
  }
};

/**
 * Retrieves an order by its ID.
 * @param {Object} req - The request object, with user data in `req.user` and order ID in `req.params.id`.
 * @param {Object} res - The response object.
 */
const findOrderById = async (req, res) => {
  const user = req.user; // Retrieve user information from the request

  try {
    // Call the service to find the order by its ID
    let order = await orderService.findOrderById(req.params.id);

    // Send the retrieved order with a 200 status
    return res.status(200).send(order);
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    return res.status(500).send({ error: error.message });
  }
};

/**
 * Retrieves the order history for the specified user.
 * @param {Object} req - The request object, with user data in `req.user`.
 * @param {Object} res - The response object.
 */
const orderHistory = async (req, res) => {
  const user = req.user; // Retrieve user information from the request

  try {
    // Call the service to get the user's order history
    let order = await orderService.usersOrderHistory(user._id);

    // Send the order history with a 200 status
    return res.status(200).send(order);
  } catch (error) {
    // Handle any errors that occur during the retrieval of order history
    return res.status(500).send({ error: error.message });
  }
};

// Export the controller functions for use in routes
module.exports = { createOrder, findOrderById, orderHistory };


// Key Points

	// •	Error Handling: Each function has error handling that logs any issues and returns a 500 status with an error message.
	// •	Assumptions:
	// •	req.user contains user information, likely populated by authentication middleware.
	// •	req.body includes the order details for creating an order.
	// •	req.params.id holds the order ID for fetching specific orders.