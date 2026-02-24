import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/cart/cartSlice";
import wishlistSliceReducer from "../features/wishlist/wishlistSlice";

export default configureStore({
  reducer: {
    cart: cartSliceReducer,
    wishlist: wishlistSliceReducer,
  },
});
