const mongoose = require("mongoose");
const Product = require("../../models/product.model");
const Category = require("../../models/category.model");

const migrateCategories = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/your_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const categories = await Category.find();
    const categoryMap = categories.reduce((map, category) => {
      map[category.name.toLowerCase()] = category._id;
      return map;
    }, {});

    const products = await Product.find();
    for (const product of products) {
      const categoryId = categoryMap[product.Category.toLowerCase()];
      if (categoryId) {
        await Product.updateOne(
          { _id: product._id },
          { $set: { category: categoryId } }
        );
      }
    }

    console.log("Migration completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Migration error:", error);
    process.exit(1);
  }
};

migrateCategories();