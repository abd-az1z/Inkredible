import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#E5E0DA] pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="">
          <div className="w-72 h-72 mb-4 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1716541425103-fcfd4bf88c27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
              alt="T-Shirt Brand"
              className="w-full h-full object-cover "
            />
          </div>

          <p className="text-[#583B1F] font-light text-medium  ">
            Follow us on{" "}
            <a
              href="#"
              className="text-[#583B1F] border-b-[#583b1f] border   hover:text-[#583B1F] transition"
            >
              Instagram
            </a>
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col  items-start">
          <p className="text-2xl font-extralight text-[#583B1F] mb-4 text-start">
            Sign up to receive updates and 10% off your first purchase.
          </p>
          <form className="flex flex-col mt-3 items-start w-full md:w-3/4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-6 px-8  text-[#583B1F] focus:outline-none focus:ring-2 focus:ring-[#C1BFCB]"
            />
          </form>
        </div>

        {/* Right Section */}
        <div className="flex flex-col pl-20 items-center md:items-start">
          <ul className="text-[#583B1F] text-lg font-light space-y-5">
            <li>
              <Link to="/shop" className="border-b border-[#583b1f] ">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className=" border-b border-[#583b1f] ">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className=" border-b border-[#583b1f] ">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-and-returns"
                className=" border-b border-[#583b1f] "
              >
                Shipping and Returns
              </Link>
            </li>
            <li>
              <Link to="/login" className=" border-b border-[#583b1f] ">
                Login
              </Link>
            </li>
            <li>
              <a className="border-b border-[#583b1f]" href=" ">
                Made by A A{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
