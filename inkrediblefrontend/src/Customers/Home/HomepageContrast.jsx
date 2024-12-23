import React from "react";
import { useNavigate } from "react-router-dom";

const HomepageContrast = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products/all-products");
  };
  return (
    <div className="bg-[#C1BFCB]">
      {/* Hero Section */}
      <div className="pt-10 lg:pt-20 mx-5 lg:mx-8 flex flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <div className="imagediv w-full lg:w-[60%] h-[50vw] lg:h-[80vh]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1716951910901-3f595611cf3d?q=80&w=2563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tailored for Every Moment"
          />
        </div>

        {/* Text Section */}
        <div className="imageDetail flex flex-col md:items-center lg:items-start justify-center w-full lg:w-[40%] text-center lg:text-left">
          <p className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-[#583B1F]">
            Tailored <br />
            for Every Moment
          </p>
          <p className="text-[#583B1F] mt-10 text-lg md:text-2xl lg:text-2xl lg:font-light px-2 lg:px-0">
            "Apparel That Speaks Your Story, Service That Shows We Care"
          </p>
          <button onClick={handleShopNow} className="text-[#583B1F] mt-10 text-lg md:text-3xl lg:text-2xl font-light border-b border-[#583B1F] hover:border-[#E5E0DA] hover:text-[#E5E0DA] transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 lg:py-20 text-[#583B1F]">
        <div className="px-5 lg:px-10">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif font-semibold mb-10 lg:mb-16 text-center lg:text-start">
            Timeless & Comfortable
          </h2>

          {/* Features Grid */}
          <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            {/* High Quality */}
            <div>
              <h3 className="text-2xl md:text-3xl md:font-semibold lg:font-light mb-4">
                High Quality
              </h3>
              <p className="lg:font-extralight border-b md:font-medium md:text-2xl border-[#583B1F] pb-6 md:pb-10 lg:pb-16">
                Premium fabrics and superior stitching for long-lasting comfort
                and style.
              </p>
            </div>

            {/* Trendy Designs */}
            <div>
              <h3 className="text-2xl md:text-3xl md:font-semibold lg:font-light mb-4">
                Trendy Designs
              </h3>
              <p className="lg:font-extralight border-b md:font-medium md:text-2xl border-[#583B1F] pb-6 md:pb-10 lg:pb-16">
                Stay ahead of the fashion curve with modern and unique patterns.
              </p>
            </div>

            {/* Customer-Focused */}
            <div>
              <h3 className="text-2xl md:text-3xl md:font-semibold lg:font-light mb-4">
                Customer-Focused
              </h3>
              <p className="lg:font-extralight border-b md:font-medium md:text-2xl border-[#583B1F] pb-6 md:pb-10 lg:pb-16">
                Tailored to your preferences with exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageContrast;