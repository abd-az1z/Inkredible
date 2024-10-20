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
    <div className="w-full py-4 px-6">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Hamburger icon for mobile */}
        <div className="md:hidden mb:6">
          <button id="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <h2 className="font-medium">Menu</h2>
            ) : (
              <HiMenuAlt2 />
            )}
          </button>
        </div>

        {/* Side Menu */}
        <motion.div
          initial={{ x: "-100%" }} // Initial state: off the screen to the left
          animate={{ x: isMenuOpen ? 0 : "-100%" }} // Animate based on menu state
          transition={{ duration: 0.5, ease: "easeInOut" }} // Transition config
          className="fixed top-[7%] z-50 bg-zinc-100 left-0 h-screen w-72  p-6 px-8 mt-2 md:hidden"
        >
          {/* Side menu content */}
          <ul>
            <div className="flex justify-between items-center my-4">
              <li className="">
                <a href="/" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <motion.button
                aria-label="Close Menu"
                initial={{ rotate: 0, x: 0 }}
                animate={{
                  rotate: isMenuOpen ? 180 : 0,
                  x: isMenuOpen ? -20 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={toggleMenu}
              >
                <HiX className="text-xl" />
              </motion.button>
            </div>
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
          <a href="/men" className=" hover:border-b-[1px] border-gray-800 p-2 text-sm">
            Men
          </a>
          <a href="/women" className=" hover:border-b-[1px] border-gray-800 p-2 text-sm">
            Women
          </a>
          <a href="/kids" className=" hover:border-b-[1px] border-gray-800 p-2 text-sm">
            Kids
          </a>
          <a href="/featured" className=" hover:border-b-[1px] border-gray-800 p-2 text-sm">
            Featured
          </a>
        </div>
        {/* Logo */}
        <div className="text-xl tracking-wider md:text-2xl">
          <a className="font-extrabold" href="/">INKREDIBLE</a>
        </div>
        {/* Cart, Search, Login */}
        <div className="flex items-center space-x-6">
          {/* Show only the Search and Cart icons on small screens */}
          <FiSearch className="block md:hidden" />
          <FiShoppingCart className="block md:hidden" />

          {/* Show all icons on medium and larger screens */}
          <div className="hidden md:flex text-sm font-semibold space-x-6">
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
