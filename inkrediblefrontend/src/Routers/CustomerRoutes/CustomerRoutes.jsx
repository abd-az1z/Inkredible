import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../../Customers/Home/HomePage";
import AllProductsPage from "../../Customers/Product/AllProducts/AllProductsPage";
import Navbar from "../../Customers/Navigation/Navbar";
import CheckoutPage from "../../Customers/Checkout/CheckoutPage";
import MensProductsPage from "../../Customers/Product/Men/MensProductsPage";
import WomensProductsPage from "../../Customers/Product/Women/WomensProductsPage";
import KidsProductsPage from "../../Customers/Product/Kid/KidsProductsPage";
import UnisexProductsPage from "../../Customers/Product/Unisex/UnisexProductsPage";
import ProductDetailsPage from "../../Customers/Product/ProductDetails/ProductDetails";
import Footer from "../../Customers/Footer/Footer";
import CartPage from "../../Customers/Cart/CartPage";
import OrderSummaryPage from "../../Customers/Order/OrderSummaryPage";
import LoginForm from "../../Customers/Auth/LoginForm";
import RegisterForm from "../../Customers/Auth/RegisterForm";

const CustomerRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/products/all-products" element={<AllProductsPage />} />
          <Route path="/products/men" element={<MensProductsPage />} />
          <Route path="/products/women" element={<WomensProductsPage />} />
          <Route path="/products/kid" element={<KidsProductsPage />} />
          <Route path="/products/unisex" element={<UnisexProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-summary" element={<OrderSummaryPage />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CustomerRoutes;
