import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import { FaStar } from "react-icons/fa";
import Reviews from "../common/Reviews";
import SuggestedAndRecommened from "../common/SuggestedAndRecommeded";
import CartPage from "../pages/CartPage";

// Sample product data - You can replace this with a real API call
const productData = {
  "1": {
    name: "Horizon Tweed Shacket",
    price: 164,
    image: "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
    description: "This is a high-quality, stylish tweed shacket...",
    rating: 4,
    category: "Men",
  },
  "2": {
    name: "Alpha Vest",
    price: 120,
    image: "https://cdn.shopify.com/s/files/1/1368/3463/files/AlphaVest_01.jpg?v=1726605272",
    description: "A perfect vest for all-weather conditions...",
    rating: 5,
    category: "Men",
  },
  // Add more product objects here...
};

const ProductPage = () => {
  const { productId } = useParams(); // Get the productId from URL
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [customerRating, setCustomerRating] = useState(4);
  const [cartItems, setCartItems] = useState([]); // State to track cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart page visibility

  useEffect(() => {
    // Fetch the product data based on the productId
    const fetchedProduct = productData[productId];
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setCustomerRating(fetchedProduct.rating);
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Function to handle adding items to the cart
  const handleAddToCart = () => {
    const newItem = {
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
      quantity: 1,
    };
    setCartItems((prevItems) => [...prevItems, newItem]); // Add item to the cart
    setIsCartOpen(true); // Open the cart page when an item is added
  };

  // Function to remove item from the cart
  const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(updatedCartItems);
    if (updatedCartItems.length === 0) {
      setIsCartOpen(false); // Close cart when there are no items left
    }
  };

  // Function to handle checkout (this can be extended as needed)
  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex flex-col">
            <div className="w-full h-[36rem] mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4">${product.price}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-semibold">Size:</label>
              <div className="flex space-x-4">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Ratings */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-semibold">
                Customer Rating:
              </label>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < customerRating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setCustomerRating(index + 1)}
                  />
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all tracking-wider "
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Suggested and Recommended */}
        <div className="w-full my-6 mt-10">
          <SuggestedAndRecommened />
        </div>

        {/* Reviews */}
        <div className="w-full my-6">
          <h2 className="text-lg md:text-3xl mt-10 font-semibold md:font-extrabold md:tracking-wider mb-4">
            Hear It From Our Customers:
          </h2>
          <Reviews />
        </div>
      </div>

      {/* Cart Page: Conditionally show the CartPage component only when items exist */}
      {isCartOpen && cartItems.length > 0 && (
        <CartPage
          cartItems={cartItems}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
          toggleCart={() => setIsCartOpen(false)} // Close cart
        />
      )}
    </>
  );
};

export default ProductPage;