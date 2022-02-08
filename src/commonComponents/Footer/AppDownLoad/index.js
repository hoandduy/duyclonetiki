import React from "react";
import styles from "../footer.module.scss";

function AppDownLoad() {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Tải ứng dụng trên điện thoại</h4>
      <div style={{display:'flex'}}>
        <img
          src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
          width={80}
          height={80}
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80px",
            marginLeft: "10px"
          }}
        >
          <a
            rel="noreferrer"
            href="https://itunes.apple.com/vn/app/id958100553"
            target="_blank"
            aria-label
            style={{ height: "36px" }}
            admicro-data-event={100127}
            admicro-data-auto={1}
            admicro-data-order="false"
          >
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
              width={122}
              alt=""
            />
          </a>
          <a
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid"
            target="_blank"
            aria-label
            style={{ height: "36px" }}
            admicro-data-event={100128}
            admicro-data-auto={1}
            admicro-data-order="false"
          >
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
              width={122}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppDownLoad;
