"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Icons from "@/app/Icons";
import Images from "@/app/Images";

import DragTableRequestItineraries from "./DragTableRequestItineraries";
import TripsSection from "../exploreComponents/TripsSection";
import TripOverview from "../itineraryComponents/TripOverview";
import DetailedItinerary from "../itineraryComponents/DetailedItinerary";

export default function RequestItineraries() {
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

  const [selectedItineraries, setSelectedItineraries] = useState([] as any[]);

  const [addItinerary, setAddItinerary] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  return (
    <div className="">
      {addItinerary && (
        <div
          className="fixed h-full w-full top-0 left-0 "
          style={{
            overflowY: "auto",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000000000,
          }}
        >
          <div
            className="container-fluid my-10 p-10 rounded-lg bg-grey"
            style={{ maxWidth: "90%", marginLeft: "auto", marginRight: "auto" }}
          >
            {/* ITINERARYY RELATED INFO */}
            <div
              className="absolute pointer"
              style={{ top: "50px", right: "6%" }}
              onClick={() => {
                setAddItinerary(false);
              }}
            >
              X
            </div>

            {openPreview ? (
              <>
                {/* TITLE AND LOGO HERE */}
                <div className="col-12 pt-5">
                  <div className="bg-white rounded-lg py-5 px-5 text-center">
                    <div className="">
                      <Image
                        src={Images.middleEastLogo}
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

                <div className="pt-5 flex justify-end px-4">
                  <div
                    className="dark-button text-gold flex items-center pointer"
                    onClick={() => {
                      setOpenPreview(false);
                    }}
                  >
                    <Image
                      src={Icons.addIconGold}
                      alt="add"
                      width={20}
                      height={20}
                    />
                    <div className="pl-2">Add to Trip</div>
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
              </>
            ) : (
              <>
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
                      Add Itineraries to your Trip
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
                            setAddItinerary(false);
                            setSelectedItineraries([
                              {
                                id: "1",
                                image: Images.aurora,
                                name: "Itinerary 1",
                                theme: "theme",
                                destination: "destination",
                                season: "summer",
                                validity: "oct 1 - oct 4",
                                price: "350",
                              },
                              {
                                id: "2",
                                image: Images.machupichu,
                                name: "Itinerary 2",
                                theme: "theme 2",
                                destination: "destination 2",
                                season: "winter",
                                validity: "oct 6 - oct 10",
                                price: "350",
                              },
                            ]);
                          }}
                        >
                          <div className="">Save</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <TripsSection popup={true} setOpenPreview={setOpenPreview} />
                {/* ITINERARYY RELATED INFO */}
              </>
            )}
          </div>
        </div>
      )}

      {/* Item BAR  */}
      <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
        <div className="f-24 text-darkblue poppins-semibold">Itineraries</div>
        <div
          className="dark-button flex items-center text-gold pointer"
          onClick={() => {
            setAddItinerary(!addItinerary);
          }}
        >
          <Image src={Icons.addIconGold} alt="add" width={20} height={20} />
          <div className="pl-2">Add Itineraries</div>
        </div>
      </div>

      {/* DRAG TABLE SERVICES */}
      <div className="px-5 pt-5">
        <DragTableRequestItineraries
          itineraries={selectedItineraries}
          days={selectedItineraries}
          setDays={selectedItineraries}
          dayIndex={1}
        />
      </div>
    </div>
  );
}
