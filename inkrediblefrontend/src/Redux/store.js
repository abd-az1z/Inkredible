import { applyMiddleware, combineReducers, legacy_createStore}  from "redux"
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import productReducer from "./Customer/Product/Reducer";
import categoryReducer from "./Customer/Category/CategoryReducer";
import cartReducer from "./Customer/Cart/Reducer";

const rootReducer=combineReducers({
  auth : authReducer,
  products : productReducer,
  categories: categoryReducer,
  cart: cartReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
