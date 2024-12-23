// Import product service to handle product-related operations
const Product = require("../models/product.model");
const productService = require("../services/product.service");
const mongoose = require("mongoose");
const Category = require("../models/category.model");

/**
 * Creates a new product.
 * @param {Object} req - The request object, with product data in `req.body`.
 * @param {Object} res - The response object.
 */
async function createProduct(req, res) {
  try {
    // Call service to create a new product with provided data
    const product = await productService.createProduct(req.body);
    // Send the created product with a 201 status
    return res.status(201).json(product);
  } catch (err) {
    // Handle errors and send a 500 status with error details
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Deletes a product by ID.
 * @param {Object} req - The request object, with product ID in `req.params.id`.
 * @param {Object} res - The response object.
 */
async function deleteProduct(req, res) {
  try {
    const productId = req.params.id; // Get the product ID from request parameters
    const message = await productService.deleteProduct(productId);
    // Send a success message if the product is deleted
    return res.json({ message });
  } catch (err) {
    // Handle errors and send a 500 status with error details
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Updates a product by ID.
 * @param {Object} req - The request object, with product ID in `req.params.id` and updated data in `req.body`.
 * @param {Object} res - The response object.
 */
async function updateProduct(req, res) {
  try {
    const productId = req.params.id; // Get the product ID from request parameters
    const product = await productService.updateProduct(productId, req.body);
    // Send the updated product data
    return res.json(product);
  } catch (err) {
    // Handle errors and send a 500 status with error details
    res.status(500).json({ error: err.message });
  }
}

/**
 * Retrieves all products with optional filtering and sorting.
 * @param {Object} req - The request object, with query parameters in `req.query`.
 * @param {Object} res - The response object.
 */
const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;

    const filter = category ? { category } : {}; // Filter if category is provided
    const products = await Product.find(filter).populate("category", "name"); // Populate category name
    res.status(200).json(products);
    console.log("Products sent to frontend:", products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Finds a product by its ID.
 * @param {Object} req - The request object, with product ID in `req.params.id`.
 * @param {Object} res - The response object.
 */
const findProductById = async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID format" });
  }

  try {
    // Find the product and populate the category
    const product = await Product.findById(id).populate("category", "name");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("Product ID received in backend:", id);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Searches products by a query string.
 * @param {Object} req - The request object, with search query in `req.params.query`.
 * @param {Object} res - The response object.
 */
async function searchProduct(req, res) {
  try {
    const query = req.params.query; // Get the search query from request parameters
    const products = await productService.searchProduct(query);
    // Send the products matching the search query
    res.json(products);
  } catch (err) {
    // Handle errors and send a 500 status with error details
    res.status(500).json({ error: err.message });
  }
}

/**
 * Creates multiple products at once.
 * @param {Object} req - The request object, with an array of product data in `req.body`.
 * @param {Object} res - The response object.
 */
const createMultipleProduct = async (req, res) => {
  try {
    // Call service to create multiple products from the provided data array
    await productService.createMultipleProduct(req.body);
    // Send a success message with a 202 status
    res
      .status(202)
      .json({ message: "Products Created Successfully", success: true });
  } catch (error) {
    // Handle errors and send a 500 status with error details
    res.status(500).json({ error: "Something went wrong" });
  }
};

/**
 * Finds products by category.
 * @param {Object} req - The request object, with category name in `req.params.category`.
 * @param {Object} res - The response object.
 */

const getProductsByCategory = async (req, res) => {
  try {
    const { categoryName } = req.params;
    console.log("Requested Category Name:", categoryName);

    const category = await Category.findOne({ name: categoryName });
    console.log("Matched Category:", category);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const products = await Product.find({ category: category._id });
    console.log("Fetched Products:", products);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Export all controller functions for use in routes
module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  searchProduct,
  createMultipleProduct,
  getProductsByCategory,
};
