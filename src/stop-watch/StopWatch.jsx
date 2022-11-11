import React, { useState, useEffect } from "react";
import classes from "./StopWatch.module.css";
import Button from "../UI/Button";

const formatToBeShown = (data) => {
  return data.toString().length === 1 ? `0${data}` : data.toString();
};

const StopWatch = () => {
  const [isStarted, setIsStarted] = useState(false);

  const [time, setTime] = useState(0);

  const [timeInSeconds, setTimeInSeconds] = useState("00");
  const [timeInMinutes, setTimeInMinutes] = useState("00");

  useEffect(() => {
    let timerId;
    if (isStarted) {
      timerId = setTimeout(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [isStarted, time]);

  useEffect(() => {
    if (time === 0) {
      setTimeInMinutes("00");
      setTimeInSeconds("00");
    } else {
      const minutes = Math.floor(time / 10);
      if (minutes >= 1) {
        const seconds = time - minutes * 10;
        setTimeInMinutes(formatToBeShown(minutes));
        setTimeInSeconds(formatToBeShown(seconds));
      } else {
        setTimeInSeconds(formatToBeShown(time));
      }
    }
  }, [time]);

  const startWatchHandler = () => {
    setIsStarted(true);
  };

  const resumeWatchHandler = () => {
    setIsStarted(true);
  };

  const stopWatchHandler = () => {
    setIsStarted(false);
  };

  const resetWatchHandler = () => {
    setIsStarted(false);
    setTime(0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.watch}>
        <div className={classes.box}>{timeInMinutes}</div>
        <div className={classes.box}>{timeInSeconds}</div>
      </div>
      <div className={classes.actions}>
        {!isStarted && time === 0 && (
          <Button className={classes.start} onClick={startWatchHandler}>
            Start
          </Button>
        )}
        {!isStarted && time !== 0 && (
          <Button className={classes.resume} onClick={resumeWatchHandler}>
            Resume
          </Button>
        )}
        {isStarted && (
          <Button className={classes.stop} onClick={stopWatchHandler}>
            Stop
          </Button>
        )}
        {(isStarted || (!isStarted && time !== 0)) && (
          <Button className={classes.reset} onClick={resetWatchHandler}>
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};

export default StopWatch;
