import clsx from 'clsx';
import { highlightList } from 'constantLists/highlightList';
import React from 'react';
import styles from './itemLink.module.scss'

function ItemLinks() {
  return <div className={clsx(styles.wrapper)}>
    {highlightList.map((item, index) => (
      <a href="#" key={item}>
        <img src={process.env.PUBLIC_URL + `./Image/HomeHighLights/img${index + 1}.jpg`} />
        <span>{item}</span>
      </a>
    ))}
  </div>;
}

export default ItemLinks;
