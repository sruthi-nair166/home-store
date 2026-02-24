import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: savedCart,
  },
  reducers: {
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.value));
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
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { removeFromCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
