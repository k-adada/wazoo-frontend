"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SingleSelect from "../SingleSelect";

import saveIcon from "../../assets/Icon_Save.png";
import deleteRedIcon from "../../assets/delete_red.png";
import downArrowIcon from "../../assets/down_arrow_dark.png";
import addIcon from "../../assets/Icon_Add_Dark.png";

export default function Accommodation(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;

  const [rooms, setRooms] = useState(["1"]);

  return (
    <div className="container-fluid accommodation">
      <div className="row">
        <div className="col-8">
          <div className="row">
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
                    <div className="pr-5">
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
                      Room Configuration <span className="text-orange">*</span>
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
                      Default Price ($) <span className="text-orange">*</span>
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
                              options={[{ label: "Yes" }, { label: "No" }]}
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
        </div>

        {/* upload images  */}
        <div className="col-4">
          <div className="row bg-white rounded-lg">
            <div className="col-12">wqewqe</div>
          </div>
        </div>

        {/* save as draft */}
        <div className="col-auto pt-[64px]">
          <div className="dark-button text-gold poppins-medium cursor-pointer">
            <div className="flex items-center h-full">
              <Image src={saveIcon} alt="saveIcon" />
              <div className="pl-4">Save as Draft</div>
            </div>
          </div>
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
