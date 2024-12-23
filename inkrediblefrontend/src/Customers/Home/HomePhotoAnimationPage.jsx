import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePhotoAnimationPage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products/all-products");
  };
  const items = [
    {
      img: "https://img.kwcdn.com/product/fancy/ac68e2be-2e21-48d5-8f6c-c366b1283ec8.jpg?imageView2/2/w/800/q/70/format/webp",
      title: "Trendy Oversized Tees",
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/y/e/r/m-men-rib-zip-round-neck-pp-white-madfrog-original-imah6xg2hf2kfafp.jpeg?q=70",
      title: "Casual Everyday Wear",
    },
    {
      img: "https://img.kwcdn.com/product/open/2024-10-15/1728981760560-e9b25c5c86cc4a3e87d932c7c3ca4d60-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
      title: "Bold Graphic Tees Collection",
    },
    {
      img: "https://img.kwcdn.com/product/open/2024-08-08/1723106372366-2147567ba5f64a6e94e39dfeda6e0891-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
      title: "Minimalist T-Shirt Designs",
    },
    {
      img: "https://img.kwcdn.com/product/open/2024-07-30/1722333949964-e153f8ffa6b94bd49a2f06204bd233ab-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
      title: "Artistic Prints Collection",
    },
    {
      img: "https://img.kwcdn.com/product/open/8cde951e10234195927184a818fc1bdd-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
      title: "Sportswear-Inspired Tees",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through items every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(items.length / 2) // Move two items at a time
      );
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  return (
    <div className="pt-10 p-4 md:p-10">
      <div className="lg:flex flex-col md:flex-row text-[#583B1F] gap-8 md:gap-10">
        {/* Text Section */}
        <div className="lg:w-1/2 mt-4 md:mt-10">
          <p className="text-2xl md:text-center md:leading-normal md:text-4xl font-light leading-snug">
            It all begins with an idea. Maybe you want to embrace your style.
            Maybe you want to express your personality with premium T-shirts.
          </p>
          <button onClick={handleShopNow} className="lg:mt-6 mt-10 md:text-2xl lg:text-base px-6 md:px-10 py-2 md:py-4 md:font-bold lg:font-semibold border-[#C1BFCB] border-2 hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] rounded-full">
            ALL PRODUCTS
          </button>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden w-full md:mt-20 lg:w-1/2">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: Math.ceil(items.length / 2) }, (_, i) => (
              <div
                key={i}
                className="w-full flex justify-center items-center gap-3"
                style={{ flex: "0 0 100%" }}
              >
                {/* Render two items per slide */}
                {items.slice(i * 2, i * 2 + 2).map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={item.img}
                      alt={`T-Shirt Design ${index + 1}`}
                      className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-md"
                    />
                    <p className="mt-2 md:mt-4 text-sm md:text-lg font-light">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b my-10 md:my-20 border-[#583b1f]" />
    </div>
  );
};

export default HomePhotoAnimationPage;