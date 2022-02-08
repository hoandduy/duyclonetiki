import clsx from "clsx";
import React from "react";
import logo from './logo.module.scss'

function Logo() {
  return (
    <a href='#'>
      <img
        className={clsx(logo.logoIcon)}
        src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
        alt="tiki-logo"
      />
    </a>
  );
}

export default Logo;
