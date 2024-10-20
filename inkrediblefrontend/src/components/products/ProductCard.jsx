import React from "react";

const ProductCard = ({ label, name, price, image, discount }) => {
  return (
    <div className="p-2 bg-white ml-2 md:w-72 md:h-80 w-52 h-64 shadow-md border-[1px] ">
      <div className="relative md:w-64 w-48 h-[80%]">
        {/* Product Label */}
        {/* {label && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            {label}
          </span>
        )} */}

        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className=" mt-1 md:mt-2 ">
        <h3 className="text-med md:text-xl font-semibold text-nowrap ">{name}</h3>
        <p className="text-sm md:text-med ">{price}</p>

        {/* Discount */}
        {/* {discount && (
          <p className="text-red-500 font-bold mt-2">{discount}</p>
        )} */}
      </div>
    </div>
  );
};

export default ProductCard;