import { createSlice } from "@reduxjs/toolkit";

const clockSlice = createSlice({
  name: "clock",
  initialState: {
    breakLength: 5,
    sessionLength: 25,
  },
  reducers: {
    chgBreak: (state, action) => {
      action.payload === -1 && state.breakLength === 1
        ? ""
        : (state.breakLength += action.payload);
    },
    chgSession: (state, action) => {
      action.payload === -1 && state.sessionLength === 1
        ? ""
        : (state.sessionLength += action.payload);
    },
  },
});

export const { chgBreak, chgSession } = clockSlice.actions;

export default clockSlice;
