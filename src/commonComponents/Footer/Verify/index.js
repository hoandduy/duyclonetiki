import React from "react";
import styles from "../footer.module.scss";

function Verify() {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Chứng nhận bởi</h4>
      <div>
        <a
          href="https://hotro.tiki.vn/s/"
          rel="noreferrer"
          aria-label=""
          target="_blank"
          style={{height: 32}}
        >
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
            width="32"
            height="32"
            alt=""
          />
        </a>
        <a
          href="http://online.gov.vn/Home/WebDetails/21193"
          rel="noreferrer"
          aria-label=""
          target="_blank"
          style={{height: 32}}
        >
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
            height="32"
            width="83"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Verify;
