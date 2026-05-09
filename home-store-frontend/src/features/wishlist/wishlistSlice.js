import { createSlice } from "@reduxjs/toolkit";

const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: savedWishlist,
  },
  reducers: {
    removeFromWishlist: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
    addToWishlist: (state, action) => {
      const existingItem = state.value.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        return;
      } else {
        state.value.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { removeFromWishlist, addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
