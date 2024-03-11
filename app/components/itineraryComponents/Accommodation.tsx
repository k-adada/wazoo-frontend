"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SingleSelect from "../SingleSelect";

import locationIcon from "../../assets/Icon_Location_gold.png";
import searchIcon from "../../assets/Icon_Search_Black.png";
import filterIcon from "../../assets/Icon_Itinerary.png";
import saveIcon from "../../assets/Icon_Save.png";
import deleteRedIcon from "../../assets/delete_red.png";
import downArrowIcon from "../../assets/down_arrow_dark.png";
import addIcon from "../../assets/Icon_Add_Dark.png";
import addGoldIcon from "../../assets/Icon_Add.png";
import addCircleIcon from "../../assets/Icon_Add_circle.png";
import hotelImage from "../../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";
import Link from "next/link";

export default function Accommodation(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;

  const [rooms, setRooms] = useState(["1"]);
  const [hotels, setHotels] = useState(["1", "2", "3", "4"]);
  const [selectedHotels, setSelectedHotels] = useState(["1", "2"]);

  useEffect(() => {
    setStepsDone(["tripDetails", "accommodation"]);
  }, [setStepsDone]);

  return (
    <div className="container-fluid accommodation">
      <div className="row">
        <div className="col-9">
          {/* map view */}
          <div className="flex justify-end">
            <div
              className="dark-button text-gold poppins-medium cursor-pointer"
              onClick={() => {
                setCurrentStep("map-view");
              }}
            >
              <div className="flex items-center h-full">
                <Image src={locationIcon} alt="location" />
                <div className="pl-4">Map View</div>
              </div>
            </div>
          </div>
          {selectedHotels.map((hotel, index) => {
            return (
              <>
                <div className="row py-4">
                  {/* main hotel bar  */}
                  <div className="col-12">
                    <div className="bg-lightblue rounded-lg px-5 py-2">
                      <div className="flex justify-between">
                        <div className="">
                          <div className="f-24 text-darkblue poppins-semibold">
                            The Ritz
                          </div>
                          <div className="text-grey f-14 poppins-regular">
                            Paris, France
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            className="pr-5"
                            onClick={() => {
                              let newSelectedHotels = selectedHotels.filter(
                                (hotel, i) => i !== index
                              );
                              setSelectedHotels(newSelectedHotels);
                            }}
                          >
                            <Image
                              src={deleteRedIcon}
                              alt="delete"
                              className="pointer"
                            />
                          </div>
                          <div className="">
                            <Image
                              src={downArrowIcon}
                              alt="down arrow"
                              className="pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Meal basis  */}
                  <div className="col-6">
                    <div className="pl-5">
                      <div className="text-darkblue pb-2 pt-8">
                        Basis <span className="text-orange">*</span>
                      </div>
                      <div className="light-input">
                        <div className="remove-mui-label">
                          <SingleSelect
                            options={[
                              { label: "Meal Basis" },
                              { label: "Breakfast" },
                              { label: "Dinner" },
                            ]}
                            label="Meal Basis"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* nights  */}
                  <div className="col-6">
                    <div className="pr-5">
                      <div className="text-darkblue pb-2 pt-8">
                        Nights <span className="text-orange">*</span>
                      </div>
                      <div className="light-input">
                        <input
                          className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                          type="number"
                          placeholder="3"
                        />
                      </div>
                    </div>
                  </div>
                  {/* ROOMS  */}
                  <div className="col-12">
                    <div className="px-5">
                      <div className="row pt-5">
                        <div className="col">
                          <div className="text-darkblue pb-2">
                            Room Type <span className="text-orange">*</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="text-darkblue pb-2">
                            Room Configuration{" "}
                            <span className="text-orange">*</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="text-darkblue pb-2">
                            Extra Bed <span className="text-orange">*</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="text-darkblue pb-2">
                            Nb. of Rooms <span className="text-orange">*</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="text-darkblue pb-2">
                            Default Price ($){" "}
                            <span className="text-orange">*</span>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="opacity-0">
                            <Image src={deleteRedIcon} alt="delete" />
                          </div>
                        </div>
                      </div>
                      {rooms.map((room, index) => {
                        return (
                          <>
                            <div className="row py-2">
                              <div className="col">
                                <div className="light-input">
                                  <input
                                    className="px-5 py-4 rounded-lg bg-white text-darkblue w-full"
                                    type="text"
                                    placeholder="Room Type"
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <div className="remove-mui-label">
                                  <SingleSelect
                                    options={[
                                      { label: "Single" },
                                      { label: "Double" },
                                      { label: "Queen" },
                                    ]}
                                    label="Room Configuration"
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <div className="remove-mui-label">
                                  <SingleSelect
                                    options={[
                                      { label: "Yes" },
                                      { label: "No" },
                                    ]}
                                    label="extra bed"
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <div className="light-input">
                                  <input
                                    className="px-5 py-4 rounded-lg bg-white text-darkblue w-full"
                                    type="number"
                                    placeholder="2"
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <div className="light-input">
                                  <input
                                    className="px-5 py-4 rounded-lg bg-white text-darkblue w-full"
                                    type="number"
                                    placeholder="350"
                                  />
                                </div>
                              </div>
                              <div className="col-auto self-center">
                                <div
                                  className="pointer"
                                  onClick={() => {
                                    let newRooms = rooms.filter(
                                      (room, i) => i !== index
                                    );
                                    setRooms(newRooms);
                                  }}
                                >
                                  <Image src={deleteRedIcon} alt="delete" />
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}

                      <div className="row">
                        <div className="col-12 self-center">
                          <div
                            className=" flex justify-center rounded-lg py-4 border-dashed pointer"
                            onClick={() => {
                              setRooms([...rooms, rooms.length + 1 + ""]);
                            }}
                          >
                            <div className="">
                              <Image src={addIcon} alt="add" />
                            </div>
                            <div className="text-darkblue">
                              <div className="">Add Room</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* upload images  */}
        <div className="col-3">
          <div className="row bg-white rounded-lg py-3">
            <div className="col-12">
              {/* search hotels  */}
              <div className="row">
                <div className="col">
                  <div className="absolute left-6 top-3 pointer">
                    <Image src={searchIcon} alt="search icon" />
                  </div>
                  <input
                    type="text"
                    className="rounded-lg bg-lightblue text-darkblue pl-10 pr-5 py-3 w-full"
                    placeholder="Search Hotel"
                  />
                </div>
                <div className="col-auto self-center">
                  <Image src={filterIcon} alt="filter" />
                </div>
              </div>
            </div>
            <div className="col-12 py-3">
              <div className="row pt-4 justify-between">
                <div className="col-auto">
                  <div className="flex">
                    <div className="rounded-lg bg-lightblue py-3 px-4 text-darkblue poppins-medium pointer">
                      All
                    </div>
                    <div className="rounded-lg py-3 px-4 text-grey poppins-medium pointer">
                      Recommended
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="dark-button text-gold poppins-medium cursor-pointer">
                    <div className="flex items-center h-full">
                      <Image src={addGoldIcon} alt="Add Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {hotels.map((hotel, index) => {
              return (
                <>
                  {/* Hotel service */}
                  <div className="col-12 py-2">
                    <div className="flex py-2 px-2 border-dashed rounded-lg items-center justify-between">
                      <div className="flex">
                        <Image
                          src={hotelImage}
                          alt="hotel image"
                          className="rounded-lg"
                          style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="pl-3">
                          <div className="f-24 text-darkblue poppins-medium">
                            Hotel Name
                          </div>
                          <div className="f-14 text-darkblue">
                            Paris, France
                          </div>
                        </div>
                      </div>

                      <div
                        className="pr-2 pointer"
                        onClick={() => {
                          let newSelectedHotels = [...selectedHotels, hotel];
                          setSelectedHotels(newSelectedHotels);
                        }}
                      >
                        <Image src={addCircleIcon} alt="add" />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* save as draft */}
        <div className="col-auto pt-[64px]">
          <Link href="/itineraries">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={saveIcon} alt="saveIcon" />
                <div className="pl-4">Save as Draft</div>
              </div>
            </div>
          </Link>
        </div>
        {/* NEXT */}
        <div className="col-auto pt-[64px]">
          <div
            className="dark-button text-gold poppins-medium cursor-pointer"
            onClick={() => {
              setCurrentStep("activities");
              setStepsDone([...stepsDone, "activities"]);
            }}
          >
            <div className="flex items-center h-full">
              <div className="">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
