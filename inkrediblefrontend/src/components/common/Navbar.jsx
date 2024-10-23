import React, { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import CartPage from "../pages/CartPage";

const Navbar = ({ cartItems, onRemoveItem, onCheckout }) => {
  // State for managing the side menu and cart visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to toggle the side menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="w-full py-4 px-6">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Hamburger icon for mobile */}
        <div className="md:hidden mb:6">
          <button id="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <h2 className="font-medium">Menu</h2> : <HiMenuAlt2 />}
          </button>
        </div>

        {/* Side Menu */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isMenuOpen ? 0 : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-[9.2%] z-50 bg-zinc-100 left-0 h-screen w-72 p-6 px-8 mt-2 md:hidden"
        >
          <ul>
            <div className="flex justify-between items-center my-4">
              <li className="">
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <motion.button
                aria-label="Close Menu"
                initial={{ rotate: 0, x: 0 }}
                animate={{ rotate: isMenuOpen ? 180 : 0, x: isMenuOpen ? -20 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={toggleMenu}
              >
                <HiX className="text-xl" />
              </motion.button>
            </div>
            <li className="mb-4">
              <Link to="/men" onClick={toggleMenu}>
                Men
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/women" onClick={toggleMenu}>
                Women
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/kids" onClick={toggleMenu}>
                Kids
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/unisex" onClick={toggleMenu}>
                Unisex
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/sale" onClick={toggleMenu}>
                Sale
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link to="/men" className="hover:border-b-[1px] border-gray-800 p-2 text-sm">
            Men
          </Link>
          <Link to="/women" className="hover:border-b-[1px] border-gray-800 p-2 text-sm">
            Women
          </Link>
          <Link to="/kids" className="hover:border-b-[1px] border-gray-800 p-2 text-sm">
            Kids
          </Link>
          <Link to="/featured" className="hover:border-b-[1px] border-gray-800 p-2 text-sm">
            Sale
          </Link>
        </div>

        {/* Logo */}
        <div className="text-xl tracking-wider md:text-2xl">
          <Link className="font-extrabold" to="/">
            INKREDIBLE
          </Link>
        </div>

        {/* Cart, Search, Login */}
        <div className="flex items-center space-x-6">
          <FiSearch className="block md:hidden" />
          <FiShoppingCart className="block md:hidden" onClick={toggleCart} />

          {/* Show all icons on medium and larger screens */}
          <div className="hidden md:flex text-sm font-semibold space-x-6">
            <FiSearch />
            <FiUser />
            <FiShoppingCart onClick={toggleCart} />
          </div>
        </div>
      </nav>

      {/* Cart overlay */}
      {isCartOpen && (
        <CartPage
          cartItems={cartItems}
          onRemoveItem={onRemoveItem}
          onCheckout={onCheckout}
          toggleCart={toggleCart} // Close the cart
        />
      )}
    </div>
  );
};

export default Navbar;