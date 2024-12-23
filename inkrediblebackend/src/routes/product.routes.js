const express = require("express");
const mongoose = require("mongoose");
const productController = require("../controllers/product.controller.js");
const Category = require("../models/category.model.js");

const router = express.Router();

// GET /api/products - Retrieves all products with optional filters
router.get("/", productController.getAllProducts);

// Route to fetch products by category name
router.get("/category/:categoryName", productController.getProductsByCategory);

router.get("/:id", productController.findProductById);


// GET /api/products/search - Searches for products based on a query
router.get("/search", productController.searchProduct);


module.exports = router;
