import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
  // List of reviews
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "This sweater is very comfortable and flattering. It's warm, but also not overheating. I love that it is wool, but also not at all itchy.",
      reviewer: "ostar",
      product: "The Half-Zip Sweater in Luxe Merino",
      image:
        "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
    },
    {
      id: 2,
      rating: 4,
      text: "The material is incredibly soft and high quality. Fits perfectly! I get compliments every time I wear it.",
      reviewer: "jane",
      product: "Merino Wool Turtleneck",
      image:
        "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
    },
    {
      id: 3,
      rating: 5,
      text: "Absolutely love this sweater! Great for cold weather and layering. It's a wardrobe staple for me now.",
      reviewer: "john",
      product: "Chunky Knit Sweater",
      image:
        "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
    },
  ];

  // State to keep track of the current review
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Handle next review
  const handleNext = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous review
  const handlePrevious = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const { rating, text, reviewer, product, image } =
    reviews[currentReviewIndex];

  return (
    <div className="w-full flex justify-between items-center p-4 md:px-6">
      <button
        className="text-gray-300 hover:text-black"
        onClick={handlePrevious}
      >
        <FaChevronLeft size={18} />
      </button>

      {/* Review Content */}
      <div className="flex md:text-start flex-col md:flex-row items-center justify-between w-full md:w-4/5 text-center p-4">
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">The Reviews Are In</h2>
          <div className="flex justify-center mb-2">
            {/* Dynamic Rating */}
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
          </div>
          <p className="italic text-lg mb-4">"{text}"</p>
          <p className="text-gray-600">
            ~ {reviewer},{" "}
            <a href="/" className="text-blue-500 underline hover:text-blue-700">
              {product}
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <img
            src={image}
            alt="Product"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <button className="text-gray-300 hover:text-black" onClick={handleNext}>
        <FaChevronRight size={18} />
      </button>
    </div>
  );
};

export default Reviews;
