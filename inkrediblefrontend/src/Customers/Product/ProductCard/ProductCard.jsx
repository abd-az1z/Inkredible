import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ _id, title, price, imageUrl }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <Link
      to={`/products/${_id}`} // Use _id directly
      aria-label={`View details of ${title}`}
    >
      <div className="relative md:w-[23rem] md:h-[30rem] w-58 h-72 cursor-pointer">
        {/* Product Image */}
        <div className="w-full rounded-2xl h-[85%]">
          <img
            src={imageUrl || "/images/default.jpg"}
            alt={title || "Product Image"}
            className="w-full hover:scale-105 rounded-2xl h-full object-cover"
          />
        </div>
        {/* Product Info */}
        <div className="mt-1 md:mt-2">
          <h3 className="text-sm md:text-xl text-[#583B1F] font-medium font-serif truncate leading-none">
            {title}
          </h3>
          <p className="text-xs text-[#583B1F] font-light md:text-sm">
            {formattedPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;