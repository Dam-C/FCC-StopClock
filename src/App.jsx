import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
} from "./redux/clockSlice";

import Timer from "./timer";
// import { useEffect } from "react";
// import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  return (
    <article id="clock-wrapper">
      <h1 id="clock-title">25 + 5 Clock</h1>
      <div id="clock-settings">
        <div id="session-settings">
          <h2 id="session-label">Session Length</h2>
          <div id="session-length">
            {useSelector((state) => state.clock.sessionLength)}
          </div>
          <div id="session-btns">
            <div
              id="session-increment"
              onClick={() => dispatch(incrementSession())}
            >
              +1
            </div>
            <div
              id="session-decrement"
              onClick={() => dispatch(decrementSession())}
            >
              -1
            </div>
          </div>
        </div>
        <div id="break-settings">
          <h2 id="break-label">Break Length</h2>
          <div id="break-length">
            {useSelector((state) => state.clock.breakLength)}
          </div>
          <div id="break-btns">
            <div
              id="break-increment"
              onClick={() => dispatch(incrementBreak())}
            >
              +1
            </div>
            <div
              id="break-decrement"
              onClick={() => dispatch(decrementBreak())}
            >
              -1
            </div>
          </div>
        </div>
      </div>
      <Timer />
    </article>
  );
}

export default App;
