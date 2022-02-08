import clsx from "clsx";
import React, { useState } from "react";
import styles from "./modal.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { turnOn } from "../../redux";

function Modal() {
  const isClick = useSelector(state => state.modal);
  const dispatch = useDispatch();

  return (
    <div
      className={clsx(styles.container, {
        [styles.isActive]: isClick,
      })}
      onClick={() => dispatch(turnOn(false))}
    >
      <div className={clsx(styles.wrapper)}>
        <button
          className={clsx(styles.closeBtn)}
          onClick={() => dispatch(turnOn(false))}
        >
          <img
            className={clsx(styles.closeIcon)}
            src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
            alt="icon"
          ></img>
        </button>
        <div className={clsx(styles.left)}>
          <div>
            <div className={clsx(styles.heading)}>
              <h4>Xin chào,</h4>
              <p>Đăng nhập hoặc Tạo tài khoản</p>
            </div>
            <form className={clsx(styles.form)}>
              <div className={clsx(styles.input)}>
                <input type="tel" name="tel" placeholder="Số điện thoại" />
              </div>
              <button>Tiếp Tục</button>
            </form>
            <p className={clsx(styles.emailLogin)}>Đăng nhập bằng email</p>
            <div className={clsx(styles.socialWrapping)}>
              <p className={clsx(styles.heading)}>
                <span>Hoặc tiếp tục bằng</span>
              </p>
              <ul className={clsx(styles.socialItems)}>
                <li className={clsx(styles.socialItem)}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
                    alt="facebook"
                  />
                </li>
                <li className={clsx(styles.socialItem)}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
                    alt="google"
                  />
                </li>
                <li className={clsx(styles.socialItem)}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png"
                    alt="zalo"
                  />
                </li>
              </ul>
              <p className={clsx(styles.note)}>
                Bằng việc tiếp tục, bạn đã chấp nhận{" "}
                <a href="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung">
                  điều khoản sử dụng
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={clsx(styles.right)}>
          <img
            src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
            width="203"
          />
          <div className={clsx(styles.content)}>
            <h4>Mua sắm tại Tiki</h4>
            <span>Siêu ưu đãi mỗi ngày</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
