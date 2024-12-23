const Category = require("../models/category.model");

/**
 * Retrieves all categories.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  getAllCategories,
};