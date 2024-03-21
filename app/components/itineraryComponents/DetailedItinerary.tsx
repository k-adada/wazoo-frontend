"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import mercedesImage from "../../assets/mercedes.webp";
import locationIcon from "../../assets/Icon_Location.png";

import casinoImage from "../../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";

// importing images

import louvreImage from "../../assets/images/services/Louvre.jpg";
import lucerneImage from "../../assets/images/services/lucerne.jpg";
import montsaintImage from "../../assets/images/services/montsaintmich.jpg";
import triomphImage from "../../assets/images/services/Triomphe.jpg";

export default function DetailedItinerary() {
  return (
    <div className="">
      {/* DETAILED ITINERARY */}
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun...
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
                      <div className="f-10 text-grey pt-1">Paris, France</div>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun...
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
                      <div className="f-10 text-grey pt-1">Paris, France</div>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun...
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
                      <div className="f-10 text-grey pt-1">Paris, France</div>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun...
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
                      <div className="f-10 text-grey pt-1">Paris, France</div>
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
  );
}
