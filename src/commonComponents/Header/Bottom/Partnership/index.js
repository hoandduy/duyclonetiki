import clsx from 'clsx'
import React from 'react'
import styles from './partnerShip.module.scss'

function Partnership() {
  return (
    <a href='#' className={clsx(styles.wrapper, 'displayNone')}>
      <img className={clsx(styles.img)} src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"></img>
      <span className={clsx(styles.text)}>Bán hàng cùng Tiki</span>
    </a>
  )
}

export default Partnership
