import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsVisible: false,
    notification: null,
  },
  reducers: {
    modalToggle(state) {
      state.modalIsVisible = !state.modalIsVisible;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
