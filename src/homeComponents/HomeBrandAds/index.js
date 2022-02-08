import clsx from 'clsx';
import React from 'react';
import styles from './homeBrandAds.module.scss'

function HomeBrandAds() {
  return <div className={clsx(styles.wrapper, 'row', 'no-negative-margin')}>
    <a href="#" className={'ml-0'}>
      <img className={clsx(styles.sideAds)} src={process.env.PUBLIC_URL + `./Image/HomeBrandAds/img1.png`}/>
    </a>
    <a href="#" className={'ml-o-1'}>
      <img className={clsx(styles.centerAds)} src={process.env.PUBLIC_URL + `./Image/HomeBrandAds/img2.png`}/>
    </a>
    <a href="#" className={'ml-0'}>
      <img className={clsx(styles.sideAds)} src={process.env.PUBLIC_URL + `./Image/HomeBrandAds/img3.png`}/>
    </a>
  </div>;
}

export default HomeBrandAds;
