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
import TripOverview from "./TripOverview";
import DetailedItinerary from "./DetailedItinerary";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="col-12 pt-8">
          <TripOverview />
        </div>

        {/* DETAILED ITINERARY */}
        <div className="col-12">
          <DetailedItinerary />
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
