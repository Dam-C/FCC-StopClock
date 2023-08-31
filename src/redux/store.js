import { configureStore } from "@reduxjs/toolkit";
import clockSlice from "./clockSlice";

export const store = configureStore({
  reducer: {
    clock: clockSlice.reducer,
  },
});
