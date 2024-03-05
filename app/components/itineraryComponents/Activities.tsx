"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SingleSelect from "../SingleSelect";

import saveIcon from "../../assets/Icon_Save.png";
import deleteRedIcon from "../../assets/delete_red.png";
import downArrowIcon from "../../assets/down_arrow_dark.png";
import addIcon from "../../assets/Icon_Add_Dark.png";
import addGoldIcon from "../../assets/Icon_Add.png";
import addCircleIcon from "../../assets/Icon_Add_circle.png";
import hotelImage from "../../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";
import RichTextBox from "../RichTextBox";
import DragTableServices from "../DragTableServices";

export default function Activities(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;

  const [rooms, setRooms] = useState(["1"]);
  const [activities, setActivities] = useState(["1", "2", "3", "4"]);
  const [selectedActivities, setSelectedActivities] = useState(["1", "2"]);
  const [days, setDays] = useState(["1", "2"]);

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="container-fluid activities">
      <div className="row">
        <div className="col-9">
          {days.map((day, index) => {
            return (
              <>
                <div className="row py-4 overflow-hidden" key={index}>
                  {/* Day BAR  */}
                  <div className="col-12">
                    <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
                      <div className="f-24 text-darkblue poppins-semibold">
                        Day {day}
                      </div>
                      <div
                        className="flex items-center"
                        onClick={() => {
                          setCollapsed(!collapsed);
                        }}
                      >
                        <Image
                          src={downArrowIcon}
                          alt="down arrow"
                          className="pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Rich textbox and services bar  */}
                  <div
                    className={
                      collapsed ? " slide-up-and-disappear " : "" + " col-12"
                    }
                  >
                    <div className="px-5 pt-3">
                      <div className="bg-white rounded-lg py-3 flex justify-between items-center  px-3">
                        <div className=" text-darkblue poppins-semibold">
                          Day Notes
                        </div>
                        <Image
                          src={downArrowIcon}
                          alt="down arrow"
                          className="pointer"
                        />
                      </div>

                      <RichTextBox initialData="<h1>Enter Your Day Notes here!</h1><h1>...</h1>" />
                    </div>

                    <div className="px-5 pt-5">
                      <DragTableServices />
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
                  <input
                    type="text"
                    className="rounded-lg bg-lightblue text-darkblue px-5 py-3 w-full"
                    placeholder="Search Hotel"
                  />
                </div>
                <div className="col-auto self-center">F</div>
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
            {activities.map((activity, index) => {
              return (
                //     {/* Hotel service */}
                <div className="col-12 py-2" key={index}>
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
                        <div className="f-14 text-darkblue">Paris, France</div>
                      </div>
                    </div>

                    <div
                      className="pr-2 pointer"
                      onClick={() => {
                        let newSelectedActivities = [
                          ...selectedActivities,
                          activity,
                        ];
                        setSelectedActivities(newSelectedActivities);
                      }}
                    >
                      <Image src={addCircleIcon} alt="add" />
                    </div>
                  </div>
                </div>
              );
            })}
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
