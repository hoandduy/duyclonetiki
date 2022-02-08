import React from 'react';
import Title from './Title';
import styles from './headerHomeDeal.module.scss'
import clsx from 'clsx';
import Timer from './Timer';

function Header() {
  return <div className={clsx(styles.container)}>
    <Title />
    <Timer />
  </div>;
}

export default Header;
