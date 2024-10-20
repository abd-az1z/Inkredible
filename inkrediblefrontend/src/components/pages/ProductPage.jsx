import React, { useState } from "react";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271"
  );

  const [selectedCategory, setSelectedCategory] = useState("Men");
  const [selectedSize, setSelectedSize] = useState("M");

  const productImages = [
    "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
    "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
    "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
  ];

  const categories = ["Men", "Women", "Kids"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Gallery */}
        <div className="flex flex-col">
          <div className="w-full h-96 mb-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-4">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                className={`w-24 h-24 object-cover cursor-pointer rounded-lg ${
                  selectedImage === img ? "ring-2 ring-black" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Horizon Tweed Shacket</h1>
          <p className="text-gray-600 mb-6">Steel Plaid</p>
          <p className="text-2xl font-semibold mb-4">$164</p>
          <p className="text-gray-700 mb-6">
            This is a high-quality, stylish tweed shacket, perfect for any
            occasion. Made from sustainable materials and handcrafted with care.
          </p>

          {/* Category Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">
              Category:
            </label>
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Size:</label>
            <div className="flex space-x-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buy Now Button */}
          <button className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;