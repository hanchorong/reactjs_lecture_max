import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalVisible: false,
  },
  reducers: {
    toggle(state) {
      state.modalVisible = !state.modalVisible;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
