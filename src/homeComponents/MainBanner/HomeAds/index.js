import React from "react";
import styles from './homeAds.module.scss'

function HomeAds() {
  return (
    <a href='#' className='l-4 m-0 c-0 displayNone'>
      <img
        src={
          process.env.PUBLIC_URL + `/Image/HomeAdsImg/img-1.png`
        }
        className={styles.homeAds}
      />
    </a>
  );
}

export default HomeAds;
