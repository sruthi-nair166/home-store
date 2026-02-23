import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    addToCart: (state, action) => {
      const existingItem = state.value.find(
        (item) => item.id === action.payload.id,
      );

      const minQty = action.payload.minimumOrderQuantity;

      if (existingItem) {
        if (existingItem.quantity >= minQty) {
          return;
        }
        existingItem.quantity = Math.min(
          existingItem.quantity + action.payload.quantity,
          minQty,
        );
      } else {
        state.value.push({
          ...action.payload,
          quantity: Math.min(action.payload.quantity, minQty),
        });
      }
    },
  },
});

export const { increment, removeFromCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
