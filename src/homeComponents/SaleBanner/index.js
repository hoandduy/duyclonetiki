import clsx from "clsx";
import React from "react";
import styles from "./saleBanner.module.scss";

function SaleBanner() {
  return (
    <div className={clsx(styles.container)}>
      {Array.from({ length: 3 }).map((item, index) => (
        <a href="" key={index}>
          <img
            src={
              process.env.PUBLIC_URL +
              `./Image/HomeSaleSection/img${index + 1}.png`
            }
          />
        </a>
      ))}
    </div>
  );
}

export default SaleBanner;
