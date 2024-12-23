const mongoose = require("mongoose");
const Product = require("../../models/product.model");
const dotenv = require("dotenv");
const products = require("./products.json");
const Category = require("../../models/category.model");

dotenv.config(); // Load environment variables

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
    seedProducts(); // Call seed function
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit with failure
  });

// Seed function
const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    console.log("All products deleted");

    const categories = await Category.find(); // Fetch all categories from DB
    const categoryMap = categories.reduce((map, category) => {
      map[category.name] = category._id;
      return map;
    }, {});

    const products = require("./products.json").map((product) => {
      return {
        ...product,
        category: categoryMap[product.category], // Map category name to ObjectId
      };
    });

    await Product.insertMany(products);
    console.log("Products seeded successfully");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
};
seedProducts();