import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./features/score/scoreSlice";
import modalReducer from "../store/features/modal/modalSlice";
import viewOrderReducer from "./features/viewOrder/viewOrderSlice";
import toggleReducer from "./features/filter/toggleFilterSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    modal: modalReducer,
    viewOrder: viewOrderReducer,
    toggle: toggleReducer,
  },
});
