import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import casinoImage from "../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";

export default function ServicesSwiper(props: any) {
  const { images } = props;
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Enable/disable autoplay on user interaction
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image-wrapper-83">
            <Image src={casinoImage} alt="casinoImage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="image-wrapper-83">
            <Image src={casinoImage} alt="casinoImage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="image-wrapper-83">
            <Image src={casinoImage} alt="casinoImage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="image-wrapper-83">
            <Image src={casinoImage} alt="casinoImage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="image-wrapper-83">
            <Image src={casinoImage} alt="casinoImage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="image-wrapper-83">
            <Image src={casinoImage} alt="casinoImage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="image-wrapper-83">
            <Image src={casinoImage} alt="casinoImage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="image-wrapper-83">
            <Image src={casinoImage} alt="casinoImage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="image-wrapper-83">
            <Image src={casinoImage} alt="casinoImage" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
