import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
