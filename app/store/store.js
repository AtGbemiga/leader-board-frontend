import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./features/score/scoreSlice";
import modalReducer from "../store/features/modal/modalSlice";
import viewOrderReducer from "./features/viewOrder/viewOrderSlice";
import displayRankReducer from "./features/activeComponent/activeSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    modal: modalReducer,
    viewOrder: viewOrderReducer,
    displayRank: displayRankReducer,
  },
});
