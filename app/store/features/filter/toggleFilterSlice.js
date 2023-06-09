import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggled: false,
};

const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState,
  reducers: {
    open: (state) => (state.toggled = true),
    close: (state) => (state.toggled = false),
  },
});

export const { open, close } = toggleSlice.actions;

export default toggleSlice.reducer;
