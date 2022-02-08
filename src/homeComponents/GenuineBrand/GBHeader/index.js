import clsx from 'clsx';
import React from 'react';
import styles from './gbHeader.module.scss'

function GBHeader() {
  return <div className={clsx(styles.wrapper)}>
    <img src={process.env.PUBLIC_URL + './Image/TikiIcon/Verify.png'} />
    <span>Thương Hiệu Chính Hãng</span>
    <a target='_blank' rel="noreferrer" className={clsx(styles.seeMoreLink)} href="https://tiki.vn/khuyen-mai/thuong-hieu-chinh-hang-tiki">XEM THÊM</a>
  </div>;
}

export default GBHeader;
