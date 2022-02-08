import clsx from 'clsx'
import React from 'react'
import styles from './SliderBtn.module.scss'

function SliderBtn({direction, moveSlide}) {
  
  return (
    <div 
      className={direction === 'next' ? clsx(styles.slideBtn, styles.next)
        : clsx(styles.slideBtn, styles.prev)
      }
      onClick={moveSlide}
    >
      <img
        className={direction === 'next' ? clsx(styles.nextArrow)
        : clsx(styles.prevArrow)
      }
        src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png" 
      />
    </div>
  )
}

export default SliderBtn
