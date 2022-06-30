import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { productContext } from "../../../App";
import ShowCase from "../../Shop/ShowCase/ShowCase";
const MobileProductBanner = () => {
  const product = useContext(productContext);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={2}
      pagination={{ clickable: true }}
    >
      {product?.slice(0, 9).map((data) => (
        <SwiperSlide>
          <ShowCase data={data}></ShowCase>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileProductBanner;
