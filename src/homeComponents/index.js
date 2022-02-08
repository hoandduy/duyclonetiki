import React from "react";
import clsx from "clsx";
import PlainTextCategory from "./PlainTextCatelory";
import MainBanner from "./MainBanner";
import HomeDeal from "./HomeDeal";
import "../grid.css";
import styles from './home.module.scss'
import HomeBrandAds from "./HomeBrandAds";
import HomeService from "./HomeService";
import BrandDiscount from "./BrandDiscount";
import GenuienBrand from "./GenuineBrand";
import HighLightsCategory from "./HighLightsCategory";
import SaleBanner from "./SaleBanner";
import TodaySuggest from "./TodaySuggest";

function Main() {
  return (
    <div>
      <div>
        <div className={clsx("grid", "wide")}>
          <PlainTextCategory />
        </div>
      </div>
      <div className={clsx(styles.homeWrapper)}>
        <div className={clsx("grid", "wide", styles.mainBanner)}>
          <MainBanner />
          <HomeDeal />
          <HomeBrandAds />
          <HomeService />
          <BrandDiscount />
          <GenuienBrand />
          <HighLightsCategory />
          <SaleBanner />
          <TodaySuggest />
        </div>
      </div>
    </div>
  );
}

export default Main;
