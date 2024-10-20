import React, { useState } from "react";

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Mobile View */}
        <div className="md:hidden">
          <div className="border-t py-4">
            <button
              className="w-full flex justify-between text-left text-med font-semibold"
              onClick={() => toggleSection("account")}
            >
              Account
              <span>{activeSection === "account" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeSection === "account" ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="mt-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Log in
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Redeem a Gift Card
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t py-4">
            <button
              className="w-full flex justify-between text-left text-med font-semibold"
              onClick={() => toggleSection("company")}
            >
              Company
              <span>{activeSection === "company" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeSection === "company" ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="mt-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Environmental Initiatives
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t py-4">
            <button
              className="w-full flex justify-between text-left text-med font-semibold"
              onClick={() => toggleSection("getHelp")}
            >
              Get Help
              <span>{activeSection === "getHelp" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeSection === "getHelp" ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="mt-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t py-4">
            <button
              className="w-full flex justify-between text-left text-med font-semibold"
              onClick={() => toggleSection("connect")}
            >
              Connect
              <span>{activeSection === "connect" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeSection === "connect" ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="mt-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-black">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">Account</h3>
            <ul className="text-sm text-gray-500">
              <li>
                <a href="/" className=" hover:text-black">
                  Log in
                </a>
              </li>
              <li>
                <a href="/" className=" hover:text-black">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/" className=" hover:text-black">
                  Redeem a Gift Card
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="text-sm text-gray-500">
              <li>
                <a href="/" className=" hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="/" className=" hover:text-black">
                  Environmental Initiatives
                </a>
              </li>
              <li>
                <a href="/" className=" hover:text-black">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Get Help</h3>
            <ul className="text-sm text-gray-500">
              <li>
                <a href="/" className=" hover:text-black">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/" className=" hover:text-black">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="/" className=" hover:text-black">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Email Signup */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold mb-4">
            Sign up to receive 15% off your first order
          </h3>
          <form className="flex justify-center items-center">
            <input
              type="email"
              className="w-64 p-2 border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Email Address"
              required
            />
            <button
              type="submit"
              className="p-2 bg-black text-white rounded-r-md hover:bg-gray-800 transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            <a href="/" className="hover:text-black">
              Privacy Policy
            </a>{" "}
            |
            <a href="/" className="hover:text-black">
              {" "}
              Terms of Service
            </a>{" "}
            |
            <a href="/" className="hover:text-black">
              {" "}
              Do Not Sell My Personal Information
            </a>
          </p>
          <p className="mt-2">© 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;