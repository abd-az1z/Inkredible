import React from "react";
import { FaTrash, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const CartPage = ({ cartItems = [], onRemoveItem, onCheckout, toggleCart }) => {
  return (
    <>
      {/* Cart overlay */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-white z-40 shadow-lg"
      >
        <div className="p-4">
          {/* Back to Products button */}
          <button
            className="flex items-center mb-4 text-gray-500 hover:text-black"
            onClick={toggleCart} // Call toggleCart to close the cart
          >
            <FaChevronLeft /> Back to Products
          </button>

          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

          {/* Cart items */}
          {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between mb-4 border-b pb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          Size: {item.size}
                        </p>
                        <p className="text-sm text-gray-600">
                          Price: ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => onUpdateQuantity(item, e.target.value)}
                        className="w-12 border rounded-lg p-2 text-center"
                      />
                      <button
                        onClick={() => onRemoveItem(item)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Checkout section */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold">
                  Subtotal ({cartItems.length} items): $
                  {cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </h3>
                <button
                  onClick={onCheckout}
                  className="bg-black text-white w-full py-3 mt-4 rounded-lg hover:bg-gray-800"
                >
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </motion.div>

      {/* Background overlay when cart is open */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-30"
        onClick={toggleCart} // Close cart on clicking outside
      />
    </>
  );
};

export default CartPage;
