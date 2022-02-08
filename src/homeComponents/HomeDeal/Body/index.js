import clsx from "clsx";
import React, { useState } from "react";
import Item from "./Item";
import { dealItem } from "./Item/itemData";
import styles from "./homeDealBody.module.scss";
import SliderBtn from "./SliderBtn";
import { useEffect } from "react";
import { useRef } from "react";

function Body() {
  const [isForward, setIsForward] = useState(false);
  const [remove, setRemove] = useState(false)
  const containerRef = useRef()

  const nextSlide = () => {
    setIsForward(true);
  };

  useEffect(() => {
    if (containerRef.current.clientWidth === 1000) {
      setRemove(true)
    }  
  })

  const prevSlide = () => {
    setIsForward(false);
  };

  return (
    <div className={clsx(styles.container)} ref={containerRef}>
      <div
        className={clsx(styles.wrapper, "row", "no-negative-margin", {
          [styles.moveForward]: isForward,
        })}
      >
        {dealItem.map(item => (
          <Item data={item} key={item.name} />
        ))}
      </div>
      <div className={clsx({
        [styles.removeBtn]: remove
      })}>
        {isForward && <SliderBtn moveSlide={prevSlide} direction={"prev"} />}
        {!isForward && <SliderBtn moveSlide={nextSlide} direction={"next"} />}
      </div>
    </div>
  );
}

export default Body;
