import React from "react";
import FilterBar from "../filters/Filterbar";
import Footer from "../common/Footer";
import ProductCard from "../products/ProductCard";
import Navbar from "../common/Navbar";

const products = [
  {
    id: 1,
    label: "NEW STYLE",
    name: "Horizon Tweed Shacket",
    price: "$164",
    image:
      "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
    discount: "GET 20% OFF",
  },
  {
    id: 2,
    label: "PRE-ORDER",
    name: "Alpha Vest",
    price: "$164",
    image:
      "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
    discount: null,
  },
  {
    id: 3,
    label: "NEW STYLE",
    name: "Mogul Jacket",
    price: "$174",
    image:
      "https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271",
    discount: null,
  },

  // More products...
];

function KidsCategory() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row h-full">
        {/* Filter Sidebar */}
        <div className="md:w-[18%] md:h-screen">
          <FilterBar />
        </div>

        {/* Products Grid */}
        <div className="md:w-[82%] md:p-4 px-2">
          <h1 className="text-3xl font-bold mb-6">Shop For Kids</h1>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default KidsCategory;
