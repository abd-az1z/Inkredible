// Import necessary modules
const express = require("express");
// Import the authentication middleware to protect routes
const authenticate = require("../middleware/authenticat.js");
// Import the order controller to handle admin-specific order actions
const adminOrderController = require("../controllers/adminOrder.controller.js");

const router = express.Router(); // Initialize an express router

/**
 * GET / - Retrieves all orders.
 * Requires authentication.
 */
router.get("/", authenticate, adminOrderController.getAllOrders);

/**
 * PUT /:orderId/confirmed - Confirms an order by its ID.
 * Requires authentication.
 * @param {string} orderId - The ID of the order to confirm.
 */
router.put(
  "/:orderId/confirmed",
  authenticate,
  adminOrderController.confirmedOrders
);

/**
 * PUT /:orderId/ship - Updates an order status to "Shipped" by its ID.
 * Requires authentication.
 * @param {string} orderId - The ID of the order to mark as shipped.
 */
router.put("/:orderId/ship", authenticate, adminOrderController.shipOrders);

/**
 * PUT /:orderId/deliver - Updates an order status to "Delivered" by its ID.
 * Requires authentication.
 * @param {string} orderId - The ID of the order to mark as delivered.
 */
router.put(
  "/:orderId/deliver",
  authenticate,
  adminOrderController.deliverOrders
);

/**
 * PUT /:orderId/cancel - Cancels an order by its ID.
 * Requires authentication.
 * @param {string} orderId - The ID of the order to cancel.
 */
router.put("/:orderId/cancel", authenticate, adminOrderController.cancelOrders);

/**
 * DELETE /:orderId/delete - Deletes an order by its ID.
 * Requires authentication.
 * @param {string} orderId - The ID of the order to delete.
 */
router.delete(
  "/:orderId/delete",
  authenticate,
  adminOrderController.deleteOrders
);

// Export the router for use in the main application
module.exports = router;
