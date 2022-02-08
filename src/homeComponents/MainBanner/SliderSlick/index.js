import clsx from 'clsx'
import React, { memo, useEffect, useState } from 'react'
import sliderData from './sliderData/sliderData'
import styles from './mainSlider.module.scss'
import SliderBtn from './SliderBtn'
import './leftMargin.css'
import '../../../grid.css'

function SliderSlick() {

  const firstChild = 0
  const [slideIndex, setSlideIndex] = useState(0)
  const [id, setId] = useState()
  const [isIn , setIsIn] = useState(true)

  useEffect(() => {
    const id = setInterval(() => setSlideIndex(prevIndex => {
      return prevIndex + 1 === sliderData.length ? 0 : prevIndex + 1 
    }), 3000)

    setId(id)

    return () => {
      clearInterval(id)
    }
    
  },[isIn])
  

  const nextSlide = () => {
    setSlideIndex(prevIndex => {
      return prevIndex + 1 === sliderData.length ? 0 : prevIndex + 1 
    })
  }

  const prevSlide = () => {
    setSlideIndex(prevIndex => {
      if (prevIndex === 0) return prevIndex + 5
      return prevIndex - 1
    })
  }
  
  // handle mouse In and out
  const handleStopAuto = () => {
    clearInterval(id)
  }
  const handleAutoAnimate = () => {
    setIsIn(!isIn)
  }

  // handle dot choice
  const handManualSlide = (index) => {
    setSlideIndex(index)
  }
  
  return (
    <div 
      className={clsx(styles.wrapper, 'l-8','fullsize', 'm-12', 'c-12')}
      onMouseOver={handleStopAuto}
      onMouseOut={handleAutoAnimate}
    >
      <div className={clsx(styles.slide)}>
        {sliderData.map((obj, index) => (
          <div 
            key={obj.id}
            className={firstChild === index ? `active${slideIndex}` : ''}
          >
            <img
              className={clsx(styles.img, 'imgFullsize')}
              src={process.env.PUBLIC_URL + `/Image/HomeSlideImg/img-${index + 1}.png`} 
            />
          </div>
        ))}
      </div>
      <SliderBtn moveSlide={nextSlide} direction={"next"}/>
      <SliderBtn moveSlide={prevSlide} direction={"prev"}/>

      <div className={clsx(styles.containDots)}>
          {Array.from({length: 6}).map((item, index) => (
            <div
              key={index}
              className={clsx(styles.dot, {
                [styles.dotActive] : index === slideIndex
              })}
              onClick={() => handManualSlide(index)}
            >

            </div>
          ))}
      </div>
      
    </div>
  )
}

export default memo(SliderSlick)
