import clsx from 'clsx'
import React from 'react'
import styles from './suggestList.module.scss'

function SuggestList() {

  const suggestList = [
    'trái cây', 'thịt, trứng', 'rau củ quả', 'sữa, bơ, phô mai', 'hải sản', 'gạo, mì ăn liền', 'đồ uống, bia rượu', 'bánh kẹo'
  ]
  
  return (
    <div className={clsx(styles.suggestList)}>
      {
        suggestList.map((item, index) => (
          <a className={clsx(styles.suggestListLink)} href='#' key={index}>{item}</a>
        ))
      }
    </div>
  )
}

export default SuggestList
