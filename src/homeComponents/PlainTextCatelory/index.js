import clsx from "clsx";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { plainTextCatelory } from "../../constantLists/categoryList";
import styles from "./plainTextCategory.module.scss";

function PlainTextCategory() {

  const [isForward, setIsForward] = useState(false)

  const data = useRef()

  return (
    <div className={clsx(styles.container, 'row', 'no-negative-margin')}>
      <div className={clsx(styles.wrapper)}>
        <div
          className={clsx(styles.slider, {
            [styles.active] : isForward
          })}
          ref={data}
        >
          {plainTextCatelory.map(option => (
            <a href="#" key={option} className={clsx(styles.option)}>
              <div className={clsx(styles.text)}>{option}</div>
            </a>
          ))}
        </div>
      </div>

      {isForward && <span 
        className={clsx(styles.backBtn)}
        onClick={() => setIsForward(false)}
      >
        <FaChevronLeft />
      </span>}
      {!isForward && <span 
        className={clsx(styles.forwardBtn)}
        onClick={() => setIsForward(true)}
      >
        <FaChevronRight />
      </span>}
    </div>
  );
}

export default PlainTextCategory;
