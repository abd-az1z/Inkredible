const express = require("express");
const router = express.Router();
const Order = require("../models/Order"); // Import the Order model

// POST /orders - Create a new order
router.post("/orders", async (req, res) => {
  try {
    // Extract order details from the request body
    const {
      firstName,
      lastName,
      email,
      address,
      city,
      postalCode,
      paymentMethod,
      deliveryMethod,
      items,
      total,
    } = req.body;

    // Create a new order instance
    const newOrder = new Order({
      firstName,
      lastName,
      email,
      address,
      city,
      postalCode,
      paymentMethod,
      deliveryMethod,
      items,
      total,
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();

    // Send a success response back to the frontend
    res.status(201).json({
      message: "Order placed successfully!",
      order: savedOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      message: "Failed to place order",
      error: error.message,
    });
  }
});

module.exports = router;
