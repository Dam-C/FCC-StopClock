import { createSlice } from "@reduxjs/toolkit";

const clockSlice = createSlice({
  name: "clock",
  initialState: {
    timerOn: false,
    breakTime: false,
    reseted: false,
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
    resetClock: (state) => {
      state.timerOn = false;
      state.breakLength = 5;
      state.sessionLength = 25;
      state.reseted = true;
    },
    startSession: (state) => {
      state.timerOn = !state.timerOn;
      state.reseted = false;
    },
    switchToBreak: (state) => {
      state.breakTime = !state.breakTime;
    },
  },
});

export const { chgBreak, chgSession, resetClock, startSession } =
  clockSlice.actions;

export default clockSlice;
