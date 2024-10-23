const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String,
  discount: String,
  label: String,
});

module.exports = mongoose.model('Product', productSchema);