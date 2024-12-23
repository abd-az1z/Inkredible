import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState(""); // Optional
  const [city, setCity] = useState("");
  const [state, setState] = useState(""); // Required
  const [postalCode, setPostalCode] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone || !/^\d{10}$/.test(phone))
      newErrors.phone = "Valid phone number is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!state) newErrors.state = "State is required";
    if (!postalCode) newErrors.postalCode = "Postal code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderSummary = () => {
    if (validateForm()) {
      const shippingInfo = {
        firstName,
        lastName,
        email,
        phone,
        address,
        apartment, // Include optional apartment field
        city,
        state, // Include required state field
        postalCode,
      };
      navigate("/order-summary", { state: { shippingInfo } });
    }
  };

  return (
    <div className="container mx-auto px-6 my-6 text-[#583B1F]">
      <h1  className="text-3xl  font-light font-serif ">Delivery Details</h1>
      {/* Contact Information */}
      <div className="my-6">
        <h2 className="text-xl font-medium mb-4 font-serif">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {errors.firstName && (
              <p className="text-red-500 text-sm mb-1">{errors.firstName}</p>
            )}
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full mb-4 p-2 border rounded-md ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
          </div>

          <div>
            {errors.lastName && (
              <p className="text-red-500 text-sm mb-1">{errors.lastName}</p>
            )}
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full mb-4 p-2 border rounded-md ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {errors.email && (
              <p className="text-red-500 text-sm mb-1">{errors.email}</p>
            )}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mb-4 p-2 border rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
            />
          </div>

          <div>
            {errors.phone && (
              <p className="text-red-500 text-sm mb-1">{errors.phone}</p>
            )}
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full mb-4 p-2 border rounded-md ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <div>
        <h2 className="text-xl font-medium mb-4 font-serif">Shipping Information</h2>
        <div>
          {errors.address && (
            <p className="text-red-500 text-sm mb-1">{errors.address}</p>
          )}
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`w-full mb-4 p-2 border rounded-md ${
              errors.address ? "border-red-500" : ""
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Apartment/Building (Optional)"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
              className="w-full mb-4 p-2 border rounded-md"
            />
          </div>

          <div>
            {errors.city && (
              <p className="text-red-500 text-sm mb-1">{errors.city}</p>
            )}
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`w-full mb-4 p-2 border rounded-md ${
                errors.city ? "border-red-500" : ""
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {errors.state && (
              <p className="text-red-500 text-sm mb-1">{errors.state}</p>
            )}
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className={`w-full mb-4 p-2 border rounded-md ${
                errors.state ? "border-red-500" : ""
              }`}
            />
          </div>

          <div>
            {errors.postalCode && (
              <p className="text-red-500 text-sm mb-1">{errors.postalCode}</p>
            )}
            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className={`w-full mb-4 p-2 border rounded-md ${
                errors.postalCode ? "border-red-500" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Order Summary Button */}
      <div className="mt-10 text-right">
        <button
          onClick={handleOrderSummary}
          className="block mx-auto mt-10 text-lg border-[#C1BFCB] border-2 hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase tracking-widest py-4 px-10 font-semibold rounded-full"
        >
          Order Summary
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;