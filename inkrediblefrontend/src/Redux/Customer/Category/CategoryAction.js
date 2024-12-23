import axios from "axios";
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
  FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
  FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
} from "./ActionTypes";


export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });
  try {
    const { data } = await axios.get("http://localhost:5454/api/categories");
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Fetch products by category
export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_BY_CATEGORY_REQUEST });
  try {
    // console.log("Fetching products for category ID:", categoryId);

    const { data } = await axios.get(
      `http://localhost:5454/api/products?category=${categoryId}`
    );
    // console.log("Fetched Products:", data);

    dispatch({ type: FETCH_PRODUCTS_BY_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    dispatch({
      type: FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
      payload: error.response?.data?.message || "Error fetching products",
    });
  }
};