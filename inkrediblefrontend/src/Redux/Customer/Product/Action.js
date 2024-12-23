import axios from "axios";

import api, { API_BASE_URL } from "../../../config/api";
import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from "./ActionTypes";

// Fetch products by filters
export const findProducts = (filters) => async (dispatch) => {
  const {
    category = "all",
    size = "",
    minPrice = 0,
    maxPrice = 10000,
    minDiscount = 0,
    stock = "",
  } = filters;

  const queryParams = new URLSearchParams({
    category: category !== "all" ? category : "",
    size: size || "",
    minPrice,
    maxPrice,
    minDiscount: minDiscount || 0,
    stock: stock || "",
  }).toString();

  dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
  console.log("Dispatching request to backend with query:", queryParams);

  try {
    const { data } = await api.get(`/api/products?${queryParams}`);
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Fetch product by ID

export const findProductById = (productId) => async (dispatch) => {
  // console.log("Fetching product with ID:", productId); // Debugging
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

  try {
    const { data } = await api.get(`/api/products/${productId}`); // Corrected URL
    // console.log("Received product data:", data); // Debugging
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    // console.log("Fetching product with ID:", productId);
    // console.log("Request URL:", `/api/products/${productId}`);
  } catch (error) {
    console.error(
      "Error fetching product by ID:",
      error.response || error.message
    );
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};
// Create a new product
export const createProduct = (product) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    const { data } = await axios.post(`/api/admin/products`, product);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Update a product
export const updateProduct = (product) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  try {
    const { data } = await axios.put(
      `/api/admin/products/${product.id}`,
      product
    );
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Delete a product
export const deleteProduct = (productId) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    await axios.delete(`/api/admin/products/${productId}`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};
