import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 110,
  newArray: [1, 2, 3, 4, 565, 6, 5, 676, 6],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
