"use client";
import React, { useState } from "react";
import "./dist/explore.css";
import Image from "next/image";

import destination from "../assets/theme.png";
import searchIconBlack from "../assets/Icon_Search_Black.png";
import planeDarkIcon from "../assets/Icon_PlaneDark.svg";
import treeIcon from "../assets/tree_dark.svg";
import activityIcon from "../assets/Icon_Activity.svg";
import locationIcon from "../assets/Icon_Location.svg";
import brochureIcon from "../assets/Icon_Brochure.svg";
import Link from "next/link";

import theme1 from "../assets/images/themes/Adventure.webp";
import theme2 from "../assets/images/themes/Beach_Sun.webp";
import theme3 from "../assets/images/themes/david.jpg";
import theme4 from "../assets/images/themes/Food_Wine.webp";
import theme5 from "../assets/images/themes/Honeymoon.webp";
import theme6 from "../assets/images/themes/Safari.webp";
import theme7 from "../assets/images/themes/yacht_charter.webp";

import planeIcon from "../assets/Icon_Plane.svg";
import doorIcon from "../assets/door_arrow.svg";
import homeIcon from "../assets/Icon_Home_dark.svg";
import searchIcon from "../assets/Icon_Search_gold.svg";
import bookmarkIcon from "../assets/Icon_Bookmarked_gold.svg";

export default function Explore() {
  const [themes, setThemes] = useState([
    {
      id: 1,
      name: "Adventure",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme1,
    },
    {
      id: 2,
      name: "Beach & Sun",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme2,
    },
    {
      id: 3,
      name: "Culture & History",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme3,
    },
    {
      id: 4,
      name: "Food & Wine",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme4,
    },
    {
      id: 5,
      name: "Honeymoon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme5,
    },
    {
      id: 6,
      name: "Safari",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme6,
    },
    {
      id: 7,
      name: "Yacht Charter",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme7,
    },
    {
      id: 2,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 3,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 4,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 5,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
  ]);
  const [selectedTab, setSelectedTab] = useState("themes");

  return (
    <main className="flex min-h-screen flex-col items-center  p-md-24 p-3 pb-[100px]">
      <div className="f-48 text-gold pt-8 pb-3">Luxury Travel</div>
      <div className="f-24 text-ice pb-5">
        Select the travel themes you serve
      </div>

      {/* themes bar  */}
      <div className="py-2 px-4 rounded-lg w-full" style={{ maxWidth: "80%" }}>
        <div className="row justify-between items-center">
          {/* title */}
          <div className="col-auto">
            <div
              className={
                (selectedTab === "themes" ? "" : "opacity-25 ") + " pointer"
              }
              onClick={() => {
                setSelectedTab("themes");
              }}
            >
              <div className="flex justify-center pb-2">
                <Image src={treeIcon} alt="treeIcon" />
              </div>
              <div className="f-24 text-darkblue poppins-semibold">Themes</div>
            </div>
          </div>
          <div className="col-auto">
            <div
              className={
                (selectedTab === "destinations" ? "" : "opacity-25 ") +
                " pointer"
              }
              onClick={() => {
                setSelectedTab("destinations");
              }}
            >
              <div className="flex justify-center pb-2">
                <Image src={locationIcon} alt="locationIcon" />
              </div>
              <div className="f-24 text-darkblue poppins-semibold">
                Destinations
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div
              className={
                (selectedTab === "trips" ? "" : "opacity-25 ") + " pointer"
              }
              onClick={() => {
                setSelectedTab("trips");
              }}
            >
              <div className="flex justify-center pb-2">
                <Image src={planeDarkIcon} alt="planeDarkIcon" />
              </div>
              <div className="f-24 text-darkblue poppins-semibold">Trips</div>
            </div>
          </div>
          <div className="col-auto">
            <div
              className={
                (selectedTab === "activities" ? "" : "opacity-25 ") + " pointer"
              }
              onClick={() => {
                setSelectedTab("activities");
              }}
            >
              <div className="flex justify-center pb-2">
                <Image src={activityIcon} alt="activityIcon" />
              </div>
              <div className="f-24 text-darkblue poppins-semibold">
                Activities
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div
              className={
                (selectedTab === "catalogues" ? "" : "opacity-25 ") + " pointer"
              }
              onClick={() => {
                setSelectedTab("catalogues");
              }}
            >
              <div className="flex justify-center pb-2">
                <Image src={brochureIcon} alt="brochureIcon" />
              </div>
              <div className="f-24 text-darkblue poppins-semibold">
                Catalogues
              </div>
            </div>
          </div>
          {/* search */}
          <div className="col-5">
            <div className="relative">
              <div className="search-icon cursor-pointer">
                <Image src={searchIconBlack} alt="search" />
              </div>
              <input
                className="bg-white text-darkblue pl-[56px] p-3 rounded-lg w-full"
                placeholder="Search themes"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>

      {/* themes list */}
      {selectedTab === "themes" && (
        <>
          <div
            className="grid grid-cols-12 gap-6 w-full mt-6"
            style={{ maxWidth: "80%" }}
          >
            {themes.map((item, index) => {
              return (
                <div
                  key={index}
                  className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 m-auto cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <Image
                    className="rounded-[15px] object-cover"
                    src={item.image}
                    alt="destination"
                    style={{
                      width: "300px",
                      height: "240px",
                      filter: "brightness(0.8)",
                    }}
                  />
                  <div className="f-22 text-ice poppins-medium line-clamp-1 pt-2">
                    {item.name}
                  </div>
                  <div className="text-grey f-16 line-clamp-2">
                    {item.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      {/* bottom bar */}
      <div className="w-full bottom-fixed text-center">
        <div className="flex items-center justify-center">
          <div className="rounded-full overflow-hidden backdrop-blur-xl py-4 px-4 mx-1 pointer">
            <Image
              src={planeIcon}
              alt="plane"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
          <div className="rounded-full overflow-hidden backdrop-blur-xl py-4 px-4 mx-1 pointer">
            <Image
              src={doorIcon}
              alt="door"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
          <div className="rounded-full overflow-hidden backdrop-blur-xl py-4 px-4 mx-1 pointer">
            <div className="rounded-full overflow-hidden bg-gold py-4 px-4">
              <Image
                src={homeIcon}
                alt="home"
                style={{ height: "25px", width: "25px" }}
              />
            </div>
          </div>
          <div className="rounded-full overflow-hidden backdrop-blur-xl py-4 px-4 mx-1 pointer">
            <Image
              src={bookmarkIcon}
              alt="bookmark"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
          <div className="rounded-full overflow-hidden backdrop-blur-xl py-4 px-4 mx-1 pointer">
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
