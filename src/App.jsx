import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  const [currentTime, setCurrentTime] = useState("");

  // Memoize the date formatting function
  const formatCustomDate = useMemo(() => {
    const now = new Date();
    return `${DAYS[now.getDay()]}, ${
      MONTHS[now.getMonth()]
    } ${now.getDate()}, ${now.getFullYear()}`;
  }, []);

  useEffect(() => {
    // Update time immediately on first render
    setCurrentTime(new Date().toLocaleTimeString());

    // Set up interval for updating time
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="digital-clock">
      <h1>Digital Clock</h1>
      <div className="time">{currentTime}</div>
      <div className="date">{formatCustomDate}</div>
    </div>
  );
}

export default App;
