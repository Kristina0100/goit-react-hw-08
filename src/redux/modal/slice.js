import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modal: {
    isOpen: false,
    contact: null,
	},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: INITIAL_STATE,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.contact = action.payload; 
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.contact = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
