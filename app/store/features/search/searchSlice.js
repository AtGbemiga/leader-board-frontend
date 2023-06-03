import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    processSearch: (state, action) => {
      state.results = action.payload;
    },
  },
});
