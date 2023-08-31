import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { chgBreak, chgSession } from "./redux/clockSlice";

function App() {
  const dispatch = useDispatch();

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
        <h2 id="timer-label">Session </h2>
        <div id="time-left">Time</div>
        <div id="clock-btns">
          <div id="start_stop">Start</div>
          <div id="reset">Reset</div>
        </div>
      </div>
    </article>
  );
}

export default App;
