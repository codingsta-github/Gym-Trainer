import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faCarrot,
  faBottleWater,
  faEgg,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
// Import Swiper styles
import "swiper/css";
const Banner3 = () => {
    const breakpoints={
        0: {
          width: 0,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
        1200: {
          width: 1200,
          slidesPerView: 3,
        },
        1400:{
            width:1400,
            slidesPerView:4
        }
      }
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
          <button>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faBottleWater}></FontAwesomeIcon>
          </h1>
          <h2>product</h2>
          <button>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faCarrot}></FontAwesomeIcon>
          </h1>
          <h2>dieting</h2>
          <button>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faEgg}></FontAwesomeIcon>
          </h1>
          <h2>nutrition</h2>
          <button>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner3;
