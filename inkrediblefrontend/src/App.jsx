import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import MenCategory from "./components/pages/MenCategory";
import WomenCategory from "./components/pages/WomenCategory";
import KidsCategory from "./components/pages/KidsCategory";
import SaleCategory from "./components/pages/SaleCategory";
import UnisexCategory from "./components/pages/UnisexCategory";
import CartPage from "./components/pages/CartPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import ProductPage from "./components/pages/ProductPage";

const App = () => {
  return (
    <Router>
      <div className="w-full h-screen bg-white font-maison ">
        
        {/* Define all routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Homepage */}
          <Route path="/men" element={<MenCategory />} /> {/* Men's T-shirts */}
          <Route path="/women" element={<WomenCategory />} /> {/* Women's T-shirts */}
          <Route path="/kids" element={<KidsCategory />} /> {/* Kids' T-shirts */}
          <Route path="/sale" element={<SaleCategory />} /> {/* Sale T-shirts */}
          <Route path="/unisex" element={<UnisexCategory />} /> {/* Unisex T-shirts */}
          <Route path="/cart" element={<CartPage />} /> {/* Cart page */}
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Checkout page */}
          <Route path="/product/:productId" element={<ProductPage />} /> {/* Dynamic product page */}
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;