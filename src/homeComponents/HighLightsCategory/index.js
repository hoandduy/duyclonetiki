import React from 'react';
import ItemLinks from './ItemsLink';
import styles from './highlightsCategory.module.scss'
import clsx from 'clsx';

function HighLightsCategory() {
  return <div className={clsx(styles.container)}>
    <h3>Danh Mục Nổi Bật</h3>
    <ItemLinks />
  </div>;
}

export default HighLightsCategory;
