// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useProductContext } from "../../context/ProductContext";

// function AllProducts() {
//   const { products, loading, fetchByCategory } = useProductContext();
//   const filters = useSelector((state) => state.filter);

//   useEffect(() => {
//     fetchByCategory(null); // Fetch all products on component load
//   }, [fetchByCategory]);

//   // Apply additional filters
//   const filteredProducts = products.filter((product) => {
//     if (
//       filters.sizes.length > 0 &&
//       !filters.sizes.some((size) => product.sizes.includes(size))
//     )
//       return false;

//     const [minPrice, maxPrice] = filters.priceRange;
//     if (
//       product.price < minPrice ||
//       (maxPrice !== Infinity && product.price > maxPrice)
//     )
//       return false;

//     if (filters.ratings && product.rating < Number(filters.ratings))
//       return false;

//     if (filters.sleeveLength && product.sleeveLength !== filters.sleeveLength)
//       return false;

//     return true;
//   });

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="w-full min-h-screen">
//       <Navbar />
//       <div className="flex flex-col md:flex-row h-full">
//         {/* Filter Sidebar */}
//         <div className="md:w-[15%] md:h-screen">
//           <FilterBar />
//         </div>

//         {/* Products Grid */}
//         <div className="md:w-[85%] w-full md:m-4 overflow-hidden">
//           <h1 className="text-3xl px-2 font-bold mb-6">Shop For Everyone</h1>

//           {/* Conditional rendering for products or "No products available" message */}
//           {filteredProducts.length > 0 ? (
//             <div className="w-full md:mx-2 flex flex-wrap gap-5">
//               {filteredProducts.map((product) => (
//                 <ProductCard
//                   key={product._id || product.id}
//                   name={product.name}
//                   price={product.price}
//                   image={`http://localhost:5001${product.image}`} // Adjust the URL path if needed
//                   discount={product.discount}
//                   {...product}
//                 />
//               ))}
//             </div>
//           ) : (
//             <NoProductFound />
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default AllProducts;