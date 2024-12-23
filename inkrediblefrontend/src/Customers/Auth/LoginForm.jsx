import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const loginData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (!loginData.email || !loginData.password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);
      const response = await api.post("/auth/signin", loginData);
      setLoading(false);

      if (response?.data?.token) {
        localStorage.setItem("jwt", response.data.token); // Save the token
        setSuccessMessage(true);

        // Redirect to the homepage after 2 seconds
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        alert("Unexpected server response.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error.message);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="max-w-md text-[#583B1F] mx-auto p-4 bg-[#E5E0DA]">
      {successMessage ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">You are logged in now!</h2>
          <p className="text-sm mt-2">Redirecting to the homepage...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#583B1F]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-1 block w-full rounded border-b-[1px] border-[#583B1F] focus:outline-none focus:ring-0 sm:text-sm"
              autoComplete="current-password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full border-[#C1BFCB] border-[1px] hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase py-1 tracking-wide rounded-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      )}

      {/* Switch to Register Option */}
      {!successMessage && (
        <div className="mt-4 text-center">
          <p className="text-sm text-[#583b1f9e]">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-[#583B1F] font-medium hover:underline"
            >
              Register here
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;