"use client";
import { useTimer } from "react-timer-hook";

export default function Timer() {
  const time = new Date();
  // random seconds between 1h and 24h
  const randomTime = Math.floor(Math.random() * (86400 - 3600 + 1)) + 3600;

  time.setSeconds(time.getSeconds() + randomTime);
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
  });

  return (
    <p>
      {hours}h {minutes}m {seconds}s
    </p>
  );
}
