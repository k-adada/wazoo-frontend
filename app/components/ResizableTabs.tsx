"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
// import { FreeMode, Pagination } from "swiper/modules";

export default function App() {

  return (
    <>
      <div className="h-[40px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          className="mySwiper h-[40px]"
        >
          <SwiperSlide>
            <div className="h-[40px] flex items-center justify-center pointer">Trip 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[40px] flex items-center justify-center pointer bg-grey">Trip 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[40px] flex items-center justify-center pointer bg-grey">Trip 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[40px] flex items-center justify-center pointer bg-grey">Trip 4</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
