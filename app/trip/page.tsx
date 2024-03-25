"use client";
import React, { useEffect, useState } from "react";
import "./dist/trip.css";
import Image from "next/image";

import { useRouter } from "next/navigation";
import middleEastLogo from "../assets/middle_east_yours.png";

import backIcon from "../assets/Icon_Back.png";
import TripOverview from "../components/itineraryComponents/TripOverview";
import DetailedItinerary from "../components/itineraryComponents/DetailedItinerary";
import Link from "next/link";

export default function Catalogue() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto">
            <div
              className="flex items-center py-5 back-button"
              onClick={routerBack}
            >
              <Image src={backIcon} alt="back" />
              <div className="pl-2 text-darkblue">Back</div>
            </div>
          </div>

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

          {/* REQUEST A TRIP BUTTON */}
          <div className="col-12">
            <div
              className="dark-button pointer ml-auto mt-10"
              style={{ width: "155px" }}
            >
              <Link href="/explore-trip-request">
                <div className="flex items-center justify-center h-full text-gold w-full">
                  Request a Trip
                </div>
              </Link>
            </div>
          </div>
          {/* TRIP OVERVIEW + SWIPER */}
          <div className="col-12">
            <TripOverview />
          </div>

          {/* DETAILED ITINERARY */}
          <div className="col-12">
            <DetailedItinerary />
          </div>
        </div>
      </div>
    </main>
  );
}
