import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import React from "react";

const Timer = () => {
  const sessionTime = useSelector((state) => state.clock.sessionLength);
  const timerOn = useSelector((state) => state.clock.timerOn);
  const reset = useSelector((state) => state.clock.reseted);
  const playSound = () => {
    audioRef.current.play();
  };

  const [minutes, setMinutes] = useState(sessionTime);
  const [seconds, setSeconds] = useState(0);
  const [timerColor, setTimerColor] = useState("black");
  const [soundPlayed, setSoundPlayed] = useState(false);
  const audioRef = React.createRef();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (reset) {
        setMinutes(sessionTime);
        setSeconds(0);
      }
      if (timerOn) {
        if (minutes === 0 && seconds === 0) {
          if (!soundPlayed) {
            playSound();
            setSoundPlayed(true);
          }
          clearInterval(timeInterval);
        } else {
          if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
          if (minutes <= 1 && seconds === 0) {
            setTimerColor("red");
          }
        }
      }
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [timerOn, minutes, seconds, reset, sessionTime, soundPlayed]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div id="time-left" style={{ color: timerColor }}>
      {formatTime(minutes)}:{formatTime(seconds)}
      <audio
        id="beep"
        preload="auto"
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
};

export default Timer;
