import clsx from "clsx";
import React from "react";
import "../../grid.css";
import AppDownLoad from "./AppDownLoad";
import Connect from "./Connect";
import styles from "./footer.module.scss";
import { aboutUs, cooperate, customerSupport } from "./footerConstant";
import FooterTextLink from "./FooterTextLink";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Verify from "./Verify";

function Footer() {
  return (
    <footer>
      <div className={clsx(styles.container, "grid", "wide")}>
        <div className={clsx("row", "no-negative-margin")}>
          <div className={'l-2-4', 'ml-6'}>
            <FooterTextLink
              specialLink
              titleText={"Hỗ trợ khách hàng"}
              linkObj={customerSupport}
            />
          </div>
          <div className={'l-2-4', 'ml-6'}>
            <FooterTextLink
              titleText={"Về Tiki"}
              linkObj={aboutUs}
            />
          </div>
          <div className={'l-2-4', 'ml-6'}>
            <FooterTextLink
              titleText={"Hợp tác và liên kết"}
              linkObj={cooperate}
            />
            <Verify />
          </div>
          <div className={'l-2-4', 'ml-6'}>
            <Payment/>
            <Shipping />
          </div>
          <div className={'l-2-4', 'ml-6'}>
            <Connect />
            <AppDownLoad />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
