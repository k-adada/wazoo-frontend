"use client";
import React, { useState } from "react";
import "./dist/myProposals.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Icons from "../Icons";
import Images from "../Images";

export default function MyProposals() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto">
            <div className="flex">
              <div
                className="flex items-center py-5 back-button"
                onClick={routerBack}
              >
                <Image src={Icons.backIcon} alt="back" />
                <div className="pl-2 text-darkblue">Back</div>
              </div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">
              My Proposals
            </div>
          </div>
        </div>

        {/* SAMPLE ITINERARY */}
        <div className="row rounded-lg bg-white py-3 shadow my-3">
          {/* TITLE */}
          <div className="col-auto self-center">
            <div className="">
              <Image
                src={Icons.itineraryIconGold}
                alt="search"
                className="m-auto"
              />
            </div>
            <div className="poppins-semibold text-darkblue f-20 text-center">
              Sample <br /> Itinerary
            </div>
          </div>
          {/* MAIN PROPOSAL IMAGE */}
          <div className="col-auto border-l-2">
            <div className="">
              <Image
                src={Images.athensImage}
                alt="image"
                width={1000}
                height={500}
                className="rounded-lg object-cover h-[150px] w-[250px]"
              />
            </div>
          </div>
          {/* PROPOSAL DETAILS */}
          <div className="col">
            <div className="flex justify-between">
              {/* TITLE */}
              <div className="poppins-semibold f-22 text-darkblue">
                France Sample Itinerary
              </div>

              {/* PRICE */}
              <div className="poppins-semibold f-22 text-darkblue">
                $14,800.00 USD
              </div>
            </div>
            <div className="pl-2">
              <div className="flex items-center text-darkblue">
                <div className="poppins-semibold f-16">Brit Ferguson</div>
                <div className="pl-2 poppins-medium f-14">@RoyalDMC</div>
              </div>
              <div className="poppins-regular text-grey f-12 line-clamp-1">
                This is a sample itinerary for France. It includes a visit to
                the Eiffel Tower, Louvre Museum, and many more.
              </div>
              {/* tags */}
              <div className="flex">
                <div className="service-tag"># Outdoor Activity</div>
              </div>
              {/* GENERAL INFO + BUTTONS */}
              <div className="flex justify-between self-end">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Image
                      src={Icons.calendarDarkIcon}
                      alt="calendar"
                      width={18}
                      height={18}
                    />
                    <div className="pl-1 poppins-regular f-10 text-grey">
                      5 days
                    </div>
                  </div>
                  <div className="flex items-center pl-5">
                    <Image
                      src={Icons.locationDarkIcon}
                      alt="location"
                      width={18}
                      height={18}
                    />
                    <div className="pl-1 poppins-regular f-10 text-grey">
                      France
                    </div>
                  </div>
                </div>
                <div className="flex poppins-medium">
                  <div className="dark-button text-gold flex items-center pointer">
                    Edit
                  </div>
                  <div className="dark-button text-gold flex items-center pointer ml-4">
                    Build Personal Itinerary
                  </div>
                  <div className="grey-status text-dark flex items-center ml-4">
                    TA Confirmed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PERSONAL ITINERARY */}
        <div className="row rounded-lg bg-white py-3 shadow my-3">
          {/* TITLE */}
          <div className="col-auto self-center">
            <div className="">
              <Image
                src={Icons.sideTagDarkIcon}
                alt="search"
                className="m-auto"
              />
            </div>
            <div className="poppins-semibold text-darkblue f-20 text-center">
              Personal <br /> Itinerary
            </div>
          </div>
          {/* MAIN PROPOSAL IMAGE */}
          <div className="col-auto border-l-2">
            <div className="">
              <Image
                src={Images.australiaImage}
                alt="image"
                width={1000}
                height={500}
                className="rounded-lg object-cover h-[150px] w-[250px]"
              />
            </div>
          </div>
          {/* PROPOSAL DETAILS */}
          <div className="col">
            <div className="flex justify-between">
              {/* TITLE */}
              <div className="poppins-semibold f-22 text-darkblue">
                Jon&apos;s Trip to France
              </div>

              {/* PRICE */}
              <div className="poppins-semibold f-22 text-darkblue">
                $14,800.00 USD
              </div>
            </div>
            <div className="pl-2">
              <div className="flex items-center text-darkblue">
                <div className="poppins-semibold f-16">Brit Ferguson</div>
                <div className="pl-2 poppins-medium f-14">@RoyalDMC</div>
              </div>
              <div className="poppins-regular text-grey f-12 line-clamp-1">
                This is a sample itinerary for France. It includes a visit to
                the Eiffel Tower, Louvre Museum, and many more.
              </div>
              {/* tags */}
              <div className="flex">
                <div className="service-tag"># Outdoor Activity</div>
              </div>
              {/* GENERAL INFO + BUTTONS */}
              <div className="flex justify-between self-end">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Image
                      src={Icons.calendarDarkIcon}
                      alt="calendar"
                      width={18}
                      height={18}
                    />
                    <div className="pl-1 poppins-regular f-10 text-grey">
                      5 days
                    </div>
                  </div>
                  <div className="flex items-center pl-5">
                    <Image
                      src={Icons.locationDarkIcon}
                      alt="location"
                      width={18}
                      height={18}
                    />
                    <div className="pl-1 poppins-regular f-10 text-grey">
                      France
                    </div>
                  </div>
                </div>
                <div className="flex poppins-medium">
                  <div className="dark-button text-gold flex items-center pointer">
                    Edit
                  </div>

                  <div className="grey-status text-dark flex items-center ml-4">
                    Pending TA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
