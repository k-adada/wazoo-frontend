"use client";
import React, { useEffect, useState } from "react";
import "./dist/itineraries.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";
import Link from "next/link";
import ServicesTable from "../components/ServicesTable";

import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import addIcon from "../assets/Icon_Add.png";
import backIcon from "../assets/Icon_Back.png";
import arrowIcon from "../assets/down_arrow_dark.png";
import serviceEmptyIcon from "../assets/services_empty.png";
import listIcon from "../assets/Icon_List_View.png";
import ServicesSwiper from "../components/servicesSwiper";
import locationIcon from "../assets/Icon_Location.png";
import clockIcon from "../assets/Icon_Time.png";
import calendarIcon from "../assets/Icon_Calendar_dark.png";
import dollarIcon from "../assets/Icon_Dollars.png";
import louvreImage from "../assets/images/services/Louvre.jpg";
import lucerneImage from "../assets/images/services/lucerne.jpg";
import montsaintImage from "../assets/images/services/montsaintmich.jpg";
import triomphImage from "../assets/images/services/Triomphe.jpg";
import notreImage from "../assets/images/services/NotreDameCathedral.jpg";
import quartierImage from "../assets/images/services/Quartier_Latin.jpg";

export default function CreateItineraries() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };
  const [itineraries, setItineraries] = useState([1]);

  const images = [
    louvreImage,
    lucerneImage,
    montsaintImage,
    triomphImage,
    notreImage,
    quartierImage,
  ];

  const [days, setDays] = useState([
    {
      id: 1,
      notesCollapsed: false,
      collapsed: false,
      services: [
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
      ] as any[],
    },
    {
      id: 2,
      notesCollapsed: false,
      collapsed: true,
      services: [
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
      ] as any[],
    },
    {
      id: 3,
      notesCollapsed: false,
      collapsed: false,
      services: [
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
      ] as any[],
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pb-[100px]">
      <div className="container-fluid">
        {/* navbar  */}
        <div className="row items-center">
          <div className="col-auto">
            <LeftDrawerDMC />
          </div>
          <div className="col-auto">
            <div className="poppins-semibold text-darkblue">France</div>
          </div>
          <div className="col"></div>
          <div className="col-auto">
            <div className="cursor-pointer">
              <Image src={notificationIcon} alt="notification" />
            </div>
          </div>
          <div className="col-auto">
            <div className="flex items-center cursor-pointer">
              <div className="user-icon">
                <Image src={avatarIcon} alt="avatar" />
              </div>
              <div className="poppins-medium text-darkblue pl-4">
                Brit Ferguson
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-auto">
            <div
              className="flex items-center py-5 back-button"
              onClick={routerBack}
            >
              <Image src={backIcon} alt="back" />
              <div className="pl-2 text-darkblue">Back</div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">
              Itineraries
            </div>
          </div>
        </div>

        {itineraries.length > 0 ? (
          <div className="row">
            <div className="col-9">
              <div className="row justify-between">
                <div className="col-auto">
                  <div className="f-16 py-3 px-3 bg-white rounded-lg">
                    Filters
                  </div>
                </div>
                <div className="flex col-auto">
                  <Link href="/create-itineraries">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={addIcon} alt="add icon" />
                        <div className="pl-4">Add Itinerary</div>
                      </div>
                    </div>
                  </Link>
                  <div className="px-3"></div>
                  <Link href="#">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={listIcon} alt="list icon" />
                        <div className="pl-4">List View</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row justify-between">
                <div className="col-12 py-3"></div>
                {/* <div className="col-12 pt-7">
                  <ServicesTable />
                </div> */}
                {[1, 2, 3, 4, 5, 6].map((item, index) => {
                  return (
                    <div className="col-4" key={index}>
                      <div className="row rounded-lg py-2">
                        <div className="col-12 pb-4 px-2">
                          <div className="image-wrapper-83">
                            <Image src={images[index]} alt="casinoImage" />
                          </div>
                        </div>
                        <div className="col-12 px-2">
                          <div className="f-16 text-darkblue poppins-medium">
                            Itinerary Name {index + 1}
                          </div>
                        </div>

                        <div className="col-12 px-2">
                          <div className="f-16 text-grey pt-4 line-clamp-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Veniam voluptates eveniet iste corrupti! Cum,
                          </div>
                        </div>

                        <div className="col-auto px-2 py-1">
                          <div className="service-tag flex">
                            <Image
                              className="mr-2"
                              src={locationIcon}
                              alt="location"
                            />
                            <div className="text-grey">Paris, France</div>
                          </div>
                        </div>

                        <div className="col-auto px-2 py-1">
                          <div className="service-tag flex">
                            <Image
                              className="mr-2"
                              src={clockIcon}
                              alt="time"
                            />
                            <div className="text-grey">3h</div>
                          </div>
                        </div>

                        <div className="col-auto px-2 py-1">
                          <div className="service-tag flex">
                            <Image
                              className="mr-2"
                              src={calendarIcon}
                              alt="calendar"
                            />
                            <div className="text-grey">Oct 11 - Oct 15</div>
                          </div>
                        </div>
                        <div className="col-auto px-2 py-1">
                          <div className="service-tag flex">
                            <Image
                              className="mr-2"
                              src={dollarIcon}
                              alt="dollar sign"
                            />
                            <div className="text-grey">$350</div>
                          </div>
                        </div>
                        <div className="col-auto px-2 py-1">
                          <div className="service-tag flex">
                            <div className="text-grey">Outdoor Activity</div>
                          </div>
                        </div>
                        <div className="col-auto px-2 py-1">
                          <div className="service-tag flex">
                            <div className="text-grey">Sub-type</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-3">
              <div className="row bg-white rounded-lg py-2">
                <div className="col-12 px-2">
                  <div className="f-16 text-darkblue poppins-medium">
                    Itinerary Name
                  </div>
                </div>

                <div className="col-12 pb-4 px-2">
                  <ServicesSwiper images={[]} />
                </div>

                <div className="col-12 px-2">
                  <div className="f-16 text-grey py-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image src={locationIcon} alt="location" />
                    <div className="text-grey pl-2">Paris, France</div>
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image src={clockIcon} alt="time" />
                    <div className="text-grey">3h</div>
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image src={calendarIcon} alt="calendar" />
                    <div className="text-grey">Oct 11 - Oct 15</div>
                  </div>
                </div>
                <div className="col-12">
                  {days.map((day, index) => {
                    return (
                      <div key={index}>
                        <div
                          className="cursor-pointer rounded-lg py-2 my-2 px-2 bg-lightblue flex items-center justify-between"
                          onClick={() => {
                            let temp = [...days];
                            temp[index].collapsed = !temp[index].collapsed;
                            setDays(temp);
                          }}
                        >
                          <div className="f-24 text-darkblue poppins-semibold">
                            Day {day.id}
                          </div>

                          <div className="">
                            <Image src={arrowIcon} alt="arrow" />
                          </div>
                        </div>
                        <div
                          className={`${
                            day.collapsed ? "hidden" : ""
                          } col-12 py-2`}
                        >
                          {day.services.map((service, index) => {
                            return (
                              <div
                                className="col-12 py-2"
                                key={index + service.location}
                              >
                                <div className="flex py-2 px-2 bg-grey rounded-lg items-center justify-between">
                                  <div className="flex">
                                    <Image
                                      src={service.image}
                                      alt="tour image"
                                      className="rounded-lg"
                                      style={{
                                        width: "70px",
                                        height: "70px",
                                        objectFit: "cover",
                                      }}
                                    />
                                    <div className="pl-3">
                                      <div className="f-16 text-darkblue poppins-medium">
                                        {service.serviceType}
                                      </div>
                                      <div className="items-center">
                                        <div className="f-14 text-grey line-clamp-2">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit. Excepturi nisi
                                          fugiat inventore iusto architecto,
                                          similique, voluptas eum culpa neque
                                          saepe tempore, quo magnam! Molestias
                                          mollitia ducimus voluptas nihil
                                          excepturi labore!
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="row items-center justify-center">
              <div className="col-12">
                <div className="text-center">
                  <Image
                    className="m-auto"
                    src={serviceEmptyIcon}
                    alt="serviceEmptyIcon"
                  />
                  <div className="f-48 text-darkblue poppins-medium">
                    No Itineraries Created
                  </div>
                  <div className="f-24 text-grey">
                    Start Creating Your Itinerary
                  </div>
                </div>
              </div>

              <div className="col-auto pt-[64px]">
                <Link href="/create-itineraries">
                  <div className="dark-button text-gold poppins-medium cursor-pointer">
                    <div className="flex items-center h-full">
                      <Image src={addIcon} alt="add icon" />
                      <div className="pl-4">Add Itinerary</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
