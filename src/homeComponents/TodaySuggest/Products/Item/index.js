import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './item.module.scss'

function Item({imgIndex, itemData}) {

  const currentChoice = useSelector(state => state.todayNav.currentChoice);
  const {name, numberOfSale, itemPrice, discountPercent} = itemData
  
  return <a href='#' className={clsx(styles.itemLink, 'l-2', 'ml-6')}>
    <div className={styles.itemWrapper}>
      <div className={clsx(styles.itemImage)}>
        <img src={process.env.PUBLIC_URL + `./Image/TodaySuggest/products/${currentChoice}/img${imgIndex}.jpg`} alt="" />
      </div>
      <div className={clsx(styles.itemInfo)}>
        <div className={clsx(styles.name)}>
          <span>{`${name} ${imgIndex}`}</span>
        </div>
        {
          numberOfSale !== 0 &&
          <div className={clsx(styles.status)}>
            <span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="14" color="#fdd836" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{color: '#fdd836'}}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="14" color="#fdd836" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{color: '#fdd836'}}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="14" color="#fdd836" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{color: '#fdd836'}}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="14" color="#fdd836" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{color: '#fdd836'}}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="14" color="#c7c7c7" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{color: '#c7c7c7'}}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            </span>
            <div className={clsx(styles.saled)}>
              <span>Đã bán {numberOfSale}</span>
            </div>
          </div>
        }
        <div className={clsx(styles.priceWrapper, {
          [styles.isDisCount]: discountPercent
        })}>
          <span className={clsx(styles.priceTag)}>
            {itemPrice} ₫
          </span>
          {
            discountPercent !== 0 &&
            <span className={clsx(styles.discountTag)}>
              {discountPercent}%
            </span>
          }
        </div>
      </div>
    </div>
  </a>;
}

export default Item
  ;
