import clsx from "clsx";
import { GBCardList } from "constantLists/GBCardList";
import React from "react";
import styles from './gbCard.module.scss'

function GBCard() {
  return (
    <>
      {GBCardList.map((item, index) => (
        <a href="" key={item} className={clsx(styles.cardLink)}>
          <div className={clsx(styles.wrapper)}>
            <img src={process.env.PUBLIC_URL + `./Image/HomeGenuineBrand/CardAds/img${index + 1}.png`} />
            <span>
              {item}
            </span>
          </div>
        </a>
      ))}
    </>
  );
}

export default GBCard;
