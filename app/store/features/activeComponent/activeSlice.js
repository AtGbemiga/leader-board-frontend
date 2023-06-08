import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeComponent: "Component1",
};

const displayRankSlice = createSlice({
  name: "displayRankSlice",
  initialState,
  reducers: {
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    },
  },
});

export const { setActiveComponent } = displayRankSlice.actions;

export default displayRankSlice.reducer;
