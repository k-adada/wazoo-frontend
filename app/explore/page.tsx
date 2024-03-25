"use client";
import React, { useState } from "react";
import "./dist/explore.css";
import Image from "next/image";

import searchIconBlack from "../assets/Icon_Search_Black.png";
import planeDarkIcon from "../assets/Icon_PlaneDark.svg";
import treeIcon from "../assets/tree_dark.svg";
import activityIcon from "../assets/Icon_Activity.svg";
import locationIcon from "../assets/Icon_Location.svg";
import brochureIcon from "../assets/Icon_Brochure.svg";
import Link from "next/link";

import planeIcon from "../assets/Icon_Plane.svg";
import doorIcon from "../assets/door_arrow.svg";
import homeIcon from "../assets/Icon_Home_dark.svg";
import searchIcon from "../assets/Icon_Search_gold.svg";
import bookmarkIcon from "../assets/Icon_Bookmarked_gold.svg";
import arrowDownIcon from "../assets/down_arrow_dark.svg";

import DestinationsSection from "../components/exploreComponents/DestinationsSection";
import ThemesSection from "../components/exploreComponents/ThemesSection";
import TripsSection from "../components/exploreComponents/TripsSection";
import ActivitiesSection from "../components/exploreComponents/ActivitiesSection";
import CataloguesSection from "../components/exploreComponents/CataloguesSection";

export default function Explore() {
  const [selectedTab, setSelectedTab] = useState("themes");

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 py-[100px] bg-grey">
      {/* themes bar  */}
      <div className="py-2 px-4 rounded-lg w-full" style={{ maxWidth: "95%" }}>
        <div className="row justify-between items-center">
          {/* title */}
          <div
            className={
              (selectedTab === "themes"
                ? "rounded-lg bg-blue"
                : "opacity-25 ") + " pointer py-2 col"
            }
            onClick={() => {
              setSelectedTab("themes");
            }}
          >
            <div className="flex justify-center pb-2">
              <Image src={treeIcon} alt="treeIcon" />
            </div>
            <div className="f-20 text-darkblue poppins-semibold text-center">
              Themes
            </div>
          </div>
          <div
            className={
              (selectedTab === "destinations"
                ? "rounded-lg bg-blue"
                : "opacity-25 ") + " pointer col py-2"
            }
            onClick={() => {
              setSelectedTab("destinations");
            }}
          >
            <div className="flex justify-center pb-2">
              <Image src={locationIcon} alt="locationIcon" />
            </div>
            <div className="f-20 text-darkblue poppins-semibold text-center">
              Destinations
            </div>
          </div>
          <div
            className={
              (selectedTab === "trips" ? "rounded-lg bg-blue" : "opacity-25 ") +
              " pointer py-2 col"
            }
            onClick={() => {
              setSelectedTab("trips");
            }}
          >
            <div className="flex justify-center pb-2">
              <Image src={planeDarkIcon} alt="planeDarkIcon" />
            </div>
            <div className="f-20 text-darkblue poppins-semibold text-center">
              Trips
            </div>
          </div>
          <div
            className={
              (selectedTab === "activities"
                ? "rounded-lg bg-blue"
                : "opacity-25 ") + " pointer col py-2"
            }
            onClick={() => {
              setSelectedTab("activities");
            }}
          >
            <div className="flex justify-center pb-2">
              <Image src={activityIcon} alt="activityIcon" />
            </div>
            <div className="f-20 text-darkblue poppins-semibold text-center">
              Activities
            </div>
          </div>
          <div
            className={
              (selectedTab === "catalogues"
                ? "rounded-lg bg-blue"
                : "opacity-25 ") + " pointer col py-2"
            }
            onClick={() => {
              setSelectedTab("catalogues");
            }}
          >
            <div className="flex justify-center pb-2">
              <Image src={brochureIcon} alt="brochureIcon" />
            </div>
            <div className="f-20 text-darkblue poppins-semibold text-center">
              Catalogues
            </div>
          </div>
          {/* search */}
          <div className="col-5">
            <div className="flex items-center">
              <div className="relative w-full">
                <div className="search-icon cursor-pointer">
                  <Image src={searchIconBlack} alt="search" />
                </div>
                <input
                  className="bg-white text-darkblue pl-[56px] p-3 rounded-lg w-full"
                  placeholder={"Search " + selectedTab}
                  type="text"
                />
              </div>
              <div className="pl-4 w-auto">
                <div className="bg-white rounded-lg py-1 px-3 text-darkblue flex items-center pointer">
                  <div className="pr-3">Filters</div>
                  <div className="">
                    <Image
                      src={arrowDownIcon}
                      alt="arrowDown"
                      width={40}
                      height={40}
                      style={{ height: "40px", width: "30px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* themes list */}
      {selectedTab === "themes" && <ThemesSection />}

      {/* destinations list */}
      {selectedTab === "destinations" && <DestinationsSection />}

      {/* trips list */}
      {selectedTab === "trips" && <TripsSection />}

      {/* activities list */}
      {selectedTab === "activities" && <ActivitiesSection />}

      {/* catalogues list */}
      {selectedTab === "catalogues" && <CataloguesSection />}

      {/* catalogues list */}
      {/* bottom bar */}
      <div className="w-full bottom-fixed text-center">
        <div className="flex items-center justify-center">
          <div
            className="rounded-full overflow-hidden backdrop-blur-xl py-4 px-4 mx-1 pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <Image
              src={planeIcon}
              alt="plane"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
          <div
            className="rounded-full overflow-hidden backdrop-blur-md py-4 px-4 mx-1 pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <Image
              src={doorIcon}
              alt="door"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
          <div
            className="rounded-full overflow-hidden backdrop-blur-md py-4 px-4 mx-1 pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <div className="rounded-full overflow-hidden bg-gold py-4 px-4">
              <Image
                src={homeIcon}
                alt="home"
                style={{ height: "25px", width: "25px" }}
              />
            </div>
          </div>
          <div
            className="rounded-full overflow-hidden backdrop-blur-md py-4 px-4 mx-1 pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <Image
              src={bookmarkIcon}
              alt="bookmark"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
          <div
            className="rounded-full overflow-hidden backdrop-blur-md py-4 px-4 mx-1 pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <Image
              src={searchIcon}
              alt="search"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
