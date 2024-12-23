// Import required models
const Category = require("../models/category.model");
const Product = require("../models/product.model");

/**
 * Creates a new product with specified details and a category (e.g., Men's, Women's, Kids, Unisex).
 * @param {Object} reqData - The data required to create a product.
 * @returns {Object} - The newly created product.
 */
async function createProduct(reqData) {
  // Find or create a single-level category (e.g., Men's, Women's, etc.)
  let category = await Category.findOne({ name: reqData.category });

  if (!category) {
    // Create a new category if it doesn't exist
    category = new Category({
      name: reqData.category,
    });
    category = await category.save();
  }

  // Create a new product and assign the found or created category
  const product = new Product({
    title: reqData.title,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountPercent: reqData.discountPercent,
    imageUrl: reqData.imageUrl,
    price: reqData.price,
    sizes: reqData.size,
    quantity: reqData.quantity,
    category: category._id,
  });

  // Save the product to the database
  const savedProduct = await product.save();
  return savedProduct;
}

/**
 * Deletes a product by its ID.
 * @param {String} productId - The ID of the product to delete.
 * @returns {String} - A success message if the product is deleted.
 * @throws {Error} - If the product is not found.
 */
async function deleteProduct(productId) {
  const product = await findProductById(productId);

  if (!product) {
    throw new Error("Product not found with ID: " + productId);
  }

  await Product.findByIdAndDelete(productId);
  return "Product deleted successfully";
}

/**
 * Updates a product by its ID.
 * @param {String} productId - The ID of the product to update.
 * @param {Object} reqData - The updated product data.
 * @returns {Object} - The updated product.
 */
async function updateProduct(productId, reqData) {
  const updatedProduct = await Product.findByIdAndUpdate(productId, reqData, {
    new: true,
  });
  return updatedProduct;
}

/**
 * Finds a product by its ID with populated category details.
 * @param {String} id - The ID of the product to find.
 * @returns {Object} - The found product with populated category.
 * @throws {Error} - If the product is not found.
 */
async function findProductById(req, res) {
  const { id } = req.params;

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID format" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product not found with ID ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
/**
 * Retrieves all products with optional filters and sorting (without pagination).
 * @param {Object} reqQuery - The query parameters for filtering and sorting.
 * @returns {Array} - The filtered and sorted list of products.
 */
async function getAllProducts() {
  const products = await Product.find().populate("category");
  console.log("All products:", products);
  return products;
}

/**
 * Creates multiple products at once.
 * @param {Array} products - An array of product data to create.
 */
async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

// Export the service functions
module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProduct,
};

// Summary of Functions

// 	•	createProduct: Creates a new product and assigns it to a single-level category (e.g., Men’s, Women’s).
// 	•	deleteProduct: Deletes a product by its ID.
// 	•	updateProduct: Updates a product’s details by its ID.
// 	•	findProductById: Finds and returns a product by its ID with populated category details.
// 	•	getAllProducts: Retrieves all products with filters for size, price range, stock availability, and sorting, without pagination.
// 	•	createMultipleProduct: Bulk product creation by looping through an array of product data.
