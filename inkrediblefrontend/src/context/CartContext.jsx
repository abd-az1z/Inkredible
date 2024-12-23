// context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

// CartProvider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove items from the cart
  const removeItemFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};