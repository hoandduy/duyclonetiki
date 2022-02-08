import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import searchBar from "./searchBar.module.scss";
import {boolChange} from "../../../../redux"

const listKeyWord = [
  "tai nghe bluetooth",
  "iphone 13",
  "iphone 13 pro max",
  "sách",
  "bàn phím cơ",
  "áo khoát nam",
];

function SearchBar() {
  const dispatch = useDispatch()

  return (
    <div className={clsx(searchBar.searchWrapper)}>
      <input
        className={clsx(searchBar.searchInput)}
        type="text"
        placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
        onFocus={() => dispatch(boolChange(true))}
        onBlur={() => dispatch(boolChange(false))}
      />
      <button type="button" className={clsx(searchBar.searchBtn)}>
        <img
          className={clsx(searchBar.searchBtnIcon)}
          src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
        ></img>
        Tìm Kiếm
      </button>

      <div className={clsx(searchBar.dropDown)}>
        {listKeyWord.map((keyword, index) => (
          <a href="#" key={index} className={clsx(searchBar.keywordLink)}>
            <img className={clsx(searchBar.icon)} src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" />
            <div className={clsx(searchBar.keyword)} >{keyword}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
