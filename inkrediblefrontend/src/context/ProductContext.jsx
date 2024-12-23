import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ProductContext = createContext();

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = category
          ? `http://localhost:5001/api/products?category=${category}`
          : "http://localhost:5001/api/products";
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const fetchByCategory = (categoryName) => {
    setCategory(categoryName);
  };

  return (
    <ProductContext.Provider value={{ products, loading, fetchByCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

// Grouped exports for better compatibility with Vite
export { ProductContext, ProductProvider, useProductContext };
