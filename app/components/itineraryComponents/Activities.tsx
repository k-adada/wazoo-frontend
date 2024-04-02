"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import saveIcon from "../../assets/Icon_Save.png";
import searchIcon from "../../assets/Icon_Search_Black.png";
import filterIcon from "../../assets/Icon_Itinerary.png";
import downArrowIcon from "../../assets/down_arrow_dark.png";
import addGoldIcon from "../../assets/Icon_Add.png";
import addCircleIcon from "../../assets/Icon_Add_circle.png";
import addIcon from "../../assets/Icon_Add_Dark.png";
import tourImage from "../../assets/tour_effel.jpg";
import locationIcon from "../../assets/Icon_Location_gold.png";
import deleteRedIcon from "../../assets/delete_red.svg";
import DragTableServices from "../DragTableServices";

import carImage from "../../assets/mercedes.webp";
import louvreImage from "../../assets/images/services/Louvre.jpg";
import lucerneImage from "../../assets/images/services/lucerne.jpg";
import montsaintImage from "../../assets/images/services/montsaintmich.jpg";
import triomphImage from "../../assets/images/services/Triomphe.jpg";
import notreImage from "../../assets/images/services/NotreDameCathedral.jpg";
import quartierImage from "../../assets/images/services/Quartier_Latin.jpg";

import dynamic from "next/dynamic";
import Link from "next/link";
import SingleSelect from "../SingleSelect";

