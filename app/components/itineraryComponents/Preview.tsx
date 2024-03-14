"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import saveIcon from "../../assets/Icon_Save.png";
import avatarIcon from "../../assets/avatar.png";
import middleEastLogo from "../../assets/middle_east_yours.png";
import calendarIcon from "../../assets/Icon_Calendar.png";
import mercedesImage from "../../assets/mercedes.webp";
import locationIcon from "../../assets/Icon_Location.png";
import treeIcon from "../../assets/goldTree.svg";
import casinoImage from "../../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";

import Totals from "../pricingComponents/Totals";
import MyPricing from "../pricingComponents/MyPricing";
import PricingDetails from "../pricingComponents/PricingDetails";
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

export default function Preview(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;
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

  useEffect(() => {
    setStepsDone([
      "tripDetails",
      "accommodation",
      "activities",
      "transport",
      "pricing",
    ]);
  }, [setStepsDone]);

  return (
    <div className="container-fluid transport">
      <div className="row">
        {/* TITLE AND LOGO HERE */}
        <div className="col-12 pt-5">
          <div className="bg-white rounded-lg py-5 px-5 text-center">
            <div className="">
              <Image
                src={middleEastLogo}
                alt="middleEastLogo"
                style={{ height: "120px", width: "120px" }}
                className="m-auto"
              />
            </div>
            <div className="f-40 poppins-medium text-darkblue">
              Middle East Made Yours
            </div>
          </div>
        </div>

        {/* TRIP OVERVIEW + SWIPER */}
        <div className="col-12">
          <div className="f-32 poppins-semibold text-darkblue pt-8">
            Trip Overview
          </div>
        </div>
        <div className="col-12 pt-5">
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
                  adipiscing elit, sed do eiusmod tempor incididu Lorem ipsum
                  dolor sit amet, sectetur adipiscing elit, sed do eiusmod
                  tempor incididu
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

        {/* DETAILED ITINERARY */}
        <div className="col-12">
          <div className="f-32 poppins-semibold text-darkblue pt-8">
            Detailed Itinerary
          </div>
          <div className="bg-white rounded-lg py-4 px-3">
            <div className="row">
              <div className="col-7">
                {/* 1 day itinerary */}
                <div className="row">
                  <div className="col-4 border-right">
                    <div className="">
                      <div className="f-20 text-darkblue poppins-bold pb-3">
                        Day 1
                      </div>
                      <div className="f-12 text-darkblue poppins-medium">
                        Upon arrival to Paris you will be met by your driver,
                        transfer to the hotel for check in
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="f-28 poppins-bold text-darkblue">
                      May 1, 2024
                    </div>
                    <div className="flex pb-4">
                      <div className="">
                        <Image src={locationIcon} alt="location icon" />
                      </div>
                      <div className="poppins-semibold text-darkblue f-20 pl-1">
                        Arrive in Paris, France
                      </div>
                    </div>

                    {/* SERVICE CARD  */}
                    <div className="bg-grey flex rounded-lg px-3 py-3">
                      <div className="" style={{ minWidth: "145px" }}>
                        <div className="image-wrapper-72">
                          <Image
                            src={mercedesImage}
                            alt="car"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="pl-4">
                        <div className="f-16 text-darkblue poppins-semibold">
                          Transfer from CDG to The Ritz
                        </div>
                        <div className="f-12 text-grey">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididun...
                        </div>

                        <div className="flex">
                          <div className="f-10 bg-darkgrey rounded-full py-1 px-2">
                            #Outdoor Activity
                          </div>
                        </div>
                        <div className="flex items-center pt-1">
                          <div className="pr-1">
                            <Image
                              src={locationIcon}
                              alt="location"
                              style={{ height: "14px", width: "14px" }}
                            />
                          </div>
                          <div className="f-10 text-grey pt-1">
                            Paris, France
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SERVICE CARD  */}
                    <div className="bg-grey flex rounded-lg px-3 py-3 mt-3">
                      <div className="" style={{ minWidth: "145px" }}>
                        <div className="image-wrapper-72">
                          <Image
                            src={casinoImage}
                            alt="casino"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="pl-4">
                        <div className="f-16 text-darkblue poppins-semibold">
                          Check-in at The Ritz
                        </div>
                        <div className="f-12 text-grey">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididun...
                        </div>

                        <div className="flex">
                          <div className="f-10 bg-darkgrey rounded-full py-1 px-2">
                            #Outdoor Activity
                          </div>
                        </div>
                        <div className="flex items-center pt-1">
                          <div className="pr-1">
                            <Image
                              src={locationIcon}
                              alt="location"
                              style={{ height: "14px", width: "14px" }}
                            />
                          </div>
                          <div className="f-10 text-grey pt-1">
                            Paris, France
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row pt-6">
                  <div className="col-4 border-right">
                    <div className="">
                      <div className="f-20 text-darkblue poppins-bold pb-3">
                        Day 2
                      </div>
                      <div className="f-12 text-darkblue poppins-medium">
                        Upon arrival to Paris you will be met by your driver,
                        transfer to the hotel for check in
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="f-28 poppins-bold text-darkblue">
                      May 2, 2024
                    </div>
                    <div className="flex pb-4">
                      <div className="">
                        <Image src={locationIcon} alt="location icon" />
                      </div>
                      <div className="poppins-semibold text-darkblue f-20 pl-1">
                        Paris, France
                      </div>
                    </div>

                    {/* SERVICE CARD  */}
                    <div className="bg-grey flex rounded-lg px-3 py-3">
                      <div className="" style={{ minWidth: "145px" }}>
                        <div className="image-wrapper-72">
                          <Image
                            src={louvreImage}
                            alt="louvre"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="pl-4">
                        <div className="f-16 text-darkblue poppins-semibold">
                          Louvre Museum
                        </div>
                        <div className="f-12 text-grey">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididun...
                        </div>

                        <div className="flex">
                          <div className="f-10 bg-darkgrey rounded-full py-1 px-2">
                            #Culture
                          </div>
                          <div className="f-10 bg-darkgrey rounded-full py-1 px-2 ml-1">
                            #History
                          </div>
                        </div>
                        <div className="flex items-center pt-1">
                          <div className="pr-1">
                            <Image
                              src={locationIcon}
                              alt="location"
                              style={{ height: "14px", width: "14px" }}
                            />
                          </div>
                          <div className="f-10 text-grey pt-1">
                            Paris, France
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SERVICE CARD  */}
                    <div className="bg-grey flex rounded-lg px-3 py-3 mt-3">
                      <div className="" style={{ minWidth: "145px" }}>
                        <div className="image-wrapper-72">
                          <Image
                            src={triomphImage}
                            alt="car"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="pl-4">
                        <div className="f-16 text-darkblue poppins-semibold">
                          Arc De Triomphe
                        </div>
                        <div className="f-12 text-grey">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididun...
                        </div>

                        <div className="flex">
                          <div className="f-10 bg-darkgrey rounded-full py-1 px-2 ">
                            #History
                          </div>
                          <div className="f-10 bg-darkgrey rounded-full py-1 px-2 ml-1">
                            #Landmark
                          </div>
                        </div>
                        <div className="flex items-center pt-1">
                          <div className="pr-1">
                            <Image
                              src={locationIcon}
                              alt="location"
                              style={{ height: "14px", width: "14px" }}
                            />
                          </div>
                          <div className="f-10 text-grey pt-1">
                            Paris, France
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-5">
                <iframe
                  className="w-full rounded-lg"
                  height="744"
                  style={{ border: "0" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2d4tECWsMVm3Us4dSM4q84TV6O9XG588
    &q=Paris+France"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 pt-5">
          <Totals />
        </div>

        <div className="col-12 pt-5">
          <MyPricing />
        </div>

        <div className="col-12 pt-5">
          <PricingDetails />
        </div>

        {/* save as draft */}
        <div className="col-auto pt-[64px]">
          <Link href="/itineraries">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={saveIcon} alt="saveIcon" />
                <div className="pl-4">Save as Draft</div>
              </div>
            </div>
          </Link>
        </div>
        {/* NEXT */}
        <div className="col-auto pt-[64px]">
          <div
            className="dark-button text-gold poppins-medium cursor-pointer"
            onClick={() => {
              setCurrentStep("review");
              setStepsDone([...stepsDone, "review"]);
            }}
          >
            <div className="flex items-center h-full">
              <div className="">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
