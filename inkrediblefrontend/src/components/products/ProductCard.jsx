import React from "react";

const ProductCard = ({ label, name, price, image, discount }) => {
  return (
    <div className=" bg-white px-2 md:w-96 md:h-[28rem] w-58 h-64 ">
      <div className="relative md:w-full w-44 h-[83%]">
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
      <div className="mt-1 md:mt-2 ">
        <h3 className="text-med md:text-xl font-semibold md:font-extrabold text-nowrap leading-none ">{name}</h3>
        <p className="text-sm md:text-lg ">{price}</p>

        {/* Discount */}
        {/* {discount && (
          <p className="text-red-500 font-bold mt-2">{discount}</p>
        )} */}
      </div>
    </div>
  );
};

export default ProductCard;