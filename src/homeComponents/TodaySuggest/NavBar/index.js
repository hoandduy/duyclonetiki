import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { navBar } from "constantLists/todaySugguest";
import styles from "./navBar.module.scss";
import { changeOption } from "../../../redux";

function NavBar() {
  const currentChoice = useSelector(state => state.todayNav.currentChoice);
  const dispatch = useDispatch();

  return (
    <div className={clsx(styles.container)}>
      <h3 className={clsx(styles.title)}>Gợi Ý Hôm Nay</h3>
      <div className={clsx(styles.wrapper)}>
        {navBar.map((item, index) => (
          <div
            key={index}
            className={clsx({ [styles.active]: currentChoice === index + 1 })}
            onClick={() => dispatch(changeOption(index + 1))}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                `./Image/TodaySuggest/navBar/img${index + 1}.png`
              }
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
