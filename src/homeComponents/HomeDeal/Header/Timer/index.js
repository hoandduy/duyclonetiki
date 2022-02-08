import clsx from "clsx";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./timer.module.scss";

function Timer() {
  const [second, setSecond] = useState('00')
  const [minute, setMinute] = useState('00')
  const [hour, setHour] = useState('00')

  useEffect(() => {
    setInterval(countDown, 1000)
  }, []);

  const countDown = () => {
    const countDate = new Date("May 26, 2022 00:00:00").getTime()
    const now = new Date().getTime()
    const gap = countDate - now
    
    // how tf does time work ?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //  Cal the shit
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    setSecond(textSecond)
    setMinute(textMinute)
    setHour(textHour)
  }

  return (
    <div className={clsx(styles.wrapper)}>
      <span>
        {hour.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
      :
      <span>
        {minute.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
      :
      <span>
        {second.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
    </div>
  );
}

export default Timer;
