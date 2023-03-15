import { useEffect, useState } from "react";
import { getRemainingTimeObj } from "../utils/CountdownTimerUtils";
import CountdownElement from "./CountdownElement/CountdownElement";

function CountdownTimer() {
  const [remainingTime, setRemainingTime] = useState(getRemainingTimeObj);
  useEffect(() => {
    setInterval(() => {
      updateRemainingTime();
    }, 1000);
  }, []);

  const updateRemainingTime = () => {
    setRemainingTime(getRemainingTimeObj());
  };

  return (
    <div className="countdown-container">
      <CountdownElement timeUnit={remainingTime.days} text={"days"} />
      <CountdownElement timeUnit={remainingTime.hours} text={"hours"} />
      <CountdownElement timeUnit={remainingTime.mins} text={"mins"} />
      <CountdownElement timeUnit={remainingTime.seconds} text={"seconds"} />
    </div>
  );
}

export default CountdownTimer;
