import React from "react";
import Tagline from "./Tagline";
import HomepageContrast from "./HomepageContrast";
import HomePhotoAnimationPage from "./HomePhotoAnimationPage";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products/all-products");
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="mt-20 mx-5 lg:mx-10 flex flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <div className="imagediv lg:w-1/2 h-[60vw] lg:h-[80vh] w-full">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1533588530325-cce4fceae897?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left">
          <p className="text-4xl md:text-6xl lg:text-8xl font-serif font-semibold italic text-[#583B1F]">
            Tees for <br /> Every Body
          </p>
          <button
            onClick={handleShopNow}
            className="mt-10 text-lg md:text-2xl border-[#C1BFCB] border-2 hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase tracking-widest py-4 px-10 lg:py-5 lg:px-16 font-semibold rounded-full"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Tagline Section */}
      <div className="my-16">
        <Tagline />
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-5 mx-5 lg:mx-10">
        {/* First Feature */}
        <div className="w-full md:w-[30%]">
          <div className="w-full h-64 md:h-[30vw]">
            <img
              src="https://images.unsplash.com/photo-1618453292610-4119319e5ac7?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tailored for Every Moment"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mt-6 text-[#583B1F] font-serif text-center">
            Tailored for Every Moment
          </h2>
        </div>

        {/* Second Feature */}
        <div className="w-full md:w-[30%]">
          <div className="w-full h-80 md:h-[45vw]">
            <img
              src="https://images.unsplash.com/photo-1598970435748-1f04b45d0b80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt="Crafted for Perfection"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mt-6 text-[#583B1F] font-serif text-center">
            Crafted for Perfection
          </h2>
        </div>

        {/* Third Feature */}
        <div className="w-full md:w-[30%]">
          <div className="w-full h-64 md:h-[30vw]">
            <img
              src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
              alt="Elevate Your Wardrobe Game"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mt-6 text-[#583B1F] font-serif text-center">
            Elevate Your Wardrobe Game
          </h2>
        </div>
      </div>

      {/* Explore Button Section */}
      <div className="relative mt-20 mb-10 text-center">
        <button
          onClick={handleShopNow}
          className="border-[#C1BFCB] border-2 hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase tracking-widest py-4 px-12 text-lg md:text-xl font-semibold rounded-full"
        >
          Explore the Collection
        </button>
      </div>

      {/* Other Components */}
      <div>
        <HomepageContrast />
      </div>
      <HomePhotoAnimationPage />
    </div>
  );
};

export default HomePage;
