import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/cart/cartSlice";
import wishlistSliceReducer from "../features/wishlist/wishlistSlice";
import compareSliceReducer from "../features/compare/compareSlice";

export default configureStore({
  reducer: {
    cart: cartSliceReducer,
    wishlist: wishlistSliceReducer,
    compare: compareSliceReducer,
  },
});
