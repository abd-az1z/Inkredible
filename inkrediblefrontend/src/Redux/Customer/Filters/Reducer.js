import {
    SET_CATEGORY_FILTER,
    SET_SIZE_FILTER,
    SET_PRICE_RANGE_FILTER,
    SET_DISCOUNT_FILTER,
    SET_STOCK_FILTER,
    CLEAR_ALL_FILTERS,
  } from "./ActionTypes";
  
  const initialState = {
    category: null,
    size: null,
    priceRange: { minPrice: null, maxPrice: null },
    discount: null,
    inStock: null,
  };
  
  const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CATEGORY_FILTER:
        return { ...state, category: action.payload };
  
      case SET_SIZE_FILTER:
        return { ...state, size: action.payload };
  
      case SET_PRICE_RANGE_FILTER:
        return { ...state, priceRange: action.payload };
  
      case SET_DISCOUNT_FILTER:
        return { ...state, discount: action.payload };
  
      case SET_STOCK_FILTER:
        return { ...state, inStock: action.payload };
  
      case CLEAR_ALL_FILTERS:
        return { ...initialState };
  
      default:
        return state;
    }
  };
  
  export default filtersReducer;