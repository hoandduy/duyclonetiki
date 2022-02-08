import clsx from "clsx";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAuth from "./userAuth.module.scss";
import { turnOn } from "../../../../redux";

function UserAuth() {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className={clsx(userAuth.userAuth, 'displayNone')}
        onClick={() => dispatch(turnOn(true))}
      >
        <div>
          <img
            className={clsx(userAuth.userAuthLeftIcon)}
            src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
          />
        </div>
        <div className={clsx(userAuth.userAuthRight,)}>
          <div className={clsx(userAuth.userAuthRightLoginAndRegis)}>
            <span className={clsx(userAuth.userAuthRightLoginAndRegisLogin)}>
              Đăng nhập
            </span>
            /
            <span className={clsx(userAuth.userAuthRightLoginAndRegisRegis)}>
              Đăng Ký
            </span>
          </div>
          <div className={clsx(userAuth.userAuthRightAccount)}>
            <span>
              Tài khoản
              <img
                className={clsx(userAuth.userAuthRightAccountIcon)}
                src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
