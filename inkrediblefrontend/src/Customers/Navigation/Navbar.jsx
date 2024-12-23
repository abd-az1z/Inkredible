import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchCategories } from "../../Redux/Customer/Category/CategoryAction";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Importing icons
import AuthModal from "../Auth/AuthModal"; // Import AuthModal component

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const isAuthenticated = Boolean(jwt);

  const { cartItems } = useSelector((state) => state.cart || { cartItems: [] });
  const totalItems = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const { categories } = useSelector(
    (state) => state.categories || { categories: [] }
  );

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  const handleUserClick = () => {
    setAuthType("login");
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Helper function for dynamic link styles
  const getLinkStyle = (path) =>
    location.pathname.startsWith(path)
      ? "text-[#583B1F] font-semibold"
      : "text-gray-500 hover:text-[#583B1F] transition duration-200";

  return (
    <div className="w-full bg-[#E5E0DA] px-10">
      <nav className="py-6 text-[#583B1F] flex flex-col sm:flex-row items-center justify-between border-b border-[#583B1F] container mx-auto">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex justify-center sm:justify-start my-4 sm:my-0"
        >
          <h1 className="text-4xl font-bold font-serif tracking-tighter">
            Inkredible
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 px-4 items-center justify-center text-sm font-light tracking-wider">
          <Link
            to="/products/all-products"
            className={`py-1 ${getLinkStyle("/products/all-products")}`}
          >
            Shop
          </Link>
          <Link
            to="/products/men"
            className={`py-1 ${getLinkStyle("/products/men")}`}
          >
            Men
          </Link>
          <Link
            to="/products/women"
            className={`py-1 ${getLinkStyle("/products/women")}`}
          >
            Women
          </Link>
          <Link
            to="/products/kid"
            className={`py-1 ${getLinkStyle("/products/kid")}`}
          >
            Kids
          </Link>
          <Link
            to="/products/unisex"
            className={`py-1 ${getLinkStyle("/products/unisex")}`}
          >
            Unisex
          </Link>
        </div>

        {/* Authentication Links */}
        <div className="flex items-center gap-5 justify-between">
          {/* User Icon */}
          <div className="cursor-pointer" onClick={handleUserClick}>
            <FaUser className="text-lg" />
          </div>
          {/* Cart Icon */}
          <div onClick={() => navigate("/cart")} className="cursor-pointer">
            <FaShoppingCart className="text-lg" />
            {totalItems > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {totalItems}
              </span>
            )}
          </div>
          {/* Auth Modal */}
          <AuthModal
            open={authModalOpen}
            handleClose={() => setAuthModalOpen(false)}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
