import clsx from "clsx";
import React, { useState } from "react";
import Item from "./Item";
import { itemsObj } from "../../../constantLists/todaySugguest/index";
import styles from './product.module.scss'

function Products() {

  const [loadNumber, setLoadNumber] = useState(12)
  
  return (
    <div
      className={clsx("row", "no-negative-margin")}
      style={{ background: "#fff" }}
    >
      {itemsObj.map((item, index) => {

      if (index >= loadNumber) return
        
      return <Item
          key={index}
          imgIndex={index + 1}
          itemData={item}
        />;
      })}

      <div className={clsx(styles.seeMore)}>
        <span 
          className={clsx(styles.seeMoreBtn)}
          onClick={() => setLoadNumber(preValue => preValue + 12)}
        >
          Xem Thêm
        </span>
      </div>
    </div>
  );
}

export default Products;
