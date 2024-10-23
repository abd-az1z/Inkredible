import React from "react";
import { useProductContext } from "../../context/ProductContext";

const ShopForMenList = () => {
  const { products, loading } = useProductContext();

  if (loading) {
    return <div>Loading products...</div>;
  }

  const filteredProducts = products.filter((product) => product.category === "Men");

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopForMenList;