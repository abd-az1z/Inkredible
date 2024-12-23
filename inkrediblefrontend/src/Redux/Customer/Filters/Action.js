import {
    SET_CATEGORY_FILTER,
    SET_SIZE_FILTER,
    SET_PRICE_RANGE_FILTER,
    SET_DISCOUNT_FILTER,
    SET_STOCK_FILTER,
    CLEAR_ALL_FILTERS,
  } from "./ActionTypes";
  
  // Set category filter
  export const setCategoryFilter = (category) => ({
    type: SET_CATEGORY_FILTER,
    payload: category,
  });
  
  // Set size filter
  export const setSizeFilter = (size) => ({
    type: SET_SIZE_FILTER,
    payload: size,
  });
  
  // Set price range filter
  export const setPriceRangeFilter = (minPrice, maxPrice) => ({
    type: SET_PRICE_RANGE_FILTER,
    payload: { minPrice, maxPrice },
  });
  
  // Set discount filter
  export const setDiscountFilter = (minDiscount) => ({
    type: SET_DISCOUNT_FILTER,
    payload: minDiscount,
  });
  
  // Set stock filter
  export const setStockFilter = (inStock) => ({
    type: SET_STOCK_FILTER,
    payload: inStock,
  });
  
  // Clear all filters
  export const clearAllFilters = () => ({
    type: CLEAR_ALL_FILTERS,
  });