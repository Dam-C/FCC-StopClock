import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { startSession, resetClock } from "./redux/clockSlice";

const Timer = () => {
  const dispatch = useDispatch();
  const sessionTime = useSelector((state) => state.clock.sessionLength);
  const breakTime = useSelector((state) => state.clock.breakLength);
  const timerOn = useSelector((state) => state.clock.timerOn);
  const reset = useSelector((state) => state.clock.reseted);

  const [breakKit, setBreakKit] = useState(false);
  const [kitKat, setKitKat] = useState("Session");
  const [minutes, setMinutes] = useState(sessionTime);
  const [seconds, setSeconds] = useState(0);

  const audioRef = React.createRef();

  const soundPlayed = false;
  const playSound = () => {
    audioRef.current.play();
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleStartStop = () => {
    dispatch(startSession());
  };

  const handleReset = () => {
    dispatch(resetClock());
    stopSound();
  };

  useEffect(() => {
    if (breakKit) {
      setKitKat("Break");
      setMinutes(breakTime);
      setSeconds(0);
    }
    if (breakKit === false) {
      setKitKat("Session");
      setMinutes(sessionTime);
      setSeconds(0);
    }
  }, [sessionTime, breakTime, kitKat, breakKit]);

  // pour gérer le Reset du compteur

  useEffect(() => {
    if (reset) {
      setMinutes(sessionTime);
      setSeconds(0);
      setKitKat("Session");
      setBreakKit(false);
    }
  }, [sessionTime, reset]);

  // Pour faire diminuer le temps du minuteur

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (timerOn) {
        if (minutes === 0 && seconds === 0) {
          if (!soundPlayed) {
            setBreakKit(!breakKit);
            playSound();
            setMinutes(breakTime);
          }
          clearInterval(timeInterval);
        } else {
          if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
        }
      }
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [timerOn, minutes, seconds, soundPlayed, breakKit, breakTime, playSound]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div id="session">
      <h2 id="timer-label">{kitKat} </h2>

      <div id="time-left">
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <audio
        id="beep"
        preload="auto"
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
      <div id="clock-btns">
        <div id="start_stop" onClick={handleStartStop}>
          Start/Pause
        </div>
        <div id="reset" onClick={handleReset}>
          Reset
        </div>
      </div>
    </div>
  );
};

export default Timer;
