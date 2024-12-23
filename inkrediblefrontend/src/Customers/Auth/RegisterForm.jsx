import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    // Basic validation
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.email ||
      !userData.password
    ) {
      alert("All fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordMinLength = 8;

    if (!emailRegex.test(userData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (userData.password.length < passwordMinLength) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    try {
      const response = await axios.post("/auth/signup", userData);

      if (response?.data?.jwt) {
        localStorage.setItem("jwt", response.data.jwt);
        alert("Registration successful! Redirecting to dashboard...");
        navigate("/dashboard");
      } else {
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      console.error("Error during registration:", errorMessage);
      alert(`Registration failed: ${errorMessage}`);
    }
  };

  return (
    <div className="max-w-md text-[#583B1F]  mx-auto p-4 bg-[#E5E0DA]">
      <form onSubmit={handleSubmit}>
        {/* First Name Field */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium ">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-1 block w-full rounded border-b-[1px] border-[#583B1F] focus:outline-none focus:ring-0 sm:text-sm"
            autoComplete="given-name"
          />
        </div>

        {/* Last Name Field */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium ">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-1 block w-full rounded border-b-[1px] border-[#583B1F] focus:outline-none focus:ring-0 sm:text-sm"
            autoComplete="family-name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium ">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-1 block w-full rounded border-b-[1px] border-[#583B1F] focus:outline-none focus:ring-0 sm:text-sm"
            autoComplete="email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium ">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-1 block w-full rounded border-b-[1px] border-[#583B1F] focus:outline-none focus:ring-0 sm:text-sm"
            autoComplete="new-password"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full border-[#C1BFCB] border-[1px] hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase py-1 tracking-wide rounded-full"
          >
            Register
          </button>
        </div>
      </form>

      {/* Switch to Login Option */}
      <div className="mt-4 text-center">
        <p className="text-sm text-[#583b1f9e] ">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#583B1F] font-medium hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
