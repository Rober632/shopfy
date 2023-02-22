import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { productReducer } from "./productlice";
import { wishlistReducer } from "./wishlistSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  wishlistReducer,
  cartReducer,
  productReducer

})
export const store = configureStore({
  reducer: rootReducer 
})