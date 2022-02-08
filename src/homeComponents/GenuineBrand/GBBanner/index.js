import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './gbBanner.module.scss'
import clsx from "clsx";
import './panigation.css'

function GBBanner() {
  return (
    <Swiper

      modules={[Navigation, Pagination]}
      slidesPerView={2}
      spaceBetween={10}
      slidesPerGroup={2}
      loop={true}
      loopFillGroupWithBlank={false}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className={clsx(styles.container, "ml-0")}
    >
      {Array.from({length: 5}).map((item, index) => (
        <SwiperSlide className={clsx(styles.imgWrapper,)} key={index}>
          <a href="#">
            <img src={process.env.PUBLIC_URL + `./Image/HomeGenuineBrand/BannerAds/img${index + 1}.png`} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GBBanner;
