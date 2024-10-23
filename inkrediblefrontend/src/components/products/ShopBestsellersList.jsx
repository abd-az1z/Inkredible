// import React from "react";
// import ProductCard from "./ProductCard";
// import { useProductContext } from "../../context/ProductContext"; // Import the global context

// const ShopBestsellersList = () => {
//   // Get products from the global context
//   const { products } = useProductContext();

//   return (
//     <div className="w-full p-4 md:px-6 ">
//       <h1 className="text-3xl font-bold mb-6">Shop Bestsellers</h1>

//       {/* Product Grid with Horizontal Scrolling */}
//       <div className="flex overflow-x-auto pb-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopBestsellersList;