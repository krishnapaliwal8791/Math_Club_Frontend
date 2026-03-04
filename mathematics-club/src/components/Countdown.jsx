import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const eventDate = new Date("2026-03-21T12:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return <div className="countdown-live">Event Live Now</div>;
  }

  return (
    <div className="countdown-container">
      <div className="time-box">
        <span>{timeLeft.days}</span>
        <small>Days</small>
      </div>

      <div className="time-box">
        <span>{timeLeft.hours}</span>
        <small>Hours</small>
      </div>

      <div className="time-box">
        <span>{timeLeft.minutes}</span>
        <small>Minutes</small>
      </div>

      <div className="time-box">
        <span>{timeLeft.seconds}</span>
        <small>Seconds</small>
      </div>
    </div>
  );
}

export default Countdown;