import React from "react";
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/common/Navbar";
import ProductPage from "./components/pages/ProductPage";
import ProductList from "./components/products/ProductList";
import ProductCard from "./components/products/ProductCard";
import Reviews from "./components/common/Reviews";
import Tagline from "./components/common/Tagline";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar/>
      <div className="border-b-[1px]"></div>
      <HomePage/>
      <Tagline/>
      <ProductList/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default App;
