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

import alpsImage from "../assets/images/services/alps.webp";
import bernImage from "../assets/images/services/bern.jpg";
import eifelImage from "../assets/images/services/EiffelTower.jpg";
import brandenImage from "../assets/images/services/BrandenbergGate.webp";
import garnierImage from "../assets/images/services/Garnier.webp";
import genevaImage from "../assets/images/services/Geneva.webp";
import quartierImage from "../assets/images/services/Quartier_Latin.jpg";
import jungerfrauImage from "../assets/images/services/jungfraujoch.jpg";
import interlakenImage from "../assets/images/services/interlaken.jpg";

export default function ServicesSwiper(props: any) {
  const { images } = props;
  const currentImages =
    images.length > 0
      ? images
      : [
          alpsImage,
          bernImage,
          eifelImage,
          brandenImage,
          garnierImage,
          genevaImage,
          quartierImage,
          jungerfrauImage,
          interlakenImage,
        ];

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
        {currentImages.map((image: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="image-wrapper-83">
              <Image src={image} alt={"image" + index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
