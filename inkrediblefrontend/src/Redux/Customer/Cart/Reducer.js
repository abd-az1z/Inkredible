

import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

const initialState = {
  cartItems: [],
  subtotal: 0, // Subtotal managed in Redux
  totalPrice: 0,
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        subtotal: calculateSubtotal(action.payload.cartItems),
        totalPrice: action.payload.totalPrice,
        loading: false,
      };

    case UPDATE_CART_ITEM_SUCCESS:
      const updatedCartItems = state.cartItems.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        subtotal: calculateSubtotal(updatedCartItems), // Recalculate subtotal
      };

    default:
      return state;
  }
};

// Helper function to calculate subtotal
const calculateSubtotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) =>
      total + item.quantity * (item.product?.discountedPrice || 0),
    0
  );
};

export default cartReducer;

// import {
//   ADD_ITEM_TO_CART_FAILURE,
//   ADD_ITEM_TO_CART_REQUEST,
//   ADD_ITEM_TO_CART_SUCCESS,
//   GET_CART_FAILURE,
//   GET_CART_REQUEST,
//   GET_CART_SUCCESS,
//   REMOVE_CART_ITEM_FAILURE,
//   REMOVE_CART_ITEM_REQUEST,
//   REMOVE_CART_ITEM_SUCCESS,
//   UPDATE_CART_ITEM_FAILURE,
//   UPDATE_CART_ITEM_REQUEST,
//   UPDATE_CART_ITEM_SUCCESS,
// } from "./ActionType";

// const initialState = {
//   cart: { totalItem: 0, items: [] },
//   subtotal: 0,
//   loading: false,
//   error: null,
//   cartItems: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ITEM_TO_CART_REQUEST:
//       return { ...state, loading: true, error: null };
//     case ADD_ITEM_TO_CART_SUCCESS:
//       return {
//         ...state,
//         cartItems: action.payload.cartItems, // Update cart items from response
//         loading: false,
//       };
//     case ADD_ITEM_TO_CART_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     case GET_CART_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case GET_CART_SUCCESS:
//       return {
//         ...state,
//         cartItems: action.payload.cartItems,
//         totalItem: action.payload.totalItem,
//         subtotal: calculateSubtotal(action.payload.cartItems),
//         totalPrice: action.payload.totalPrice,
//         loading: false,
//       };
//     case GET_CART_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };
//     case REMOVE_CART_ITEM_REQUEST:
//     case UPDATE_CART_ITEM_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case REMOVE_CART_ITEM_SUCCESS:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (item) => item._id !== action.payload
//         ),
//         loading: false,
//       };
//     case UPDATE_CART_ITEM_SUCCESS:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item._id === action.payload._id ? action.payload : item
//         ),
//         loading: false,
//       };
//     case REMOVE_CART_ITEM_FAILURE:
//     case UPDATE_CART_ITEM_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//         subtotal: calculateSubtotal(updatedCartItems), // Recalculate subtotal
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };
// const calculateSubtotal = (cartItems) => {
//   return cartItems.reduce(
//     (total, item) =>
//       total + item.quantity * (item.product?.discountedPrice || 0),
//     0
//   );
// };

// export default cartReducer;