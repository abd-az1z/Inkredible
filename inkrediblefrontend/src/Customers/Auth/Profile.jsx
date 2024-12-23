import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a valid token exists
    const token = localStorage.getItem("jwt");
    if (token) {
      // Optionally, validate the token with your server
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt"); // Clear the token
    setDropdownVisible(false); // Close dropdown
    setIsLoggedIn(false); // Update state
    navigate("/"); // Redirect to homepage
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      setDropdownVisible(!dropdownVisible); // Toggle dropdown for logged-in user
    } else {
      navigate("/login"); // Navigate to login page for logged-out user
    }
  };

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button
        onClick={handleProfileClick}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <i className="fa fa-user"></i> {/* Replace with your icon */}
      </button>

      {/* Dropdown Menu for Logged-In Users */}
      {isLoggedIn && dropdownVisible && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow">
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;