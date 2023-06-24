import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItems = action.payload;
      const exitingItems = state.items.find((item) => item.id === newItems.id);
      state.totalQuantity++;
      if (!exitingItems) {
        //겹치지 x
        state.items.push({
          id: newItems.id,
          price: newItems.price,
          totalPrice: newItems.price,
          description: newItems.description,
          quantity: 1,
          title: newItems.title,
        });
      } else {
        //겹침
        exitingItems.quantity++;
        exitingItems.totalPrice = exitingItems.totalPrice + newItems.price;
      }
    },
    removeFormCart(state, action) {
      const id = action.payload;
      const exitingItems = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (exitingItems.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exitingItems.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
