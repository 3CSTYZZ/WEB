import { useEffect, useState } from "react";

export const Timer = () => {
  const time = useTimer();

  return <div>{time} have passed</div>;
};

// custom hook (logic)
function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return seconds;
}
