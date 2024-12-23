import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProducts, deleteProduct } from "../../Redux/Customer/Product/Action";

const ProductsTable = () => {
  const dispatch = useDispatch();

  // Access products and loading/error state from Redux
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products on component mount
    dispatch(findProducts({ category: "all" }));
  }, [dispatch]);

  // Handle delete product
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(productId));
    }
  };

  console.log("Fetched Products:", products); // Debugging output

  return (
    <div className="overflow-x-auto p-4">
      {/* Show loading spinner */}
      {loading && <div>Loading...</div>}

      {/* Show error message if any */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Render table */}
      {!loading && !error && products.length > 0 && (
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Image
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product._id || index}
                className={`${
                  index % 2 === 0 ? "bg-slate-600" : "bg-slate-700"
                } hover:bg-slate-00`}
              >
                <td className="px-6 py-4 text-sm">
                  <img
                    src={product.imageUrl || "default-image-url.jpg"}
                    alt={product.title || "No Title"}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 text-sm">{product.title || "N/A"}</td>
                <td className="px-6 py-4 text-sm">
                  {product.category?.name || "Uncategorized"}
                </td>
                <td className="px-6 py-4 text-sm">
                  ${product.price?.toFixed(2) || "0.00"}
                </td>
                <td className="px-6 py-4 text-sm">{product.quantity || "N/A"}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Show message if no products */}
      {!loading && !error && products.length === 0 && (
        <div className="text-center text-gray-500">No products found</div>
      )}
    </div>
  );
};

export default ProductsTable;