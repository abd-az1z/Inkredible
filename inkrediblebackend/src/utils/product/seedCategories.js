const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Category = require("../../models/category.model");

dotenv.config({ path: require("path").resolve(__dirname, "../../../.env") });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    seedCategories();
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

const seedCategories = async () => {
  try {
    await Category.deleteMany(); // Clear existing categories
    const categories = [
      { name: "Men's" },
      { name: "Women's" },
      { name: "Kids" },
      { name: "Unisex" },
    ];
    await Category.insertMany(categories);
    console.log("Categories seeded successfully!");
    process.exit(0); // Exit the process
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1); // Exit with failure
  }
};
