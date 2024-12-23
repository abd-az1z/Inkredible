import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProductsByCategory } from "../../../Redux/Customer/Product/Category/CategoryAction";
import ProductCard from "../ProductCard/ProductCard";

const CategoryProductsPage = ({ categoryName }) => {
  const dispatch = useDispatch();

  const { categories, productsByCategory, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories()); // Fetch all categories
  }, [dispatch]);

  useEffect(() => {
    if (categories && categories.length > 0 && categoryName) {
      // Ensure categories and categoryName are valid
      const normalizedCategoryName = categoryName
        .toLowerCase()
        .replace(/'/g, "") // Remove apostrophes
        .replace(/\s/g, "-"); // Replace spaces with dashes

      const category = categories.find(
        (cat) =>
          cat &&
          cat.name &&
          cat.name
            .toLowerCase()
            .replace(/'/g, "")
            .replace(/\s/g, "-") === normalizedCategoryName
      );

      console.log("Available Categories:", categories);
      console.log("Category Name from URL:", categoryName);
      console.log("Normalized Category Name:", normalizedCategoryName);
      console.log("Matched Category:", category);

      if (category) {
        dispatch(fetchProductsByCategory(category._id)); // Fetch products by ObjectId
      }
    }
  }, [categories, categoryName, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{categoryName} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsByCategory && productsByCategory.length > 0 ? (
          productsByCategory.map((product) => (
            <ProductCard
              key={product._id}
              title={product.title}
              price={product.price}
              discountedPrice={product.discountedPrice}
              imageUrl={product.imageUrl}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProductsPage;