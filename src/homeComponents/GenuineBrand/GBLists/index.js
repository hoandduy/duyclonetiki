import clsx from 'clsx';
import React from 'react';
import GBCard from './GBCard';
import styles from './gbCard.module.scss'

function GBLists() {
  return <div className={clsx(styles.container)}>
    <GBCard />
  </div>;
}

export default GBLists;
