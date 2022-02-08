import clsx from "clsx";
import React from "react";
import styles from "./brandDiscount.module.scss";

const loopList = [1, 2, 3, 4];

function BrandDiscount() {
  return (
    <div className={clsx(styles.wrapper)}>
      {loopList.map((i, index) => (
        <a href="#" key={i} className={clsx({
          'ml-0': i == 4
        })}>
          <img
            className={clsx(styles.img)}
            src={process.env.PUBLIC_URL + `./Image/HomeBrandDisCount/img${index+1}.png`}
          />
        </a>
      ))}
    </div>
  );
}

export default BrandDiscount;
