import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isOpenPost: false,
  isOpenDelete: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    postOpenModal: (state) => {
      state.isOpenPost = true;
    },
    postCloseModal: (state) => {
      state.isOpenPost = false;
    },
    deleteOpenModal: (state) => {
      state.isOpenDelete = true;
    },
    deleteCloseModal: (state) => {
      state.isOpenDelete = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  postOpenModal,
  postCloseModal,
  deleteOpenModal,
  deleteCloseModal,
} = modalSlice.actions;

export default modalSlice.reducer;
