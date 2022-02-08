import clsx from 'clsx';
import React from 'react';
import NavBar from './NavBar';
import Products from './Products';
import styles from './todaySuggest.module.scss'

function TodaySuggest() {
  return <div className={clsx(styles.container, 'grid', 'wide')}>
    <NavBar />
    <Products />
  </div>;
}

export default TodaySuggest;
