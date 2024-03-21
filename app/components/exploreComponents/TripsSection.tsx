"use client";
import React, { useState } from "react";
import Image from "next/image";

import ServicesSwiper from "../../components/servicesSwiper";
import sunIcon from "../../assets/Sun.svg";
import bookmarkIcon from "../../assets/Icon_Bookmarked_gold.svg";
import unbookmarkIcon from "../../assets/Icon_Unbookmark.svg";
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
import Link from "next/link";

export default function TripsSection() {
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
            <Link href="/trip">
              <div className="row bg-white rounded-lg py-2">
                <div className="col-12 pb-4 px-2">
                  <div className="image-wrapper-83">
                    <Image src={images[index]} alt="casinoImage" />
                  </div>

                  <div className="absolute top-2 right-8 pointer">
                    <div
                      className="py-2 px-2 rounded-full backdrop-blur-xl"
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    >
                      <Image
                        src={unbookmarkIcon}
                        alt="three dots"
                        className="three-dots"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 px-2">
                  <div className="f-20 text-darkblue poppins-medium">
                    Itinerary Name {index + 1}
                  </div>
                </div>
                <div className="col-12 px-2">
                  <div className="f-16 text-grey pt-1 line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam voluptates eveniet iste corrupti! Cum,
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image className="mr-2" src={locationIcon} alt="location" />
                    <div className="text-darkblue">Destination</div>
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image className="mr-2" src={clockIcon} alt="time" />
                    <div className="text-darkblue">5 days</div>
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image className="mr-2" src={calendarIcon} alt="calendar" />
                    <div className="text-darkblue">Oct 11 - Oct 15</div>
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image className="mr-2" src={treeIcon} alt="tree icon" />
                    <div className="text-darkblue">Theme</div>
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image className="mr-2" src={sunIcon} alt="sun icon" />
                    <div className="text-darkblue">Seasonality</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
