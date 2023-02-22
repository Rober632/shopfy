import { createSlice } from "@reduxjs/toolkit";
import {current } from '@reduxjs/toolkit'
const productSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
    },
    reducers: {
      addProducts: (state, action) => {
        state.products.push({ ...action.payload});
    },
      sort: (state) => {
      console.log(current(state.products))
      state.products = state.products.sort((a,b) => a.price.toString().localeCompare(b.price, undefined, {numeric: true}))
    }
}

  });


  export const productReducer = productSlice.reducer;
export const {
    addProducts, sort
} = productSlice.actions;
  