"use client";
import React, { useState } from "react";
import Image from "next/image";

import ServicesSwiper from "../servicesSwiper";
import Icons from "@/app/Icons";
import Images from "@/app/Images";

export default function CataloguePreview() {
  const [itinerariesCollapsed, setItinerariesCollapsed] = useState(false);
  const [servicesCollapsed, setServicesCollapsed] = useState(false);
  const itineraries = [
    {
      id: 1,
      name: "Itinerary Name 1",
      images: [Images.spain, Images.italyImage, Images.geneva],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      time: "3h",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["Outdoor Activity", "Sub-type"],
    },
    {
      id: 2,
      name: "Itinerary Name 2",
      images: [Images.spain, Images.italyImage, Images.geneva],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      time: "3h",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["Outdoor Activity", "Sub-type"],
    },
    {
      id: 3,
      name: "Itinerary Name 3",
      images: [Images.spain, Images.italyImage, Images.geneva],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      time: "3h",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["Outdoor Activity", "Sub-type"],
    },
    {
      id: 4,
      name: "Itinerary Name 4",
      images: [Images.spain, Images.italyImage, Images.geneva],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      time: "3h",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["Outdoor Activity", "Sub-type"],
    },
    {
      id: 5,
      name: "Itinerary Name 5",
      images: [Images.spain, Images.italyImage, Images.geneva],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      time: "3h",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["Outdoor Activity", "Sub-type"],
    },
    {
      id: 6,
      name: "Itinerary Name 6",
      images: [Images.spain, Images.italyImage, Images.geneva],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      time: "3h",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["Outdoor Activity", "Sub-type"],
    },
  ];

  const services = [
    {
      id: 1,
      name: "Service Name 1",
      images: [Images.disney, Images.skii, Images.geneva, Images.marakesh],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["#Outdoor", "#Beach", "#Adventure"],
    },
    {
      id: 2,
      name: "Service Name 2",
      images: [Images.disney, Images.skii, Images.geneva, Images.marakesh],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["#Outdoor", "#Beach", "#Adventure"],
    },
    {
      id: 3,
      name: "Service Name 3",
      images: [Images.disney, Images.skii, Images.geneva, Images.marakesh],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["#Outdoor", "#Beach", "#Adventure"],
    },
    {
      id: 4,
      name: "Service Name 4",
      images: [Images.disney, Images.skii, Images.geneva, Images.marakesh],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["#Outdoor", "#Beach", "#Adventure"],
    },
    {
      id: 5,
      name: "Service Name 5",
      images: [Images.disney, Images.skii, Images.geneva, Images.marakesh],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["#Outdoor", "#Beach", "#Adventure"],
    },
    {
      id: 6,
      name: "Service Name 6",
      images: [Images.disney, Images.skii, Images.geneva, Images.marakesh],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      date: "Oct 11 - Oct 15",
      price: "$350",
      tags: ["#Outdoor", "#Beach", "#Adventure"],
    },
  ];

  return (
    <div className="container-fluid transport">
      <div className="row bg-white rounded-lg">
        {/* TITLE AND LOGO HERE */}
        <div className="col-12 pb-10">
          <div className="py-5">
            <div className="relative">
              {/* IMAGE */}
              <Image
                src={Images.athensImage}
                alt="athensImage"
                className="w-full rounded-lg object-cover"
                style={{ height: "400px" }}
              />
              {/* DMC NAME AND IMAGE */}
              <div className="absolute bottom-8 left-8 pointer">
                <div className="rounded-full bg-white text-grey flex items-center justify-center pl-1 pr-2 py-1">
                  <Image
                    src={Icons.avatarIcon}
                    alt="avatar"
                    className="rounded-full"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div className="pl-1 f-14">DMC Name</div>
                </div>
              </div>
            </div>

            {/* CATALOGUE NAME */}
            <div className="f-28 poppins-medium text-darkblue pt-8">
              Catalogue Name
            </div>

            {/* CATALOGUE DESCRIPTION */}
            <div className="text-grey f-20 py-2">
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

            {/* DATE AND SEASONALITY TAGS */}
            <div className="flex">
              <div className="bg-darkblue text-gold f-12 mx-1 px-2 py-2 rounded-lg flex items-center">
                <div className="pr-2">
                  <Image
                    style={{ width: "18px", height: "18px" }}
                    src={Icons.treeIconGold}
                    alt="tree gold"
                  />
                </div>
                <div className="">Oct 11 - Oct 15</div>
              </div>
              <div className="bg-darkblue text-gold f-12 mx-1 px-2 py-2 rounded-lg flex items-center">
                <div className="pr-2">
                  <Image
                    style={{ width: "18px", height: "18px" }}
                    src={Icons.sunIconGold}
                    alt="sunIcon"
                  />
                </div>
                <div className="">Seasonality</div>
              </div>
            </div>
          </div>
        </div>

        {/* SAMPLE ITINERARIES BAR*/}
        <div className="col-12 pb-8">
          <div
            className="flex rounded-lg bg-blue items-center justify-between px-8 pointer"
            onClick={() => {
              setItinerariesCollapsed(!itinerariesCollapsed);
            }}
          >
            <div className="f-24 py-2 poppins-semibold">Sample Itineraries</div>
            <Image src={Icons.arrowDownDarkIcon} alt="arrow down" />
          </div>
        </div>

        {!itinerariesCollapsed && (
          <>
            {/* SAMPLE ITINERARIES  */}
            {itineraries.map((item, index) => {
              return (
                <div className="col-lg-4 col-2xl-3" key={index}>
                  <div className="row rounded-lg py-2">
                    {/* IMAGES SWIPER */}
                    <div className="col-12 pb-4">
                      <ServicesSwiper images={item.images} />
                    </div>

                    {/* NAME */}
                    <div className="col-12">
                      <div className="f-20 text-darkblue poppins-medium">
                        {item.name}
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="col-12">
                      <div className="f-16 text-grey pt-4">
                        {item.description}
                      </div>
                    </div>

                    {/* LOCATION */}
                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <Image src={Icons.locationDarkIcon} alt="location" />
                        <div className="text-grey">{item.location}</div>
                      </div>
                    </div>

                    {/* TIME */}
                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <Image src={Icons.clockDarkIcon} alt="time" />
                        <div className="text-grey">{item.time}</div>
                      </div>
                    </div>

                    {/* DATE */}
                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <Image src={Icons.calendarDarkIcon} alt="calendar" />
                        <div className="text-grey">{item.date}</div>
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="col-auto pr-2 py-1">
                      <div className="service-tag flex">
                        <Image src={Icons.dollarIconDark} alt="dollar sign" />
                        <div className="text-grey">{item.price}</div>
                      </div>
                    </div>

                    {/* TAGS */}
                    {item.tags.map((tag, index) => {
                      return (
                        <div className="col-auto pr-2 py-1" key={index}>
                          <div className="service-tag flex">
                            <div className="text-grey">{tag}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </>
        )}

        {/* SERVICES BAR */}
        <div className="col-12 py-8">
          <div
            className="flex rounded-lg bg-blue items-center justify-between px-8 pointer"
            onClick={() => {
              setServicesCollapsed(!servicesCollapsed);
            }}
          >
            <div className="f-24 py-2 poppins-semibold">Services</div>
            <Image src={Icons.arrowDownDarkIcon} alt="arrow down" />
          </div>
        </div>

        {!servicesCollapsed && (
          <>
            {/* Services */}
            {services.map((item, index) => {
              return (
                <div className="col-lg-4 col-2xl-3" key={index}>
                  <div className="row rounded-lg py-2">
                    {/* IMAGES SWIPER */}
                    <div className="col-12 pb-4">
                      <ServicesSwiper images={item.images} />
                    </div>
                    <div className="col-12">
                      <div className="flex justify-between items-center">
                        {/* NAME */}
                        <div className="f-20 text-darkblue poppins-medium">
                          {item.name}
                        </div>
                        {/* PRICE */}
                        <div className="flex items-center">
                          <div className="f-24 poppins-semibold text-darkblue">
                            {item.price}
                          </div>
                          <div className="f-16 text-darkblue pl-2">
                            /default
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="col-12">
                      <div className="f-16 text-grey pt-4">
                        {item.description}
                      </div>
                    </div>

                    {/* TAGS */}
                    {item.tags.map((tag, index) => {
                      return (
                        <div className="col-auto pr-2 py-1" key={index}>
                          <div className="bg-blue rounded-xl px-2 text-darkblue">
                            {tag}
                          </div>
                        </div>
                      );
                    })}

                    {/* LOCATION */}
                    <div className="col-auto pr-2 py-1">
                      <div className=" flex">
                        <Image src={Icons.locationDarkIcon} alt="location" />
                        <div className="text-darkblue pl-1">
                          {item.location}
                        </div>
                      </div>
                    </div>

                    {/* DATE */}
                    <div className="col-auto pr-2 py-1">
                      <div className=" flex">
                        <Image src={Icons.calendarDarkIcon} alt="calendar" />
                        <div className="text-darkblue pl-1">{item.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        <div className="col-12"></div>
        {/* save as draft */}
        {/* <div className="col-auto pt-[64px]">
          <Link href="/catalogues">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={saveIcon} alt="saveIcon" />
                <div className="pl-4">Submit</div>
              </div>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
