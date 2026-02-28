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

      const maxQty = action.payload.minimumOrderQuantity;
      const newQty = Math.min(action.payload.quantity, maxQty);

      if (existingItem) {
        existingItem.quantity = newQty;
      } else {
        state.value.push({
          ...action.payload,
          quantity: newQty,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { removeFromCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
