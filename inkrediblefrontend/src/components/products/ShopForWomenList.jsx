import React from "react";
import ProductCard from "./ProductCard";

const ShopForWomenList = () => {
  const products = [
    {
      id: 1,
      label: "NEW STYLE",
      name: "Horizon Tweed Shacket",
      price: "$164",
      image:
        "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271", // Replace with your image URL
      discount: "GET 20% OFF",
    },

    {
      id: 2,
      label: "PRE-ORDER",
      name: "Alpha Vest",
      price: "$164",
      image:
        "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271", // Replace with your image URL
      discount: null,
    },
    {
      id: 3,
      label: "NEW STYLE",
      name: "Mogul Jacket",
      price: "$174",
      image:
        "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271", // Replace with your image URL
      discount: null,
    },
    {
      id: 4,
      label: "NEW STYLE",
      name: "Horizon Tweed Shacket",
      price: "$164",
      image:
        "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271", // Replace with your image URL
      discount: "GET 20% OFF",
    },
    {
      id: 5,
      label: "NEW STYLE",
      name: "Horizon Tweed Shacket",
      price: "$164",
      image:
        "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271", // Replace with your image URL
      discount: "GET 20% OFF",
    },
    // Add more products as needed
  ];

  return (
    <div className="w-full p-4 md:px-6 ">
      <h1 className="text-3xl font-bold mb-6">Shop For Women</h1>

      {/* Product Grid with Horizontal Scrolling */}
      <div className="flex overflow-x-auto pb-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ShopForWomenList;