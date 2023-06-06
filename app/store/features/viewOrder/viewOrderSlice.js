import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayOrder: [],
};

const viewOrderSlice = createSlice({
  name: "viewOrderSlice",
  initialState,
  reducers: {
    ascending: (state, action) => {
      state.displayOrder = action.payload;
    },
    descending: (state, action) => {
      state.displayOrder = action.payload;
    },
  },
});

export const { ascending, descending } = viewOrderSlice.actions;

export default viewOrderSlice.reducer;
