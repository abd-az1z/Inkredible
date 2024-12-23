import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../Redux/Customer/Product/Action";
import ProductCard from "../ProductCard/ProductCard";
import NoProductFound from "../NoProductFound";

const AllProductsPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    const filters = { category: categoryId || "all" };
    dispatch(findProducts(filters));
  }, [categoryId, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="px-10 container mx-auto">
        <h1 className="text-3xl text-[#583B1F] font-light font-serif  pt-8 border-t border-[#583B1F] ">
          Everyone's Shop
        </h1>
        <div className="container mx-auto w-full my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))
          ) : (
            <NoProductFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
