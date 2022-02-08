import React from 'react'
import HomeAds from './HomeAds'
import SliderSlick from './SliderSlick'
import clsx from 'clsx'
import styles from './mainBanner.module.scss'

function MainBanner() {
  return (
    <div 
      className={clsx(styles.mainBanner, 'row', 'no-negative-margin')}
    >
      <SliderSlick />
      <HomeAds />
    </div>
  )
}

export default MainBanner
