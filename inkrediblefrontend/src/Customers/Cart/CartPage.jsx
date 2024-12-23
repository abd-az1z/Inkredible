import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  removeCartItem,
  updateCartItem,
} from "../../Redux/Customer/Cart/Action";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, subtotal, loading } = useSelector((state) => state.cart);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getCart(jwt));
    } else {
      console.error("No JWT token found. User is not authenticated.");
    }
  }, [dispatch, jwt]);

  const handleRemoveItem = (cartItemId) => {
    if (jwt) {
      dispatch(removeCartItem(cartItemId));
    }
  };

  const handleUpdateQuantity = (cartItemId, newQuantity) => {
    if (jwt) {
      dispatch(updateCartItem({ cartItemId, quantity: newQuantity }));
    }
  };

  if (loading) return <p>Loading cart...</p>;
  if (!cartItems || cartItems.length === 0) return <p>Your cart is empty!</p>;

  return (
    <div className="container mx-auto px-6 my-10 text-[#583B1F]">
      <h1 className="text-4xl font-semibold font-serif mb-6 tracking-tight">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between border-b py-6"
        >
          <div className="flex items-center gap-6">
            <img
              src={item.product.imageUrl}
              alt={item.product.title}
              className="w-28 h-28 object-cover rounded"
            />
            <div>
              <h2 className="text-xl font-medium">{item.product.title}</h2>
              <p className="text-gray-500 mt-1">Size: {item.size}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                item.quantity > 1 &&
                handleUpdateQuantity(item._id, item.quantity - 1)
              }
              className="border rounded px-2 py-1 hover:bg-gray-200"
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="text-lg">{item.quantity}</span>
            <button
              onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
              className="border rounded px-2 py-1 hover:bg-gray-200"
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-lg font-medium">
              $
              {(item.quantity * (item.product.discountedPrice || 0)).toFixed(2)}
            </p>
            <button
              onClick={() => handleRemoveItem(item._id)}
              className="text-gray-400 hover:text-red-500 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-10">
        <h3 className="text-2xl font-medium">Subtotal</h3>
        <p className="text-2xl font-medium">${subtotal.toFixed(2)}</p>
      </div>

      <button
        onClick={handleCheckout}
        className="block mx-auto mt-10 text-lg  border-[#C1BFCB] border-2 hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase tracking-widest py-4 px-10 font-semibold rounded-full"
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default CartPage;