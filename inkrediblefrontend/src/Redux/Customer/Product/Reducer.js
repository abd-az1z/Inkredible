import { findProductById } from "./Action";
import {
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
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
} from "./ActionTypes";

const initialState = {
  products: [], // List of products (if needed)
  product: null, // Individual product details
  loading: false, // Loading state for asynchronous operations
  error: null, // Error messages
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCTS_BY_CATEGORY_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
    case CREATE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };

    case FIND_PRODUCT_BY_ID_SUCCESS:
      return { ...state, product: action.payload, loading: false };
    case FIND_PRODUCTS_BY_CATEGORY_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((p) =>
          p._id === action.payload._id ? action.payload : p
        ),
        loading: false,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((p) => p._id !== action.payload),
        loading: false,
      };

    case FIND_PRODUCTS_BY_CATEGORY_FAILURE:
    case FIND_PRODUCT_BY_ID_FAILURE:
    case CREATE_PRODUCT_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
    case DELETE_PRODUCT_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default productReducer;
