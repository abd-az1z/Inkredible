import React, { useState } from "react";

const CheckoutPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  // State for form fields
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  // Validation Errors
  const [errors, setErrors] = useState({});

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Email is required";
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!postalCode) newErrors.postalCode = "Postal code is required";

    if (paymentMethod === "creditCard") {
      if (!cardNumber) newErrors.cardNumber = "Card number is required";
      if (!nameOnCard) newErrors.nameOnCard = "Name on card is required";
      if (!expirationDate) newErrors.expirationDate = "Expiration date is required";
      if (!cvc) newErrors.cvc = "CVC is required";
    }

    setErrors(newErrors);

    // If no errors, return true
    return Object.keys(newErrors).length === 0;
  };

  // Submit order to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Form validation failed!");
      return;
    }

    const orderDetails = {
      email,
      firstName,
      lastName,
      address,
      city,
      postalCode,
      deliveryMethod,
      paymentMethod,
      items: [
        // Example cart items (replace with actual items from your cart state)
        { name: "Basic Tee", price: 32, color: "Black", size: "Large" },
        { name: "Basic Tee", price: 32, color: "Sienna", size: "Large" },
      ],
      total: deliveryMethod === "standard" ? (64 + 5 + 5.52).toFixed(2) : (64 + 16 + 5.52).toFixed(2),
    };

    try {
      const response = await fetch("http://localhost:5001/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Order submitted:", result);
        alert("Order successfully placed!");
      } else {
        console.error("Failed to submit order:", response.statusText);
        alert("Failed to place order, please try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className="w-full container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact and Shipping Information */}
          <div className="w-full overflow-y-scroll ">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mb-4 p-2 border rounded-md ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`w-full mb-4 p-2 border rounded-md ${errors.firstName ? "border-red-500" : ""}`}
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`w-full mb-4 p-2 border rounded-md ${errors.lastName ? "border-red-500" : ""}`}
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>

            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-full mb-4 p-2 border rounded-md ${errors.address ? "border-red-500" : ""}`}
            />
            {errors.address && <p className="text-red-500">{errors.address}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={`w-full mb-4 p-2 border rounded-md ${errors.city ? "border-red-500" : ""}`}
              />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
              <input
                type="text"
                placeholder="Postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className={`w-full mb-4 p-2 border rounded-md ${errors.postalCode ? "border-red-500" : ""}`}
              />
              {errors.postalCode && <p className="text-red-500">{errors.postalCode}</p>}
            </div>

            {/* Delivery Method */}
            <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <label className="border p-4 rounded-md flex items-center justify-between">
                <input
                  type="radio"
                  name="delivery"
                  value="standard"
                  checked={deliveryMethod === "standard"}
                  onChange={handleDeliveryChange}
                  className="mr-2"
                />
                Standard (4-10 business days) — $5.00
              </label>
              <label className="border p-4 rounded-md flex items-center justify-between">
                <input
                  type="radio"
                  name="delivery"
                  value="express"
                  checked={deliveryMethod === "express"}
                  onChange={handleDeliveryChange}
                  className="mr-2"
                />
                Express (2-5 business days) — $16.00
              </label>
            </div>

            {/* Payment Method */}
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <div className="mb-6">
              <label className="mr-4">
                <input
                  type="radio"
                  name="payment"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Credit card
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                PayPal
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="payment"
                  value="etransfer"
                  checked={paymentMethod === "etransfer"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                eTransfer
              </label>
            </div>

            {/* Payment Fields */}
            {paymentMethod === "creditCard" && (
              <div>
                <input
                  type="text"
                  placeholder="Card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className={`w-full mb-4 p-2 border rounded-md ${errors.cardNumber ? "border-red-500" : ""}`}
                />
                {errors.cardNumber && <p className="text-red-500">{errors.cardNumber}</p>}

                <input
                  type="text"
                  placeholder="Name on card"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  className={`w-full mb-4 p-2 border rounded-md ${errors.nameOnCard ? "border-red-500" : ""}`}
                />
                {errors.nameOnCard && <p className="text-red-500">{errors.nameOnCard}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiration date (MM/YY)"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    className={`w-full mb-4 p-2 border rounded-md ${errors.expirationDate ? "border-red-500" : ""}`}
                  />
                  {errors.expirationDate && <p className="text-red-500">{errors.expirationDate}</p>}

                  <input
                    type="text"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    className={`w-full mb-4 p-2 border rounded-md ${errors.cvc ? "border-red-500" : ""}`}
                  />
                  {errors.cvc && <p className="text-red-500">{errors.cvc}</p>}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <div className="border rounded-lg p-6">
            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p>
                $
                {deliveryMethod === "standard"
                  ? (64 + 5 + 5.52).toFixed(2)
                  : (64 + 16 + 5.52).toFixed(2)}
              </p>
            </div>

            <button
              type="submit"
              className="bg-black text-white w-full py-3 mt-4 rounded-lg hover:bg-purple-700 transition-all"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;