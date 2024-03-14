"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function ThumbsSwiper(props: any) {
  const { tempImages } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <div className="pb-4">
        <Swiper
          style={{
            height: "370px",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 rounded-lg overflow-hidden w-full"
        >
          {tempImages.map((image: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full h-full cursor-grab">
                  <Image
                    className="object-cover w-full h-full"
                    src={image}
                    alt={`Image-${index}`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper "
        style={{ height: "120px" }}
      >
        {tempImages.map((image: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className="rounded-lg h-full pointer">
                <Image
                  className="object-cover w-full h-full rounded-lg"
                  src={image}
                  alt={`Image-${index}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
