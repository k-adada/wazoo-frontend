"use client";
import React, { useState } from "react";
import Image from "next/image";

import Images from "@/app/Images";
import Icons from "@/app/Icons";

export default function ActivitiesSection(props: any) {
  const { popup, setOpenPreview, setCustomServices, customServices } = props;

  const [services, setServices] = useState([
    {
      name: "Service Name 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.louvreImage,
    },
    {
      name: "Service Name 2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.lucerneImage,
    },
    {
      name: "Service Name 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.montsaintImage,
    },
    {
      name: "Service Name 4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.triomphImage,
    },
    {
      name: "Service Name 5",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.notreImage,
    },
    {
      name: "Service Name 6",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates eveniet iste corrupti! Cum,",
      location: "Paris, France",
      duration: "Oct 1 - Dec 31",
      theme: "Kayak",
      price: "$350",
      image: Images.quartierImage,
    },
  ]);

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 mt-2"
      style={{ maxWidth: "95%", marginLeft: "auto", marginRight: "auto" }}
    >
      {popup && (
        <div className="px-5 py-2">
          <div
            className="row bg-white rounded-lg py-2 pointer h-full justify-start items-start"
            onClick={() => {
              setOpenPreview(true);
              setCustomServices({
                open: true,
                services: customServices?.services || [],
              });
            }}
          >
            <div className="col-12 pb-4 px-2">
              <div className="image-wrapper-83 border-dashed">
                <div
                  className="bg-darkblue rounded-full p-10 absolute w-[80px] h-[80px] top-1/2 left-1/2"
                  style={{ transform: "translate(-50%,-50%)" }}
                >
                  <Image
                    src={Icons.addIconGold}
                    alt="add icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </div>
                {customServices?.services.length !== 0 && (
                  <div className="absolute top-2 left-4 flex items-center">
                    <div className="f-16 text-gold text-center poppins-semibold py-1 bg-darkblue rounded-lg w-[34px]">
                      {customServices?.services.length}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center pt-4">
                <div className="f-20 text-darkblue poppins-medium">
                  Add a Custom Service
                </div>
              </div>

              <div className="f-14 text-grey pt-1 line-clamp-4">
                Can&apos;t find what you need? Tell us, and we&apos;ll create a
                custom service just for you
              </div>
            </div>
          </div>
        </div>
      )}
      {services.map((item, index) => {
        return (
          <div className="px-5 py-2" key={index}>
            <div
              className="row bg-white rounded-lg py-2 pointer"
              onClick={() => {
                setOpenPreview(true);
              }}
            >
              <div className="col-12 pb-4 px-2">
                <div className="image-wrapper-83">
                  <Image src={item.image} alt={item.name} />
                </div>
                {!popup && (
                  <div className="absolute top-2 right-4 pointer">
                    <div
                      className="py-2 px-2 rounded-full backdrop-blur-xl"
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    >
                      <Image
                        src={Icons.unbookmarkGoldIcon}
                        alt="three dots"
                        className="three-dots"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="col-12 px-2">
                <div className="flex items-center">
                  <div className="f-20 text-darkblue poppins-medium">
                    {item.name}
                  </div>

                  <div className="ml-auto flex items-center">
                    <div className="f-16 text-grey poppins-semibold pr-2">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 px-2 pb-3">
                <div className="f-14 text-grey pt-1 line-clamp-2">
                  {item.description}
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.locationDarkIcon}
                    alt="location"
                  />
                  <div className="text-darkblue">Paris, France</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.calendarDarkIcon}
                    alt="calendar"
                  />
                  <div className="text-darkblue">Oct 1 - Dec 31</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.treeDarkIcon}
                    alt="treeIcon"
                  />
                  <div className="text-darkblue">Kayak</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
