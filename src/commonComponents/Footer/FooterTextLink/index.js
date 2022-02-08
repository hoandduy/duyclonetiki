import React from "react";
import styles from "../footer.module.scss";

function FooterTextLink({specialLink, titleText, linkObj}) {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{titleText}</h4>
      { specialLink && (
        <span>
          Hotline: {" "}
          <a className={styles.number}>1900-6035</a>
          <br />
          (1000 đ/phút, 8-21h kể cả T7, CN)
        </span>
      )}
      {linkObj.map((item, index) => (
        <a href="#" key={index}>
          {item}
        </a>
      ))}
      { specialLink && (
        <span>
          Hỗ trợ khách hàng: <a href="#">hotro@tiki.vn</a>
        </span>
      )}
      { specialLink && (
        <span>
          Báo lỗi bảo mật: <a href="#">security@tiki.vn</a>
        </span>
      )}
    </div>
  );
}

export default FooterTextLink;
