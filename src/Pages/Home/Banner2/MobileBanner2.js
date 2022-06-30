import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faCarrot,
  faBottleWater,
  faEgg,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
// Import Swiper styles

import { Link } from "react-router-dom";
const MobileBanner2 = () => {
    
  return (

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1} 
      pagination={{ clickable: true }}
    >
      <SwiperSlide >
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
          </h1>
          <h2>Workout</h2>
          <Link className="banner2-button" to="/shop">
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faBottleWater}></FontAwesomeIcon>
          </h1>
          <h2>product</h2>
          <Link className="banner2-button" to="/shop/product">
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faCarrot}></FontAwesomeIcon>
          </h1>
          <h2>dieting</h2>
          <Link className="banner2-button" to="/shop">
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faEgg}></FontAwesomeIcon>
          </h1>
          <h2>nutrition</h2>
          <Link className="banner2-button" to="/shop">
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </Link>
        </div>
      </SwiperSlide>
     
    </Swiper>
  );
};

export default MobileBanner2;
