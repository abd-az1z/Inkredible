import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../Redux/Customer/Product/Action";
import { addItemToCart } from "../../../Redux/Customer/Cart/Action";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);
  console.log(product)

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showGoToCartButton, setShowGoToCartButton] = useState(false); // New state

  const jwt = localStorage.getItem("jwt"); // Adjust key if stored differently
  // console.log("JWT Token from localStorage:", jwt);

  useEffect(() => {
    if (productId) {
      dispatch(findProductById(productId));
    }
  }, [productId, dispatch]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setErrorMessage("");
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessage("Please select a size.");
      return;
    }

    // Validate productId before sending
    if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
      setErrorMessage("Invalid product ID.");
      return;
    }

    const reqData = {
      productId,
      size: selectedSize,
      quantity,
    };

    dispatch(addItemToCart(reqData))
      .then(() => {
        setSuccessMessage("Item added to cart successfully!");
        setShowGoToCartButton(true); // Show the "Go to Cart" button
      })
      .catch((error) => setErrorMessage("Failed to add item to cart.", error));
  };

  if (!jwt) {
    console.error("User is not authenticated. Redirecting to login.");
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">You must be logged in to view this page.</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Login
        </button>
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="my-10 mb-20 px-10 min-h-screen">
      <div className="mx-auto container">
        <div className="flex gap-x-10 flex-col lg:flex-row">
          <div className="w-1/2">
            <div className="lg:w-[90%] h-[40vw]">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="rounded object-cover w-full h-full"
              />
              <div className="flex space-x-4 mt-4">
                <img
                  src={product.imageUrl}
                  alt="Additional 1"
                  className="w-24 h-24 rounded object-cover"
                />
                <img
                  src={product.imageUrl}
                  alt="Additional 2"
                  className="w-24 h-24 rounded object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10 text-[#583B1F]">
            <h1 className="text-5xl font-semibold font-serif">
              {product.title}
            </h1>
            <p className="text-xl font-light mt-4">{product.description}</p>
            <div className="flex items-center mt-8">
              <p className="text-4xl font-['franklin'] font-medium">
                $ {product.discountedPrice}
              </p>
              <p className="opacity-50 line-through mx-4">${product.price}</p>
              <p className="font-medium text-green-400">
                {product.discountPersent.toFixed(1)}% OFF
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-['franklin'] font-medium">Size</h3>
              <div className="flex space-x-4 mt-2">
                {product.sizes
                  .filter((size) => size.quantity > 0)
                  .map((size) => (
                    <button
                      key={size._id}
                      onClick={() => handleSizeSelection(size.name)}
                      className={`w-12 h-12 border-2 rounded-full text-center font-medium uppercase ${
                        selectedSize === size.name
                          ? "bg-[#C1BFCB] text-white"
                          : "border-[#C1BFCB] text-[#C1BFCB] hover:bg-[#C1BFCB] hover:text-white"
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-['franklin'] font-medium">
                Quantity
              </h3>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 border-2 border-[#C1BFCB] rounded text-center text-lg font-medium mt-2"
              />
            </div>
            <div>
              {successMessage && (
                <p className="text-green-500 text-sm mt-2">{successMessage}</p>
              )}
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="mt-10 border-[#C1BFCB] border-2 hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase tracking-widest py-3 px-32 text-lg rounded-full"
              >
                Add to Cart
              </button>

              {/* Go to Cart Button (Visible Only After Adding to Cart) */}
              {showGoToCartButton && (
                <button className="mt-4">
                  <Link
                    to={`/cart`}
                    className="border-[#C1BFCB] border-2 hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase tracking-widest py-3 px-32 text-lg rounded-full"
                  >
                    Go to Cart
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
