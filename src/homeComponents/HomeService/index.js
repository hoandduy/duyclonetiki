import clsx from 'clsx';
import { serviceList } from 'constantLists/serviceList';
import React from 'react';
import styles from './homeService.module.scss'

function HomeService() {
  return <div className={clsx('row', 'no-negative-margin', styles.wrapper)}>
    {serviceList.map((item, index) => (
      <a href="#" key={item} className={clsx(styles.item)}>
        <img src={process.env.PUBLIC_URL + `./Image/HomeService/img${index + 1}.png`} />
        <span>{item}</span>
      </a>
    ))}
  </div>;
}

export default HomeService;
