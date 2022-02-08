import clsx from 'clsx'
import React from 'react'
import styles from './freeShip.module.scss'

function FreeShipLogo() {
  return (
    <a href='#' className={clsx(styles.freeShip)}>
      <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="free-ship-badge" height="12" width="83"></img>
    </a>
  )
}

export default FreeShipLogo
