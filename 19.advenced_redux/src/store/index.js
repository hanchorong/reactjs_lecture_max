import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modal-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