import { useServices } from "@/app/contexts/ServicesContext";

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
  currentStep: string;
}) {
  const { setCurrentStep, stepsDone, setStepsDone, currentStep } = props;
  const { services, setServices } = useServices();
  useEffect(() => {
    if (currentStep === "activities") {
      setStepsDone(["tripDetails", "accommodation", "activities"]);
    } else if (currentStep === "accommodation") {
      setStepsDone(["tripDetails", "accommodation"]);
    } else if (currentStep === "transport") {
      setStepsDone(["tripDetails", "accommodation", "activities", "transport"]);
    }
  }, [setStepsDone, currentStep]);

  const activities = [
    {
      id: "1",
      serviceType: "Louvre",
      description: "Service 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
      image: louvreImage,
    },
    {
      id: "2",
      serviceType: "Lucerne",
      description: "Service 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
      image: lucerneImage,
    },
    {
      id: "3",
      serviceType: "Mont Saint",
      description: "Service 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
      image: montsaintImage,
    },
    {
      id: "4",
      serviceType: "Triomphe",
      description: "Service 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
      image: triomphImage,
    },
    {
      id: "5",
      serviceType: "Notre Dame",
      description: "Service 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
      image: notreImage,
    },
    {
      id: "6",
      serviceType: "Quartier",
      description: "Service 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
      image: quartierImage,
    },
  ];
  const transports = [
    {
      id: "1",
      serviceType: "Transport 1",
      description: "Transport 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
    },
    {
      id: "2",
      serviceType: "Transport 2",
      description: "Transport 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
    },
    {
      id: "3",
      serviceType: "Transport 3",
      description: "Transport 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
    },
    {
      id: "4",
      serviceType: "Transport 4",
      description: "Transport 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
    },
    {
      id: "5",
      serviceType: "Transport 5",
      description: "Transport 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
    },
    {
      id: "6",
      serviceType: "Transport 6",
      description: "Transport 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
    },
  ];
  const hotels = [
    {
      id: "1",
      serviceType: "Hotel 1",
      description: "Hotel 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
    },
    {
      id: "2",
      serviceType: "Hotel 2",
      description: "Hotel 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
    },
    {
      id: "3",
      serviceType: "Hotel 3",
      description: "Hotel 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
    },
    {
      id: "4",
      serviceType: "Hotel 4",
      description: "Hotel 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
    },
    {
      id: "5",
      serviceType: "Hotel 5",
      description: "Hotel 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
    },
    {
      id: "6",
      serviceType: "Hotel 6",
      description: "Hotel 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
    },
  ];

  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomType: "Room 1",
      roomConfig: "Room 1",
      extraBed: "Yes",
      nbOfRooms: 2,
      defaultPrice: 350,
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

  const [openHotelPopup, setOpenHotelPopup] = useState(-1);
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
                  <div className="px-5 py-3">
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
                  <div className="px-5">
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

        {/* ACTIVITIES RIGHT BAR  */}
        {currentStep === "activities" && (
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
                  <div className="col-auto self-center">
                    <Image src={filterIcon} alt="filter" />
                  </div>
                </div>
              </div>
              <div className="col-12 py-3">
                <div className="flex pt-4 justify-between">
                  <div className="flex items-center">
                    <div className="rounded-lg bg-blue py-2 px-3 text-darkblue poppins-medium pointer">
                      All
                    </div>
                    <div className="rounded-lg py-2 px-3 text-grey poppins-medium pointer">
                      Recommended
                    </div>
                  </div>

                  <div className="bg-darkblue py-2 px-3 rounded-lg text-gold poppins-medium cursor-pointer">
                    <div className="flex items-center h-full">
                      <Image src={addGoldIcon} alt="Add Icon" />
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
                          src={activity.image}
                          alt="tour image"
                          className="rounded-lg"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="pl-3">
                          <div className="f-20 text-darkblue poppins-medium">
                            {activity.serviceType}
                          </div>
                          <div className="flex items-center">
                            <div className="f-20 poppins-semibold text-darkblue">
                              ${activity.price}
                            </div>
                            <div className="f-14 text-darkblue">
                              &nbsp; Default
                            </div>
                          </div>
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
                        <Image
                          src={addCircleIcon}
                          alt="add"
                          style={{ width: "24px" }}
                        />
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
                              const service = {
                                ...activity,
                                id: newDays[index].services.length + 1,
                              };
                              newDays[index].services = [
                                service,
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
        )}

        {/* TRANSPORT RIGHT BAR  */}
        {currentStep === "transport" && (
          <div className="col-3">
            <div className="row bg-white rounded-lg py-3">
              <div className="col-12">
                {/* search Transports  */}
                <div className="row">
                  <div className="col">
                    <div className="absolute left-6 top-3 pointer">
                      <Image src={searchIcon} alt="search icon" />
                    </div>
                    <input
                      type="text"
                      className="rounded-lg bg-blue text-darkblue pl-10 pr-5 py-3 w-full"
                      placeholder="Search Transport"
                    />
                  </div>
                  <div className="col-auto self-center">
                    <Image src={filterIcon} alt="filter" />
                  </div>
                </div>
              </div>
              <div className="col-12 py-3">
                <div className="flex pt-4 justify-between">
                  <div className="flex items-center">
                    <div className="rounded-lg bg-blue py-2 px-3 text-darkblue poppins-medium pointer">
                      All
                    </div>
                    <div className="rounded-lg py-2 px-3 text-grey poppins-medium pointer">
                      Recommended
                    </div>
                  </div>

                  <div className="bg-darkblue py-2 px-3 rounded-lg text-gold poppins-medium cursor-pointer">
                    <div className="flex items-center h-full">
                      <Image src={addGoldIcon} alt="Add Icon" />
                    </div>
                  </div>
                </div>
              </div>
              {transports.map((transport, index) => {
                return (
                  //     {/* Transport service */}
                  <div className="col-12 py-2" key={index + transport.location}>
                    <div className="flex py-2 px-2 border-dashed rounded-lg items-center justify-between">
                      <div className="flex">
                        <Image
                          src={carImage}
                          alt="Car image"
                          className="rounded-lg"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="pl-3">
                          <div className="f-20 text-darkblue poppins-medium">
                            {transport.serviceType}
                          </div>
                          <div className="f-14 text-darkblue">
                            Paris, France
                          </div>
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
                        <Image
                          src={addCircleIcon}
                          alt="add"
                          style={{ width: "24px" }}
                        />
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
                              const service = {
                                ...transport,
                                id: newDays[index].services.length + 1,
                              };
                              newDays[index].services = [
                                service,
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
        )}

        {/* ACCOMMODATION RIGHT BAR  */}
        {currentStep === "accommodation" && (
          <div className="col-3">
            <div className="row bg-white rounded-lg py-3">
              <div className="col-12">
                {/* search Transports  */}
                <div className="row">
                  <div className="col">
                    <div className="absolute left-6 top-3 pointer">
                      <Image src={searchIcon} alt="search icon" />
                    </div>
                    <input
                      type="text"
                      className="rounded-lg bg-blue text-darkblue pl-10 pr-5 py-3 w-full"
                      placeholder="Search Transport"
                    />
                  </div>
                  <div className="col-auto self-center">
                    <Image src={filterIcon} alt="filter" />
                  </div>
                </div>
              </div>
              <div className="col-12 py-3">
                <div className="flex pt-4 justify-between">
                  <div className="flex items-center">
                    <div className="rounded-lg bg-blue py-2 px-3 text-darkblue poppins-medium pointer">
                      All
                    </div>
                    <div className="rounded-lg py-2 px-3 text-grey poppins-medium pointer">
                      Recommended
                    </div>
                  </div>

                  <div className="bg-darkblue py-2 px-3 rounded-lg text-gold poppins-medium cursor-pointer">
                    <div className="flex items-center h-full">
                      <Image src={addGoldIcon} alt="Add Icon" />
                    </div>
                  </div>
                </div>
              </div>
              {hotels.map((hotel, index) => {
                return (
                  //     {/* hotel service */}
                  <div className="col-12 py-2" key={index + hotel.location}>
                    <div className="flex py-2 px-2 border-dashed rounded-lg items-center justify-between">
                      <div className="flex">
                        <Image
                          src={carImage}
                          alt="Car image"
                          className="rounded-lg"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="pl-3">
                          <div className="f-20 text-darkblue poppins-medium">
                            {hotel.serviceType}
                          </div>
                          <div className="f-14 text-darkblue">
                            Paris, France
                          </div>
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
                        <Image
                          src={addCircleIcon}
                          alt="add"
                          style={{ width: "24px" }}
                        />
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
                              const service = {
                                ...hotel,
                                id: newDays[index].services.length + 1,
                              };
                              newDays[index].services = [
                                service,
                                ...newDays[index].services,
                              ];
                              setOpenHotelPopup(index);
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
        )}

        {openHotelPopup > -1 && (
          <>
            <div className="hotel-day-popup">
              <div className="relative w-full h-full">
                <div className="bg-grey rounded-lg hotel-content">
                  <>
                    <div className="row py-4">
                      {/* main hotel bar  */}
                      <div className="col-12">
                        <div className="rounded-lg px-5 py-2">
                          <div className="flex justify-between">
                            <div className="">
                              <div className="f-28 text-darkblue poppins-semibold">
                                The Ritz
                              </div>
                              <div className="text-grey f-14 poppins-regular">
                                Paris, France
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Meal basis  */}
                      <div className="col-12 px-2">
                        <div className="px-5">
                          <div className="text-darkblue pb-2 pt-4 f-20">
                            Basis <span className="text-orange">*</span>
                          </div>
                          <div className="light-input">
                            <select
                              className="bg-white rounded-lg px-5 py-4 w-full pointer"
                              style={{ height: "56px" }}
                            >
                              <option value="Meal Basis">Meal Basis</option>
                              <option value="Breakfast">Breakfast</option>
                              <option value="Dinner">Dinner</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* ROOMS  */}
                      <div className="col-12">
                        <div className="px-5">
                          <div className="row pt-5">
                            <div className="col px-2">
                              <div className="text-darkblue">
                                Room Type <span className="text-orange">*</span>
                              </div>
                            </div>
                            <div className="col px-2">
                              <div className="text-darkblue">
                                Room Config.
                                <span className="text-orange">*</span>
                              </div>
                            </div>
                            <div className="col px-2">
                              <div className="text-darkblue">
                                Extra Bed <span className="text-orange">*</span>
                              </div>
                            </div>
                            <div className="col px-2">
                              <div className="text-darkblue">
                                Nb. of Rooms{" "}
                                <span className="text-orange">*</span>
                              </div>
                            </div>
                            <div className="col px-2">
                              <div className="text-darkblue">
                                Default Price ($){" "}
                                <span className="text-orange">*</span>
                              </div>
                            </div>
                            <div className="col-auto px-2">
                              <div className="opacity-0">
                                <Image src={deleteRedIcon} alt="delete" />
                              </div>
                            </div>
                          </div>
                          {rooms.map((room, index) => {
                            return (
                              <>
                                <div className="row py-1">
                                  <div className="col px-2">
                                    <div className="light-input">
                                      <input
                                        className="px-5 py-4 rounded-lg bg-white text-darkblue w-full"
                                        type="text"
                                        placeholder="Room Type"
                                        value={room.roomType}
                                        onChange={(e) => {
                                          const value = e.target.value;
                                          setRooms((prevRooms) => {
                                            const newRooms = [...prevRooms];
                                            newRooms[index] = {
                                              ...newRooms[index],
                                              roomType: value,
                                            };
                                            return newRooms;
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col px-2">
                                    <select
                                      className="bg-white rounded-lg px-5 py-4 w-full pointer"
                                      style={{ height: "56px" }}
                                    >
                                      <option value="Single">Single</option>
                                      <option value="Double">Double</option>
                                      <option value="Queen">Queen</option>
                                    </select>
                                  </div>
                                  <div className="col px-2">
                                    <select
                                      className="bg-white rounded-lg px-5 py-4 w-full pointer"
                                      style={{ height: "56px" }}
                                    >
                                      <option value="Yes">Yes</option>
                                      <option value="No">No</option>
                                    </select>
                                  </div>
                                  <div className="col px-2">
                                    <div className="light-input">
                                      <input
                                        className="px-5 py-4 rounded-lg bg-white text-darkblue w-full"
                                        type="number"
                                        placeholder="2"
                                        value={room.nbOfRooms}
                                        onChange={(e) => {
                                          const value = parseInt(
                                            e.target.value
                                          );
                                          setRooms((prevRooms) => {
                                            const newRooms = [...prevRooms];
                                            newRooms[index] = {
                                              ...newRooms[index],
                                              nbOfRooms: value,
                                            };
                                            return newRooms;
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col px-2">
                                    <div className="light-input">
                                      <input
                                        className="px-5 py-4 rounded-lg bg-white text-darkblue w-full"
                                        type="number"
                                        placeholder="350"
                                        value={room.defaultPrice}
                                        onChange={(e) => {
                                          const value = parseFloat(
                                            e.target.value
                                          );
                                          setRooms((prevRooms) => {
                                            const newRooms = [...prevRooms];
                                            newRooms[index] = {
                                              ...newRooms[index],
                                              defaultPrice: value,
                                            };
                                            return newRooms;
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-auto px-2 self-center">
                                    <div
                                      className="pointer"
                                      onClick={() => {
                                        setRooms((prevRooms) =>
                                          prevRooms.filter((_, i) => {
                                            return i !== index;
                                          })
                                        );
                                      }}
                                    >
                                      <Image src={deleteRedIcon} alt="delete" />
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}

                          <div className="row pt-3">
                            <div className="col-12 self-center px-2">
                              <div
                                className=" flex justify-center rounded-lg py-4 border-dashed pointer"
                                onClick={() => {
                                  setRooms([
                                    ...rooms,
                                    {
                                      id: rooms.length + 1,
                                      roomType: "",
                                      roomConfig: "",
                                      extraBed: "",
                                      nbOfRooms: 0,
                                      defaultPrice: 0,
                                    },
                                  ]);
                                  console.log(rooms);
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

                  <div className="row pt-4">
                    <div className="col-6">
                      <div
                        className="light-button text-darkblue poppins-medium cursor-pointer"
                        onClick={() => {
                          setOpenHotelPopup(-1);
                        }}
                      >
                        <div className="flex items-center justify-center h-full">
                          <div className="">Cancel</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className="dark-button text-gold poppins-medium cursor-pointer"
                        onClick={() => {
                          setOpenHotelPopup(-1);
                        }}
                      >
                        <div className="flex items-center justify-center h-full">
                          <div className="">Save</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

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
