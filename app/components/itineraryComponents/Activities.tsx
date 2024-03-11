"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import saveIcon from "../../assets/Icon_Save.png";
import searchIcon from "../../assets/Icon_Search_Black.png";
import deleteRedIcon from "../../assets/delete_red.png";
import downArrowIcon from "../../assets/down_arrow_dark.png";
import addGoldIcon from "../../assets/Icon_Add.png";
import addCircleIcon from "../../assets/Icon_Add_circle.png";
import tourImage from "../../assets/tour_effel.jpg";
import locationIcon from "../../assets/Icon_Location_gold.png";
import DragTableServices from "../DragTableServices";

import dynamic from "next/dynamic";
import Link from "next/link";
// Dynamically import the RichTextBox component with SSR disabled
const DynamicRichTextBox = dynamic(() => import("../RichTextBox"), {
  ssr: false, // Disable server-side rendering for this component
});

type Props = {
  initialData?: string; // Define any props you want to pass to RichTextBox
};

export default function Activities(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;

  useEffect(() => {
    setStepsDone(["tripDetails", "accommodation", "activities"]);
  }, [setStepsDone]);

  const [activities, setActivities] = useState([
    {
      id: "1",
      serviceType: "Service 1",
      description: "Service 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
    },
    {
      id: "2",
      serviceType: "Service 2",
      description: "Service 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
    },
    {
      id: "3",
      serviceType: "Service 3",
      description: "Service 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
    },
    {
      id: "4",
      serviceType: "Service 4",
      description: "Service 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
    },
    {
      id: "5",
      serviceType: "Service 5",
      description: "Service 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
    },
    {
      id: "6",
      serviceType: "Service 6",
      description: "Service 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
    },
  ]);
  const [days, setDays] = useState([
    {
      id: 1,
      notesCollapsed: false,
      collapsed: false,
      services: [] as any[],
    },
    { id: 2, notesCollapsed: false, collapsed: true, services: [] as any[] },
    { id: 3, notesCollapsed: false, collapsed: false, services: [] as any[] },
  ]);

  const [openServicePopup, setOpenServicePopup] = useState(-1);

  return (
    <div className="container-fluid activities">
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

          {days.map((day, index) => {
            return (
              <div
                className="row py-4 overflow-hidden"
                key={index + day.id + day.id}
              >
                {/* Day BAR  */}
                <div className="col-12">
                  <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
                    <div className="f-24 text-darkblue poppins-semibold">
                      Day {index + 1}
                    </div>
                    <div
                      className="flex items-center"
                      onClick={() => {
                        let newDays = [...days];
                        newDays[index].collapsed = !newDays[index].collapsed;
                        setDays(newDays);
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
                  className={days[index].collapsed ? "hidden " : "" + " col-12"}
                >
                  <div className="px-5 pt-3">
                    {/* RICH TEXTBOX BAR  */}
                    <div className="bg-white rounded-lg py-3 flex justify-between items-center  px-3">
                      <div className=" text-darkblue poppins-semibold">
                        Day Notes
                      </div>
                      <Image
                        src={downArrowIcon}
                        alt="down arrow"
                        className="pointer"
                        onClick={() => {
                          let newDays = [...days];
                          newDays[index].notesCollapsed =
                            !newDays[index].notesCollapsed;
                          setDays(newDays);
                        }}
                      />
                    </div>

                    {/* RICH TEXTBOX */}
                    <div className={days[index].notesCollapsed ? "hidden" : ""}>
                      <DynamicRichTextBox initialData="<h1>Enter Your Day Notes here!</h1><h1>...</h1>" />
                    </div>
                  </div>

                  {/* DRAG TABLE SERVICES */}
                  <div className="px-5 pt-5">
                    <DragTableServices
                      services={day.services}
                      days={days}
                      setDays={setDays}
                      dayIndex={index}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* upload images  */}
        <div className="col-3">
          <div className="row bg-white rounded-lg py-3">
            <div className="col-12">
              {/* search activities  */}
              <div className="row">
                <div className="col">
                  <div className="absolute left-6 top-3 pointer">
                    <Image src={searchIcon} alt="search icon" />
                  </div>
                  <input
                    type="text"
                    className="rounded-lg bg-blue text-darkblue pl-10 pr-5 py-3 w-full"
                    placeholder="Search Activity"
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
                //     {/* activity service */}
                <div className="col-12 py-2" key={index + activity.location}>
                  <div className="flex py-2 px-2 border-dashed rounded-lg items-center justify-between">
                    <div className="flex">
                      <Image
                        src={tourImage}
                        alt="tour image"
                        className="rounded-lg"
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="pl-3">
                        <div className="f-24 text-darkblue poppins-medium">
                          {activity.serviceType}
                        </div>
                        <div className="f-14 text-darkblue">Paris, France</div>
                      </div>
                    </div>

                    <div
                      className="pr-2 pointer"
                      onClick={() => {
                        if (openServicePopup == index) {
                          setOpenServicePopup(-1);
                        } else {
                          setOpenServicePopup(index);
                        }
                      }}
                    >
                      <Image src={addCircleIcon} alt="add" />
                    </div>
                  </div>

                  <div
                    className={
                      (openServicePopup == index ? "" : "hidden") +
                      " service-day-popup rounded-lg bg-grey px-3 py-3"
                    }
                  >
                    {days.map((day, index) => {
                      return (
                        <div
                          key={index + day.id}
                          className="text-darkblue text-center day-row pointer"
                          onClick={() => {
                            let newDays = [...days];
                            newDays[index].services = [
                              activity,
                              ...newDays[index].services,
                            ];

                            setDays(newDays);
                            setOpenServicePopup(-1);
                          }}
                        >
                          Day {index + 1}
                        </div>
                      );
                    })}
                  </div>
                </div>
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
              setCurrentStep("transport");
              setStepsDone([...stepsDone, "transport"]);
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
