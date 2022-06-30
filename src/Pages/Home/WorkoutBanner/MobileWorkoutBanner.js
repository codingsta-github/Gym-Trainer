import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { workoutContext } from "../../../App";
import Service from "../Service/Service";
const MobileServices = () => {
  const workout = useContext(workoutContext);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {workout?.slice(0, 9).map((service) => (
        <SwiperSlide>
          <Service service={service} key={service.id}></Service>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileServices;
