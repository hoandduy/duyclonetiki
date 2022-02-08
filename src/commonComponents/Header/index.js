import React from "react";
import header from "./header.module.scss";
import SearchBar from "./Top/SearchBar/index.js";
import "../../grid.css";
import clsx from "clsx";
import UserAuth from "./Top/UserAuth";
import Cart from "./Top/Cart";
import Logo from "./Top/Logo";
import FreeShipLogo from "./Bottom/FreeShipLogo";
import SuggestList from "./Bottom/SuggestList";
import Partnership from "./Bottom/Partnership";

function Header() {
  return (
    <header className={header.header}>
      <div className={clsx('grid', 'wide')}>
        <div className={clsx('row', header.headerTop)}>
          <div className={clsx(header.headerTopLeft, 'col')}>
            <Logo />
            <SearchBar />
          </div>
          <div className={clsx(header.headerTopRight)}>
            <UserAuth />
            <Cart />
          </div>
        </div>
        <div className={clsx('row', header.headerBottom)}>
          <div className={clsx(header.headerBottomLeft, 'col')}>
            <FreeShipLogo />
            <SuggestList />
          </div >
          <div className={'displayNone'}>
            <Partnership />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
