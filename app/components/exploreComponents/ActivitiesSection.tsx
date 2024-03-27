"use client";
import React, { useState } from "react";
import Image from "next/image";

import ServicesSwiper from "../servicesSwiper";
import sunIcon from "../../assets/Sun.svg";
import locationIcon from "../../assets/Icon_Location.png";
import clockIcon from "../../assets/Icon_Time.png";
import calendarIcon from "../../assets/Icon_Calendar_dark.png";
import treeIcon from "../../assets/tree_dark.svg";
import bookmarkIcon from "../../assets/Icon_Bookmarked_gold.svg";
import unbookmarkIcon from "../../assets/Icon_Unbookmark.svg";
import louvreImage from "../../assets/images/services/Louvre.jpg";
import lucerneImage from "../../assets/images/services/lucerne.jpg";
import montsaintImage from "../../assets/images/services/montsaintmich.jpg";
import triomphImage from "../../assets/images/services/Triomphe.jpg";
import notreImage from "../../assets/images/services/NotreDameCathedral.jpg";
import quartierImage from "../../assets/images/services/Quartier_Latin.jpg";
import Images from "@/app/Images";
import Icons from "@/app/Icons";

export default function ActivitiesSection(props: any) {
  const { popup, setOpenPreview, setCustomServices, customServices } = props;

  const images = [
    louvreImage,
    lucerneImage,
    montsaintImage,
    triomphImage,
    notreImage,
    quartierImage,
  ];

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 mt-2"
      style={{ maxWidth: "95%", marginLeft: "auto", marginRight: "auto" }}
    >
      {popup && (
        <div className="px-5 py-2">
          <div
            className="row bg-white rounded-lg py-2 pointer h-full justify-start items-start"
            onClick={() => {
              setOpenPreview(true);
              setCustomServices({
                open: true,
                services: customServices?.services || [],
              });
            }}
          >
            <div className="col-12 pb-4 px-2">
              <div className="image-wrapper-83 border-dashed">
                <div
                  className="bg-darkblue rounded-full p-10 absolute w-[80px] h-[80px] top-1/2 left-1/2"
                  style={{ transform: "translate(-50%,-50%)" }}
                >
                  <Image
                    src={Icons.addIconGold}
                    alt="add icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center pt-4">
                <div className="f-20 text-darkblue poppins-medium">
                  Add Custom Service
                </div>

                <div className="ml-auto flex items-center">
                  <div className="f-16 text-grey poppins-semibold pr-2">
                    {customServices?.services.length}
                  </div>
                </div>
              </div>

              <div className="f-14 text-grey pt-1 line-clamp-4">
                Can't find what you need? Tell us, and we'll create a custom
                service just for you
              </div>
            </div>
          </div>
        </div>
      )}
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div className="px-5 py-2" key={index}>
            <div
              className="row bg-white rounded-lg py-2 pointer"
              onClick={() => {
                setOpenPreview(true);
              }}
            >
              <div className="col-12 pb-4 px-2">
                <div className="image-wrapper-83">
                  <Image src={images[5 - index]} alt="casinoImage" />
                </div>
                {!popup && (
                  <div className="absolute top-2 right-4 pointer">
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
                )}
              </div>
              <div className="col-12 px-2">
                <div className="flex items-center">
                  <div className="f-20 text-darkblue poppins-medium">
                    Service Name {index + 1}
                  </div>

                  <div className="ml-auto flex items-center">
                    <div className="f-16 text-grey poppins-semibold pr-2">
                      $350
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 px-2 pb-3">
                <div className="f-14 text-grey pt-1 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam voluptates eveniet iste corrupti! Cum,
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image className="mr-1" src={locationIcon} alt="location" />
                  <div className="text-darkblue">Paris, France</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image className="mr-1" src={calendarIcon} alt="calendar" />
                  <div className="text-darkblue">Oct 1 - Dec 31</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image className="mr-1" src={treeIcon} alt="treeIcon" />
                  <div className="text-darkblue">Kayak</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
