import React, { useState } from "react"; // Import useState
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  // State to manage the side menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the side menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full p-4">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button id="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <HiX /> : <HiMenuAlt2 />}
          </button>
        </div>

        {/* Side Menu */}
        <motion.div
          initial={{ x: "-100%" }} // Initial state: off the screen to the left
          animate={{ x: isMenuOpen ? 0 : "-100%" }} // Animate based on menu state
          transition={{ duration: 0.5, ease: "easeInOut" }} // Transition config
          className="fixed top-0 left-0 h-full w-72  p-6 md:hidden"
        >

          {/* Side menu content */}
          <ul>
            <li className="my-6">
              <a href="/" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="/men" onClick={toggleMenu}>
                Men
              </a>
            </li>
            <li className="mb-4">
              <a href="/women" onClick={toggleMenu}>
                Women
              </a>
            </li>
            <li className="mb-4">
              <a href="/kids" onClick={toggleMenu}>
                Kids
              </a>
            </li>
            <li className="mb-4">
              <a href="/unisex" onClick={toggleMenu}>
                Unisex
              </a>
            </li>
            <li className="mb-4">
              <a href="/sale" onClick={toggleMenu}>
                Sale
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-6">
          <a href="/men" className="hover:text-red-500">
            Men
          </a>
          <a href="/women" className="hover:text-red-500">
            Women
          </a>
          <a href="/kids" className="hover:text-red-500">
            Kids
          </a>
          <a href="/featured" className="hover:text-red-500">
            Featured
          </a>
        </div>
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">Logo</a>
        </div>
        {/* Cart, Search, Login */}
        <div className="flex items-center space-x-6">
          {/* Show only the Search and Cart icons on small screens */}
          <FiSearch className="block md:hidden" />
          <FiShoppingCart className="block md:hidden" />

          {/* Show all icons on medium and larger screens */}
          <div className="hidden md:flex space-x-6">
            <FiSearch />
            <FiUser />
            <FiShoppingCart />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;