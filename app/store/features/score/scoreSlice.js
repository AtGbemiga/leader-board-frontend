import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://leader-board-backend.vercel.app/api/v1/score/";

const initialState = {
  details: [],
  isLoading: true,
};

export const getScores = createAsyncThunk("score/getScores", async () => {
  try {
    const { data } = await axios(url);
    console.log(`SERVER DATA`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
});

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    addDetails: {
      reducer(state, action) {
        state.details.push(action.payload);
      },
      prepare(name, exactScore) {
        return {
          payload: {
            name,
            exactScore,
          },
        };
      },
    },
    updateDetails(state, action) {
      const { _id, ...formData } = action.payload;
      state.details = state.details.map((item) =>
        item._id === _id ? { ...item, ...formData } : item
      );
    },
    deleteDetails: (state, action) => {
      const id = action.payload;
      state.details = state.details.filter((item) => item._id !== id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getScores.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getScores.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action.payload;
      })
      .addCase(getScores.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const isLoading = (state) => state.isLoading;

export const { addDetails, deleteDetails, updateDetails } = scoreSlice.actions;

export default scoreSlice.reducer;
