"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Icons from "@/app/Icons";
import Images from "@/app/Images";

import DragTableRequestServices from "./DragTableRequestServices";
import ActivitiesSection from "../exploreComponents/ActivitiesSection";
import dynamic from "next/dynamic";

const DynamicRichTextBox = dynamic(() => import("../RichTextBox"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function RequestServices() {
  const [itineraries, setItineraries] = useState([
    {
      id: "1",
      serviceType: "Itinerary 1",
      description: "Itinerary 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
    },
    {
      id: "2",
      serviceType: "Itinerary 2",
      description: "Itinerary 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
    },
    {
      id: "3",
      serviceType: "Itinerary 3",
      description: "Itinerary 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
    },
    {
      id: "4",
      serviceType: "Itinerary 4",
      description: "Itinerary 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
    },
    {
      id: "5",
      serviceType: "Itinerary 5",
      description: "Itinerary 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
    },
    {
      id: "6",
      serviceType: "Itinerary 6",
      description: "Itinerary 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
    },
  ]);

  const [selectedServices, setSelectedServices] = useState([] as any[]);

  const [addService, setAddService] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  return (
    <div className="">
      {addService && (
        <div
          className="fixed h-full w-full top-0 left-0 z-10"
          style={{ overflowY: "auto", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          {openPreview ? (
            <>
              <div
                className="container-fluid my-10 p-10 rounded-lg bg-grey"
                style={{
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div className="text-darkblue f-30 poppins-semibold">
                  Louvre Museum - Details
                </div>

                <div className="">
                  <Image
                    src={Images.disney}
                    alt="louvre"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-[250px] object-cover"
                  />
                </div>

                <div className="f-20 text-darkblue poppins-semibold pt-5">
                  Experience Method
                </div>
                <div className="">
                  <input
                    className="w-full py-3 rounded-lg"
                    type="text"
                    placeholder="Self Guided"
                  />
                </div>

                <div className="f-20 text-darkblue poppins-semibold pt-5">
                  Timeslot
                </div>
                <div className="">
                  <input
                    className="w-full py-3 rounded-lg"
                    type="text"
                    placeholder="Self Guided"
                  />
                </div>

                <div className="f-20 text-darkblue poppins-semibold pt-5">
                  Customizations
                </div>
                <DynamicRichTextBox initialData="Describe your needs" />
                <div className="flex justify-between items-center pt-5">
                  <div
                    className="dark-button flex justify-center items-center text-gold pointer mr-4 w-full"
                    onClick={() => {
                      setOpenPreview(false);
                    }}
                  >
                    <div className="">Cancel</div>
                  </div>
                  <div
                    className="dark-button flex justify-center items-center text-gold pointer ml-4 w-full"
                    onClick={() => {
                      setOpenPreview(false);
                    }}
                  >
                    <div className="">Save</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="container-fluid my-10 p-10 rounded-lg bg-grey"
                style={{
                  maxWidth: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {/* ITINERARYY RELATED INFO */}
                <div
                  className="absolute top-5 right-5 pointer"
                  onClick={() => {
                    setAddService(false);
                  }}
                >
                  X
                </div>
                {/* search bar */}
                <div
                  className="py-2 px-4 rounded-lg w-full bg-blue"
                  style={{
                    maxWidth: "95%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div className="row justify-between items-center">
                    {/* title */}
                    <div className="col-auto">
                      <div className="f-20 text-darkblue poppins-semibold text-center">
                        Services
                      </div>
                    </div>

                    {/* search */}
                    <div className="col">
                      <div className="flex justify-end items-center">
                        <div className="relative">
                          <div className="absolute left-3 top-3 cursor-pointer">
                            <Image src={Icons.searchIconDark} alt="search" />
                          </div>
                          <input
                            className="bg-white text-darkblue pl-[56px] p-3 rounded-lg w-full"
                            placeholder={"Search "}
                            type="text"
                          />
                        </div>
                        <div className="pl-4 w-auto">
                          <div className="bg-white rounded-lg py-3 px-3 text-darkblue flex items-center pointer">
                            <div className="pr-3">Filters</div>
                            <div className="">
                              <Image
                                src={Icons.arrowDownDarkIcon}
                                alt="arrowDown"
                                width={40}
                                height={40}
                                style={{ height: "10px", width: "15px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="ml-4 dark-button flex items-center text-gold pointer"
                          onClick={() => {
                            setSelectedServices([
                              {
                                id: "1",
                                image: Images.aurora,
                                name: "services",
                                serviceType: "type",
                                serviceSubType: "sub type",
                                location: "Location 1",
                                method: "Method 1",
                                validity: "oct 1 - oct 4",
                                price: "350",
                              },

                              {
                                id: "2",
                                image: Images.machupichu,
                                name: "service 2",
                                serviceType: "type 2",
                                serviceSubType: "sub type 2",
                                location: "Location 6",
                                method: "Method 2",
                                validity: "oct 5 - oct 7",
                                price: "350",
                              },
                            ]);
                            setAddService(false);
                          }}
                        >
                          <div className="">Save</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ActivitiesSection
                  popup={true}
                  setOpenPreview={setOpenPreview}
                />
                {/* ITINERARYY RELATED INFO */}
              </div>
            </>
          )}
        </div>
      )}

      {/* Item BAR  */}
      <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
        <div className="f-24 text-darkblue poppins-semibold">Services</div>
        <div
          className="dark-button flex items-center text-gold pointer"
          onClick={() => {
            setAddService(true);
          }}
        >
          <Image src={Icons.addIconGold} alt="add" width={20} height={20} />
          <div className="pl-2">Add Services</div>
        </div>
      </div>

      {/* DRAG TABLE SERVICES */}
      <div className="px-5 pt-5">
        <DragTableRequestServices
          services={selectedServices}
          days={selectedServices}
          setDays={selectedServices}
          dayIndex={1}
        />
      </div>
    </div>
  );
}
