const mongoose = require("mongoose");
const Product = require("./Product"); // Adjust path as necessary

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/inkredible", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updateProducts = async () => {
  try {
    // Add the 'sizes' field to all products, if not already present
    const result = await Product.updateMany(
      { sizes: { $exists: false } }, // Only update documents without 'sizes'
      { $set: { sizes: ["S", "M", "L", "XL", "XXL"] } }
    );

    console.log("Products updated:", result.modifiedCount);
  } catch (error) {
    console.error("Error updating products:", error);
  } finally {
    mongoose.connection.close();
  }
};

updateProducts();