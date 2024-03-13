"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import saveIcon from "../../assets/Icon_Save.png";
import tourEffelImage from "../../assets/tour_effel.jpg";
import calendarIcon from "../../assets/Icon_Calendar.png";
import arrowDownIcon from "../../assets/down_arrow_dark.png";
import locationIcon from "../../assets/Icon_Location.png";
import clockIcon from "../../assets/Icon_Time.png";
import dollarIcon from "../../assets/Icon_Dollars.png";

import Link from "next/link";
import ServicesSwiper from "../servicesSwiper";

export default function CataloguePreview() {
  const [itinerariesCollapsed, setItinerariesCollapsed] = useState(false);
  const [servicesCollapsed, setServicesCollapsed] = useState(false);

  return (
    <div className="container-fluid transport">
      <div className="row bg-white rounded-lg">
        {/* TITLE AND LOGO HERE */}
        <div className="col-12 pb-10">
          <div className="py-5">
            <div className="">
              <Image
                src={tourEffelImage}
                alt="tourEffelImage"
                className="w-full rounded-lg object-cover"
                style={{ height: "300px" }}
              />
            </div>
            <div className="f-32 poppins-medium text-darkblue pt-8">
              Catalogue Name
            </div>
            <div className="text-grey f-24 py-2">
              Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do
              eiusmod tempor incididun Lorem ipsum dolor sit amet, sectetur
              adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor
              sit amet, sectetur adipiscing elit, sed do eiusmod tempor
              incididun Lorem ipsum dolor sit amet, sectetur adipiscing elit,
              sed do eiusmod tempor incididun Lorem ipsum dolor sit amet,
              sectetur adipiscing elit, sed do eiusmod tempor incididun Lorem
              ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod
              tempor incididun
            </div>

            <div className="flex">
              <div className="bg-darkblue text-gold f-12 mx-1 px-2 py-2 rounded-lg flex items-center">
                <div className="pr-2">
                  <Image
                    style={{ width: "18px", height: "18px" }}
                    src={calendarIcon}
                    alt="calendar gold"
                  />
                </div>
                <div className="">Oct 11 - Oct 15</div>
              </div>
              <div className="bg-darkblue text-gold f-12 mx-1 px-2 py-2 rounded-lg flex items-center">
                <div className="pr-2">
                  <Image
                    style={{ width: "18px", height: "18px" }}
                    src={calendarIcon}
                    alt="calendar gold"
                  />
                </div>
                <div className="">Seasonality</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 pb-8">
          <div className="flex rounded-lg bg-blue items-center justify-between px-8">
            <div className="f-24 py-2 poppins-semibold">Sample Itineraries</div>
            <div
              className="pointer"
              onClick={() => {
                setItinerariesCollapsed(!itinerariesCollapsed);
              }}
            >
              <Image src={arrowDownIcon} alt="arrow down" />
            </div>
          </div>
        </div>

        {!itinerariesCollapsed && (
          <>
            {/* SAMPLE ITINERARIES  */}
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <div className="row rounded-lg py-2">
                    <div className="col-12 pb-4">
                      <ServicesSwiper images={[]} />
                    </div>
                    <div className="col-12">
                      <div className="f-28 text-darkblue poppins-medium">
                        Itinerary Name {index + 1}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="f-20 text-grey pt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Veniam voluptates eveniet iste corrupti! Cum,
                      </div>
                    </div>

                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <Image src={locationIcon} alt="location" />
                        <div className="text-darkblue">Paris, France</div>
                      </div>
                    </div>

                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <Image src={clockIcon} alt="time" />
                        <div className="text-darkblue">3h</div>
                      </div>
                    </div>

                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <Image src={calendarIcon} alt="calendar" />
                        <div className="text-darkblue">Oct 11 - Oct 15</div>
                      </div>
                    </div>
                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <Image src={dollarIcon} alt="dollar sign" />
                        <div className="text-darkblue">$350</div>
                      </div>
                    </div>
                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <div className="text-darkblue">Outdoor Activity</div>
                      </div>
                    </div>
                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <div className="text-darkblue">Sub-type</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}

        <div className="col-12 py-8">
          <div className="flex rounded-lg bg-blue items-center justify-between px-8">
            <div className="f-24 py-2 poppins-semibold">Services</div>
            <div
              className="pointer"
              onClick={() => {
                setServicesCollapsed(!servicesCollapsed);
              }}
            >
              <Image src={arrowDownIcon} alt="arrow down" />
            </div>
          </div>
        </div>

        {!servicesCollapsed && (
          <>
            {/* Services */}
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <div className="row rounded-lg py-2">
                    <div className="col-12 pb-4">
                      <ServicesSwiper images={[]} />
                    </div>
                    <div className="col-12">
                      <div className="flex justify-between items-center">
                        <div className="f-28 text-darkblue poppins-medium">
                          Itinerary Name {index + 1}
                        </div>
                        <div className="flex items-center">
                          <div className="f-30 poppins-semibold text-darkblue">
                            $ 350
                          </div>
                          <div className="f-16 text-darkblue pl-2">
                            /default
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="f-20 text-grey pt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Veniam voluptates eveniet iste corrupti! Cum,
                      </div>
                    </div>

                    <div className="col-auto pr-2 py-1">
                      <div className="bg-blue rounded-xl px-2 text-darkblue">
                        #Outdoor
                      </div>
                    </div>

                    <div className="col-auto pr-2 py-1">
                      <div className="bg-blue rounded-xl px-2 text-darkblue">
                        #Beach
                      </div>
                    </div>

                    <div className="col-auto pr-2 py-1">
                      <div className="bg-blue rounded-xl px-2 text-darkblue">
                        #Adventure
                      </div>
                    </div>

                    <div className="col-auto pr-2 py-1">
                      <div className=" flex">
                        <Image src={dollarIcon} alt="dollar sign" />
                        <div className="text-darkblue">$350</div>
                      </div>
                    </div>
                    <div className="col-auto pr-2 py-1">
                      <div className=" flex">
                        <div className="text-darkblue">Outdoor Activity</div>
                      </div>
                    </div>
                    <div className="col-auto pr-2 py-1">
                      <div className=" flex">
                        <div className="text-darkblue">Sub-type</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {/* save as draft */}
        <div className="col-auto pt-[64px]">
          <Link href="/catalogues">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={saveIcon} alt="saveIcon" />
                <div className="pl-4">Submit</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
