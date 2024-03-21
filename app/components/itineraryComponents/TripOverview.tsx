"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import avatarIcon from "../../assets/avatar.png";
import calendarIcon from "../../assets/Icon_Calendar.png";
import locationIcon from "../../assets/Icon_Location.png";
import treeIcon from "../../assets/goldTree.svg";

import Link from "next/link";
import ThumbsSwiper from "../ThumbsSwiper";

// importing images

import louvreImage from "../../assets/images/services/Louvre.jpg";
import lucerneImage from "../../assets/images/services/lucerne.jpg";
import montsaintImage from "../../assets/images/services/montsaintmich.jpg";
import triomphImage from "../../assets/images/services/Triomphe.jpg";
import notreImage from "../../assets/images/services/NotreDameCathedral.jpg";
import quartierImage from "../../assets/images/services/Quartier_Latin.jpg";
import alpsImage from "../../assets/images/services/alps.webp";
import bernImage from "../../assets/images/services/bern.jpg";
import eifelImage from "../../assets/images/services/EiffelTower.jpg";
import brandenImage from "../../assets/images/services/BrandenbergGate.webp";
import garnierImage from "../../assets/images/services/Garnier.webp";
import genevaImage from "../../assets/images/services/Geneva.webp";
import jungerfrauImage from "../../assets/images/services/jungfraujoch.jpg";
import interlakenImage from "../../assets/images/services/interlaken.jpg";

export default function TripOverview() {
  const [tempImages, setTempImages] = useState([
    louvreImage,
    lucerneImage,
    montsaintImage,
    triomphImage,
    notreImage,
    quartierImage,
    alpsImage,
    bernImage,
    eifelImage,
    brandenImage,
    garnierImage,
    genevaImage,
    jungerfrauImage,
    interlakenImage,
  ]);

  return (
    <div className="">
      {/* TRIP OVERVIEW + SWIPER */}
      <div className="f-32 poppins-semibold text-darkblue pb-5">
        Trip Overview
      </div>
      <div className="bg-white rounded-lg py-4 px-3">
        <div className="row ">
          <div className="col-7">
            <ThumbsSwiper tempImages={tempImages} />
          </div>
          <div className="col-5">
            <div className="flex justify-between pt-4">
              <div className="f-28 text-darkblue poppins-semibold">
                Jon&apos;s Trip to France
              </div>
              <div className="flex">
                <div className="pr-1">
                  <Image
                    src={locationIcon}
                    alt="location"
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
                <div className="">
                  <div className="f-28 text-darkblue poppins-semibold">
                    France
                  </div>
                  <div className="text-darkblue text-right">5 Days</div>
                </div>
              </div>
            </div>

            <div className="flex items-center pt-1">
              <div className="user-icon">
                <Image
                  src={avatarIcon}
                  alt="avatar"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="text-grey pl-4">Brit Ferguson</div>
            </div>

            <div className="text-darkblue f-14 py-4">
              Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do
              eiusmod tempor incididu Lorem ipsum dolor sit amet, sectetur
              adipiscing elit, sed do eiusmod tempor incididu Lorem ipsum dolor
              sit amet, sectetur adipiscing elit, sed do eiusmod tempor incididu
            </div>

            <div className="flex">
              <div className="bg-darkblue text-gold f-12 mx-1 px-2 py-2 rounded-lg flex items-center">
                <div className="pr-2">
                  <Image
                    style={{ width: "20px", height: "20px" }}
                    src={treeIcon}
                    alt="calendar gold"
                  />
                </div>
                <div className="">Theme</div>
              </div>
              <div className="bg-darkblue text-gold f-12 mx-1 px-2 py-2 rounded-lg flex items-center">
                <div className="pr-2">
                  <Image
                    style={{ width: "20px", height: "20px" }}
                    src={calendarIcon}
                    alt="calendar gold"
                  />
                </div>
                <div className="">Oct 11 - Oct 15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
