import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../../../Redux/Customer/Category/CategoryAction";
import ProductCard from "../ProductCard/ProductCard";
import NoProductFound from "../NoProductFound";

const KidsProductsPage = () => {
  const dispatch = useDispatch();

  const { productsByCategory, loading, error } = useSelector(
    (state) => state.categories
  );

  const KIDS_CATEGORY_ID = "6746abe8c05439371ae4e5c5"; // Hardcoded ObjectId for Kids' category

  useEffect(() => {
    dispatch(fetchProductsByCategory(KIDS_CATEGORY_ID));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="px-10 container mx-auto">
        <h1 className="text-3xl text-[#583B1F] font-light font-serif pt-8 border-t border-[#583B1F]">
          Kids Shop
        </h1>
        <div className="container mx-auto w-full my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {productsByCategory && productsByCategory.length > 0 ? (
            productsByCategory.map((product) => (
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

export default KidsProductsPage;