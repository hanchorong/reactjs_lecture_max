import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsVisible: false,
  },
  reducers: {
    toggle(state) {
      state.modalIsVisible = !state.modalIsVisible;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
