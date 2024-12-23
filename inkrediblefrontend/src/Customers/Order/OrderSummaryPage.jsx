import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderSummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const shippingInfo = location.state?.shippingInfo || {};
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  console.log(cartItems);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.discountedPrice * item.quantity,
    0
  );

  const deliveryFee = 5; // Flat delivery fee
  const taxRate = 0.1; // 10%
  const taxAmount = subtotal * taxRate;
  const total = (subtotal + taxAmount + deliveryFee).toFixed(2);

  return (
    <div className="container mx-auto px-6 my-6 text-[#583B1F]">
      <h1 className="text-3xl text-[#583B1F] font-light font-serif mb-8">
        Order Summary
      </h1>
      <div className="w-full">
        <div className="border border-[#C1BFCB] rounded-md p-4 mb-6 flex gap-10">
          <div>
            <p>
              <strong>Name:</strong> {shippingInfo.firstName}{" "}
              {shippingInfo.lastName}
            </p>
            <p>
              <strong>Email:</strong> {shippingInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {shippingInfo.phone}
            </p>
          </div>
          <div>
            <p>
              <strong>Address:</strong> {shippingInfo.address}{" "}
              {shippingInfo.apartment
                ? `, Apt/Building: ${shippingInfo.apartment}`
                : ""}
            </p>
            <p>
              <strong>City:</strong> {shippingInfo.city}
            </p>
            <p>
              <strong>State:</strong> {shippingInfo.state}{" "}
              {shippingInfo.postalCode}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Cart Items */}
        <div>
          <h2 className="text-xl font-medium mb-4 font-serif">Items in Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={item.product.id || index} // Use a unique key (preferably item.product.id)
                  className="border border-[#C1BFCB] rounded-md p-4 flex items-center gap-4"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-grow">
                    <p className="font-medium">{item.product.name}</p>
                    <p>Size: {item.size}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-right font-semibold">
                    ${(item.product.discountedPrice * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-[#C1BFCB] rounded-md p-4 ">
              <p className="font-medium ">No items in your cart</p>
              <p className="font-light mt-2">
                You can add items to your cart by clicking on the "Add to Cart" button
                next to each product.
              </p>
            </div>
          )}
        </div>

        {/* Right Side: Pricing Details */}
        <div>
          <h2 className="text-xl font-medium mb-4 font-serif">Pricing Details</h2>
          <div className="border border-[#C1BFCB] rounded-md p-4">
            <div className="flex justify-between mb-2">
              <p>Subtotal:</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Tax (10%):</p>
              <p>${taxAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Delivery Fee:</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <p>Total:</p>
              <p>${total}</p>
            </div>
          </div>

          {/* Confirm Order Button */}
          <div className="mt-10">
            <button
              className="block mx-auto mt-10 text-lg border-[#C1BFCB] border-2 hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase tracking-widest py-4 px-10 font-semibold rounded-full"
              onClick={() => navigate("/payment")}
              >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
