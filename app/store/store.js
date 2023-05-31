import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./features/score/scoreSlice";
import modalReducer from "../store/features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    modal: modalReducer,
  },
});
