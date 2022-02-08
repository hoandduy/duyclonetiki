import clsx from "clsx";
import React from "react";
import styles from "./dealItem.module.scss";

function Item({ data }) {
  return (
    <a href="#" className={clsx(styles.container, "l-2")}>
      <div className={clsx(styles.imgWrapper)}>
        <img
          className={clsx(styles.img)}
          src={process.env.PUBLIC_URL + `/Image/HomeDeal/img${data.id}.jpg`}
        />
      </div>
      <div
        className={clsx(styles.priceWrapper, {
          [styles.noDiscount]: data.discountPercent === 0,
        })}
      >
        <span className={clsx(styles.price)}>{data.price} ₫</span>
        {data.discountPercent !== 0 && (
          <span className={clsx(styles.discountPercent)}>
            -{data.discountPercent}%
          </span>
        )}
      </div>
      <div className={clsx(styles.saledWrapper)}>
        <div
          className={clsx(styles.progressPercent, {
            [styles.small]: data.saled === 0,
            [styles.min]: 18 > data.saled > 0,
            [styles.max]: data.saled > 18,
          })}
        ></div>
        <span className={clsx(styles.saleStatus)}>
          {data.saled === 0
            ? "Vừa mở bán"
            : data.saled > 18
            ? "Sắp bán hết"
            : `Đã bán ${data.saled}`}
        </span>
        {data.saled > 0 && (
          <div className={clsx(styles.iconWraper)}>
            <svg
              className={clsx(styles.fireIcon)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <defs>
                <linearGradient
                  id="prefix__a"
                  x1="50%"
                  x2="50%"
                  y1="36.31%"
                  y2="88.973%"
                >
                  <stop offset="0%" stopColor="#FDD835" />
                  <stop offset="100%" stopColor="#FFB500" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <path d="M0 0H16V16H0z" />
                <path
                  fill="url(#prefix__a)"
                  stroke="#FF424E"
                  strokeWidth="1.1"
                  d="M9.636 6.506S10.34 2.667 7.454 1c-.087 1.334-.786 2.571-1.923 3.401-1.234 1-3.555 3.249-3.53 5.646-.017 2.091 1.253 4.01 3.277 4.953.072-.935.549-1.804 1.324-2.41.656-.466 1.082-1.155 1.182-1.912 1.729.846 2.847 2.469 2.944 4.27v.012c1.909-.807 3.165-2.533 3.251-4.467.205-2.254-1.134-5.316-2.321-6.317-.448.923-1.144 1.725-2.022 2.33z"
                  transform="rotate(4 8 8)"
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </a>
  );
}

export default Item;
