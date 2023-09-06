import { createSlice } from "@reduxjs/toolkit";

const clockSlice = createSlice({
  name: "clock",
  initialState: {
    timerOn: false,
    reseted: false,
    breakLength: 5,
    sessionLength: 25,
  },
  reducers: {
    //modification de la durée de la session
    incrementSession: (state) => {
      state.sessionLength >= 60 ? "" : (state.sessionLength += 1);
    },
    decrementSession: (state) => {
      state.sessionLength <= 1 ? "" : (state.sessionLength -= 1);
    },
    //modification de la durée du break
    incrementBreak: (state) => {
      state.breakLength >= 60 ? "" : (state.breakLength += 1);
    },
    decrementBreak: (state) => {
      state.breakLength <= 1 ? "" : (state.breakLength -= 1);
    },
    // Pour remise à 0 du minuteur
    resetClock: (state) => {
      state.timerOn = false;
      state.breakLength = 5;
      state.sessionLength = 25;
      state.reseted = true;
      state.breakTime = false;
    },
    startSession: (state) => {
      state.timerOn = !state.timerOn;
      state.reseted = false;
    },
  },
});

export const {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  resetClock,
  startSession,
} = clockSlice.actions;

export default clockSlice;
