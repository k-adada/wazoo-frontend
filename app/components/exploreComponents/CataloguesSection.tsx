"use client";
import React, { useState } from "react";
import Image from "next/image";

import ServicesSwiper from "../servicesSwiper";
import sunIcon from "../../assets/Sun.svg";
import locationIcon from "../../assets/Icon_Location.png";
import clockIcon from "../../assets/Icon_Time.png";
import calendarIcon from "../../assets/Icon_Calendar_dark.png";
import treeIcon from "../../assets/tree_dark.svg";

import notificationIcon from "../../assets/Icon_Notification_Received.png";
import avatarIcon from "../../assets/avatar.png";
import addIcon from "../../assets/Icon_Add.png";
import backIcon from "../../assets/Icon_Back.png";
import serviceEmptyIcon from "../../assets/services_empty.png";
import listIcon from "../../assets/Icon_List_View.png";

import Link from "next/link";
import threeDotsIcon from "../../assets/three_dots_white.png";
import casinoImage from "../../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";
import speakerIcon from "../../assets/Icon_Campaigns.svg";
import eyeIcon from "../../assets/Icon_Preview.svg";

import louvreImage from "../../assets/images/services/Louvre.jpg";
import lucerneImage from "../../assets/images/services/lucerne.jpg";
import montsaintImage from "../../assets/images/services/montsaintmich.jpg";
import triomphImage from "../../assets/images/services/Triomphe.jpg";
import notreImage from "../../assets/images/services/NotreDameCathedral.jpg";
import quartierImage from "../../assets/images/services/Quartier_Latin.jpg";

export default function CataloguesSection() {
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
          <div className="col-2xl-3 col-lg-4 col-md-6 py-3 px-5" key={index}>
            <div className="row bg-white rounded-lg py-2 bg-white catalogue-card">
              <div className="col-12 pb-4 px-2">
                <div className="image-wrapper-83">
                  <Image src={casinoImage} alt="casinoImage" />
                </div>
                <div className="absolute top-2 right-8 pointer">
                  <Image
                    src={threeDotsIcon}
                    alt="three dots"
                    className="three-dots"
                  />
                </div>
              </div>
              <div className="col-12 px-2 flex justify-between">
                <div className="f-20 text-darkblue poppins-medium">
                  Service Catalogue Name {index + 1}
                </div>
              </div>

              <div className="col-12 px-2">
                <div className="text-grey pt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam voluptates eveniet iste corrupti! Cum,
                </div>
              </div>

              <div className="col-auto px-2 py-1">
                <div className="bg-grey text-grey rounded-xl px-2">
                  #Outdoor activity
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="bg-grey text-grey rounded-xl px-2">
                  #Beach&Sun
                </div>
              </div>

              <div className="col-auto px-2 py-1">
                <div className="bg-grey text-grey rounded-xl px-2">
                  #Snow&Skii
                </div>
              </div>

              <div className="col-12 flex items-center justify-between pt-4">
                <div className="text-darkblue f-14 poppins-medium">
                  Packages
                  <div className="flex">
                    <Image
                      className="rounded-full"
                      style={{
                        width: "36px",
                        height: "36px",
                      }}
                      src={casinoImage}
                      alt="casino"
                    />
                    <Image
                      className="rounded-full"
                      style={{
                        width: "36px",
                        height: "36px",
                        transform: "translateX(-50%)",
                      }}
                      src={casinoImage}
                      alt="casino"
                    />
                    <Image
                      className="rounded-full"
                      style={{
                        width: "36px",
                        height: "36px",
                        transform: "translateX(-100%)",
                      }}
                      src={casinoImage}
                      alt="casino"
                    />
                    <Image
                      className="rounded-full"
                      style={{
                        width: "36px",
                        height: "36px",
                        transform: "translateX(-150%)",
                      }}
                      src={casinoImage}
                      alt="casino"
                    />
                  </div>
                </div>
                <div className="text-darkblue f-14 poppins-medium pr-10">
                  Services
                  <div className="flex">
                    <Image
                      className="rounded-full"
                      style={{
                        width: "36px",
                        height: "36px",
                      }}
                      src={casinoImage}
                      alt="casino"
                    />
                    <Image
                      className="rounded-full"
                      style={{
                        width: "36px",
                        height: "36px",
                        transform: "translateX(-50%)",
                      }}
                      src={casinoImage}
                      alt="casino"
                    />
                    <Image
                      className="rounded-full"
                      style={{
                        width: "36px",
                        height: "36px",
                        transform: "translateX(-100%)",
                      }}
                      src={casinoImage}
                      alt="casino"
                    />
                    <Image
                      className="rounded-full"
                      style={{
                        width: "36px",
                        height: "36px",
                        transform: "translateX(-150%)",
                      }}
                      src={casinoImage}
                      alt="casino"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
