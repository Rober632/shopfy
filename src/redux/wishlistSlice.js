import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : 'wishlist',
    initialState : {
        wishlist : [], 
    },
    reducers : {
        addToWishlist : (state , action) =>{
            const inWishlist = state.wishlist.find(item => item.item.id === action.payload.item.id)
            if(!inWishlist){
                state.wishlist.push({...action.payload , exist : true})
            }
        },
        removeFromWishlist : (state, action) => {
            const removed = state.wishlist.filter(item => item.item.id !== action.payload.item.id);
            state.wishlist = removed
        }
    }
})

export const wishlistReducer = wishlistSlice.reducer;
export const { addToWishlist ,removeFromWishlist } = wishlistSlice.actions;