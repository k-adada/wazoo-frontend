"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function ThumbsSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt={"nature-1"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="nature-2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="nature-2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="nature-2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                alt="nature-2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt="nature-2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                alt="nature-2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                alt="nature-2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-9.jpg"
                alt="nature-2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="https://swiperjs.com/demos/images/nature-10.jpg"
                alt="nature-2"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Swiper
        onSwiper={() => setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper "
        style={{ height: "120px" }}
      >
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg h-full">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://swiperjs.com/demos/images/nature-10.jpg"
              alt="nature-2"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
