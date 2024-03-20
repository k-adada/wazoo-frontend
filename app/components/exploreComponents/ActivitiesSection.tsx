"use client";
import React, { useState } from "react";
import Image from "next/image";

import ServicesSwiper from "../servicesSwiper";
import sunIcon from "../../assets/Sun.svg";
import locationIcon from "../../assets/Icon_Location.png";
import clockIcon from "../../assets/Icon_Time.png";
import calendarIcon from "../../assets/Icon_Calendar_dark.png";
import treeIcon from "../../assets/tree_dark.svg";
import louvreImage from "../../assets/images/services/Louvre.jpg";
import lucerneImage from "../../assets/images/services/lucerne.jpg";
import montsaintImage from "../../assets/images/services/montsaintmich.jpg";
import triomphImage from "../../assets/images/services/Triomphe.jpg";
import notreImage from "../../assets/images/services/NotreDameCathedral.jpg";
import quartierImage from "../../assets/images/services/Quartier_Latin.jpg";

export default function ActivitiesSection() {
  const images = [
    louvreImage,
    lucerneImage,
    montsaintImage,
    triomphImage,
    notreImage,
    quartierImage,
  ];

  return (
    <div className="row mt-6" style={{ maxWidth: "80%" }}>
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div className="col-3 px-5 py-2" key={index}>
            <div className="row bg-white rounded-lg py-2">
              <div className="col-12 pb-4 px-2">
                <div className="image-wrapper-83">
                  <Image src={images[index]} alt="casinoImage" />
                </div>
              </div>
              <div className="col-12 px-2">
                <div className="flex items-center">
                  <div className="f-20 text-darkblue poppins-medium">
                    Service Name {index + 1}
                  </div>

                  <div className="ml-auto flex items-center">
                    <div className="f-24 text-darkblue poppins-semibold">
                      $ 350
                    </div>
                    <span className="text-darkblue">/Default</span>
                  </div>
                </div>
              </div>
              <div className="col-12 px-2">
                <div className="f-16 text-grey pt-1 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam voluptates eveniet iste corrupti! Cum,
                </div>
              </div>

              <div className="col-auto px-2 py-1">
                <div className="bg-lineslight rounded-full py-1 px-2">
                  <div className="text-darkblue f-14">#Outdoor activity</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="bg-lineslight rounded-full py-1 px-2">
                  <div className="text-darkblue f-14">#Beach</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="bg-lineslight rounded-full py-1 px-2">
                  <div className="text-darkblue f-14">#Adventure</div>
                </div>
              </div>

              <div className="col-auto px-2 py-1">
                <div className="flex items-center">
                  <Image className="mr-2" src={locationIcon} alt="location" />
                  <div className="text-darkblue">Paris, France</div>
                </div>
              </div>

              <div className="col-auto px-2 py-1">
                <div className="flex items-center">
                  <Image className="mr-2" src={calendarIcon} alt="calendar" />
                  <div className="text-darkblue">Oct 11 - Oct 15</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
