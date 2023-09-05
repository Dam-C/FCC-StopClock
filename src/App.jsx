import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  chgBreak,
  chgSession,
  resetClock,
  startSession,
} from "./redux/clockSlice";

import Timer from "./timer";

function App() {
  const dispatch = useDispatch();
  const kitKat = useSelector((state) => state.clock.breakTime);

  const handleTimerStart = () => {
    dispatch(startSession());
  };

  return (
    <article id="clock-wrapper">
      <h1 id="clock-title">25 + 5 Clock</h1>
      <div id="clock-settings">
        <div id="break-settings">
          <h2 id="break-label">Break Length</h2>
          <div id="break-length">
            {useSelector((state) => state.clock.breakLength)}
          </div>
          <div id="break-btns">
            <div id="break-increment" onClick={() => dispatch(chgBreak(1))}>
              +1
            </div>
            <div id="break-decrement" onClick={() => dispatch(chgBreak(-1))}>
              -1
            </div>
          </div>
        </div>
        <div id="session-settings">
          <h2 id="session-label">Session Length</h2>
          <div id="session-length">
            {useSelector((state) => state.clock.sessionLength)}
          </div>
          <div id="session-btns">
            <div id="session-increment" onClick={() => dispatch(chgSession(1))}>
              +1
            </div>
            <div
              id="session-decrement"
              onClick={() => dispatch(chgSession(-1))}
            >
              -1
            </div>
          </div>
        </div>
      </div>
      <div id="">
        <h2 id="timer-label">{kitKat ? "Break" : "Session"} </h2>
        <div id="time-left">
          <Timer />
        </div>
        <div id="clock-btns">
          <div id="start_stop" onClick={handleTimerStart}>
            Start/Pause
          </div>
          <div id="reset" onClick={() => dispatch(resetClock())}>
            Reset
          </div>
        </div>
      </div>
    </article>
  );
}

export default App;
