import api from "../../../config/api";
import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
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

const getAuthToken = () => {
  const token = localStorage.getItem("authToken");
  console.log("Auth Token:", token); // Debugging line
  return token;
};

export const addItemToCart = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

    const { data } = await api.put("/api/cart/add", reqData); // Token added by interceptor

    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ITEM_TO_CART_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

export const getCart = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CART_REQUEST });

    const token = getAuthToken();
    const { data } = await api.get("/api/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_CART_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

export const removeCartItem = (cartItemId) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });

    console.log("Removing Cart Item ID:", cartItemId);

    await api.delete(`/api/cart/item/${cartItemId}`); // Correct URL

    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
  } catch (error) {
    dispatch({
      type: REMOVE_CART_ITEM_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

export const updateCartItem =
  ({ cartItemId, quantity }) =>
  async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CART_ITEM_REQUEST });

      const token = localStorage.getItem("authToken");
      const { data } = await api.put(
        `/api/cart/item/${cartItemId}`,
        { quantity },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_CART_ITEM_FAILURE,
        payload: error.response?.data.message || error.message,
      });
    }
  };
