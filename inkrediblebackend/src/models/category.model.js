const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId, // Reference to another category
    ref: "categories", // Matches the model name of the `categories` collection
  },
});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
