// Import necessary modules
const express = require("express");
// Import the product controller to handle product-related actions
const productController = require("../controllers/product.controller.js");

const router = express.Router(); // Initialize an express router

/**
 * POST / - Creates a new product.
 * Calls the product controller's `createProduct` function to add a new product to the database.
 */
router.post("/", productController.createProduct);

/**
 * POST /creates - Creates multiple products at once.
 * Calls the product controller's `createMultipleProduct` function to add an array of products.
 */
router.post("/creates", productController.createMultipleProduct);

/**
 * DELETE /:id - Deletes a specific product by ID.
 * Calls the product controller's `deleteProduct` function to remove a product from the database.
 * @param {string} id - The ID of the product to delete.
 */
router.delete("/:id", productController.deleteProduct);

/**
 * PUT /:id - Updates a specific product by ID.
 * Calls the product controller's `updateProduct` function to modify product details.
 * @param {string} id - The ID of the product to update.
 */
router.put("/:id", productController.updateProduct);

// Export the router for use in the main application
module.exports = router;
