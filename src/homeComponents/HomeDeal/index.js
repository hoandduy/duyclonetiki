// Slider for sale of day

import clsx from 'clsx';
import React from 'react';
import Body from './Body';
import Header from './Header';
import styles from './homeDealHeader.module.scss'

function HomeDeal() {
  return <div className={clsx(styles.container ,'row', 'no-negative-margin')}>
    <Header />
    <Body />
  </div>;
}

export default HomeDeal;
