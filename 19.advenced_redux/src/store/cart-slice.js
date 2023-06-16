import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemCart(state, action) {},
    removeItemCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
