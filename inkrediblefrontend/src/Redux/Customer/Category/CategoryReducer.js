import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
  FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
  FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
} from "./ActionTypes";

const initialState = {
  categories: [],
  productsByCategory: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
    case FETCH_PRODUCTS_BY_CATEGORY_REQUEST:
      return { ...state, loading: true, error: null };
      
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
      
    case FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
      return { ...state, loading: false, productsByCategory: action.payload };
      
    case FETCH_CATEGORIES_FAILURE:
    case FETCH_PRODUCTS_BY_CATEGORY_FAILURE:
      return { ...state, loading: false, error: action.payload };
      
    default:
      return state;
  }
};

export default categoryReducer;