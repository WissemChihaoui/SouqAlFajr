import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimeout }) => {
  const initialRemainingTime = duration * 60; // Convert duration to seconds
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          onTimeout();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [duration, onTimeout]);

  // Format the remaining time as minutes and seconds
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return <div>{formattedTime}</div>;
};

export default Timer;
