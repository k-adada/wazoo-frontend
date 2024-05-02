"use client";
import React, { useState } from "react";
import "./dist/chat.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Icons from "../Icons";
import Images from "../Images";
import ServicesSwiper from "../components/servicesSwiper";
import UploadInput from "../components/uploadInput";
import ResizableTabs from "../components/ResizableTabs";

export default function Chat() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };

  const tempImages = [
    Images.australiaImage,
    Images.athensImage,
    Images.geneva,
    Images.gastronomic,
    Images.montsaint,
    Images.tajmahal,
    Images.brazil,
    Images.versailles,
    Images.switzerlandImage,
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
          image: Images.louvreImage,
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
          image: Images.lucerneImage,
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
          image: Images.notreImage,
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
          image: Images.quartierImage,
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
          image: Images.montsaintImage,
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
          image: Images.triomphImage,
        },
      ] as any[],
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue">
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto">
            <div className="flex">
              <div
                className="flex items-center py-5 back-button"
                onClick={routerBack}
              >
                <Image src={Icons.backIcon} alt="back" />
                <div className="pl-2 text-darkblue">Back</div>
              </div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">Chat</div>
          </div>
        </div>

        <div className="row">
          {/* CHAT BAR LEFT */}
          <div className="col-2 px-2">
            <div className="bg-white rounded-lg py-2 h-[90vh] overflow-auto">
              <div className=""></div>

              <div className="chats-container p-2">
                <div className="text-grey poppins-medium">All Messages</div>
                <div className="py-2">
                  <div className="flex items-center pointer rounded-lg bg-lightblue p-2">
                    <div className="pr-3">
                      <Image
                        src={Icons.brit}
                        alt="user"
                        width={42}
                        height={42}
                        className="m-auto"
                      />
                    </div>

                    <div className="text-darkblue f-18 poppins-medium">
                      {"Brit"}
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <div className="flex items-center pointer rounded-lg p-2">
                    <div className="pr-3">
                      <Image
                        src={Icons.veronica}
                        alt="user"
                        width={42}
                        height={42}
                        className="m-auto"
                      />
                    </div>

                    <div className="text-darkblue f-18 poppins-medium">
                      {"Veronica"}
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <div className="flex items-center pointer rounded-lg p-2">
                    <div className="pr-3">
                      <Image
                        src={Icons.vicky}
                        alt="user"
                        width={42}
                        height={42}
                        className="m-auto"
                      />
                    </div>

                    <div className="text-darkblue f-18 poppins-medium">
                      {"Vicky"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHAT WINDOW MIDDLE  */}
          <div className="col-7 px-2">
            <div className="rounded-lg bg-white p-2 h-[90vh] overflow-auto">
              <div className="bg-lightblue rounded-lg py-2 absolute top-2 w-[94%]">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="">
                      <Image
                        src={Icons.brit}
                        alt="user"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="pl-3">
                      <div className="poppins-medium f-18 text-darkblue">
                        Brit Ferguson
                      </div>
                      <div className="poppins-medium f-16 text-darkblue">
                        DMC
                      </div>
                    </div>
                  </div>

                  {/* <div className="">
                    <input className="input-light" type="text" />
                  </div> */}
                </div>
              </div>
              {/* CHAT */}
              <div className="py-20">
                {/* RIGHT MESSAGE */}
                <div className="flex justify-end">
                  <div className="">
                    <div className="f-14 text-darkblue poppins-medium text-right">
                      <span className="text-grey f-12 poppins-regular pr-3">
                        11:28
                      </span>
                      Brit Ferguson
                    </div>

                    {/* CONTENT MESSAGE */}
                    <div className="">
                      <div className="text-darkblue f-16 poppins-medium">
                        {"Hello, how can I help you?"}
                      </div>
                    </div>
                  </div>
                  <div className="pl-2">
                    <Image src={Icons.brit} alt="user" width={50} height={50} />
                  </div>
                </div>

                {/* LEFT MESSAGE */}
                <div className="flex">
                  <div className="pr-2">
                    <Image
                      src={Icons.veronica}
                      alt="user"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <div className="f-14 text-darkblue poppins-medium">
                      Brit Ferguson
                      <span className="text-grey f-12 poppins-regular pl-3">
                        11:28
                      </span>
                    </div>
                    {/* CONTENT MESSAGE */}
                    <div className="">
                      <div className="text-darkblue f-16 poppins-medium">
                        {"Hello, how can I help you?"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT REQUEST */}
                <div className="flex justify-end">
                  <div className="w-full">
                    <div className="f-14 text-darkblue poppins-medium text-right">
                      <span className="text-grey f-12 poppins-regular pr-3">
                        11:28
                      </span>
                      Brit Ferguson
                    </div>

                    {/* CONTENT MESSAGE */}
                    {/* RIGHT MESSAGE REQUEST DETAILS*/}
                    <div className="flex bg-blue w-[75%] p-2 rounded-lg ml-auto">
                      <Image
                        src={Images.lucerneImage}
                        alt="user"
                        width={200}
                        height={200}
                        className="rounded-lg w-[250px] h-[150px] object-cover"
                      />
                      <div className="pl-2">
                        <div className="text-darkblue f-16 poppins-medium">
                          Request Details
                        </div>
                        <div className="f-12 text-grey poppins-regular line-clamp-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit nihil alias blanditiis
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div className="text-darkblue f-14 poppins-medium">
                            Packages
                            <div className="flex">
                              {tempImages
                                .slice(0, 4)
                                .map((packageImage, index) => (
                                  <Image
                                    key={index}
                                    className="rounded-full"
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      transform: `translateX(-${index * 50}%)`,
                                    }}
                                    src={packageImage}
                                    alt="packageImage"
                                  />
                                ))}
                            </div>
                          </div>
                          <div className="text-darkblue f-14 poppins-medium pr-10">
                            Services
                            <div className="flex">
                              {tempImages
                                .slice(4, 9)
                                .map((serviceImage, index) => (
                                  <Image
                                    key={index}
                                    className="rounded-full"
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      transform: `translateX(-${index * 50}%)`,
                                    }}
                                    src={serviceImage}
                                    alt="serviceImage"
                                  />
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-2 justify-end gap-2">
                      <div className="itinerary-tag rounded-lg pointer flex items-center">
                        <div className="">I</div>
                        Test
                      </div>
                      <div className="itinerary-tag rounded-lg pointer flex items-center">
                        Test
                      </div>
                      <div className="dark-button text-gold flex items-center">
                        Share Sample Itinerary
                      </div>
                    </div>
                  </div>
                  <div className="pl-2">
                    <Image src={Icons.brit} alt="user" width={50} height={50} />
                  </div>
                </div>

                {/* LEFT REQUEST */}
                <div className="flex">
                  <Image
                    src={Icons.veronica}
                    alt="user"
                    width={50}
                    height={50}
                    className="self-start"
                  />
                  <div className="pl-2">
                    <div className="f-14 text-darkblue poppins-medium">
                      Brit Ferguson
                      <span className="text-grey f-12 poppins-regular pl-3">
                        11:28
                      </span>
                    </div>
                    {/* CONTENT MESSAGE */}
                    {/* RIGHT MESSAGE REQUEST DETAILS*/}
                    <div className="flex bg-blue w-[75%] p-2 rounded-lg mr-auto">
                      <Image
                        src={Images.lucerneImage}
                        alt="user"
                        width={200}
                        height={200}
                        className="rounded-lg w-[250px] h-[150px] object-cover"
                      />
                      <div className="pl-2">
                        <div className="text-darkblue f-16 poppins-medium">
                          Request Details
                        </div>
                        <div className="f-12 text-grey poppins-regular">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit nihil alias blanditiis
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div className="text-darkblue f-14 poppins-medium">
                            Packages
                            <div className="flex">
                              {tempImages
                                .slice(0, 4)
                                .map((packageImage, index) => (
                                  <Image
                                    key={index}
                                    className="rounded-full"
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      transform: `translateX(-${index * 50}%)`,
                                    }}
                                    src={packageImage}
                                    alt="packageImage"
                                  />
                                ))}
                            </div>
                          </div>
                          <div className="text-darkblue f-14 poppins-medium pr-10">
                            Services
                            <div className="flex">
                              {tempImages
                                .slice(4, 9)
                                .map((serviceImage, index) => (
                                  <Image
                                    key={index}
                                    className="rounded-full"
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      transform: `translateX(-${index * 50}%)`,
                                    }}
                                    src={serviceImage}
                                    alt="serviceImage"
                                  />
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SAMPLE */}
                <div className="flex justify-end">
                  <div className="w-full pr-2">
                    <div className="f-14 text-darkblue poppins-medium text-right">
                      <span className="text-grey f-12 poppins-regular pr-3">
                        11:28
                      </span>
                      Brit Ferguson
                    </div>

                    {/* CONTENT MESSAGE */}
                    {/* RIGHT MESSAGE SAMPLE*/}
                    <div className="flex bg-blue w-[75%] p-2 rounded-lg ml-auto relative">
                      <div className="absolute right-2 top-3">
                        <Image
                          src={Icons.arrowDownDarkIcon}
                          alt="arrow"
                          width={20}
                          height={20}
                          className="rounded-lg object-cover -rotate-90"
                        />
                      </div>
                      <Image
                        src={Images.lucerneImage}
                        alt="user"
                        width={300}
                        height={200}
                        className="rounded-lg w-[250px] h-[150px] object-cover"
                      />
                      <div className="pl-2">
                        <div className="text-darkblue f-16 poppins-medium">
                          Sample France Itinerary
                        </div>
                        <div className="f-12 text-grey poppins-regular line-clamp-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit nihil alias blanditiis
                        </div>

                        {/* TAGS  */}
                        <div className="flex flex-wrap">
                          <div className="itinerary-tag rounded-lg poppins-medium text-darkblue m-1 f-12">
                            5 days
                          </div>
                          <div className="itinerary-tag rounded-lg poppins-medium text-darkblue m-1 f-12">
                            Theme
                          </div>
                          <div className="itinerary-tag rounded-lg poppins-medium text-darkblue m-1 f-12">
                            Seasonality
                          </div>
                          <div className="itinerary-tag rounded-lg poppins-medium text-darkblue m-1 f-12">
                            Oct 11 - Oct 15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <Image src={Icons.brit} alt="user" width={50} height={50} />
                  </div>
                </div>

                {/* LEFT SAMPLE */}
                <div className="flex">
                  <Image
                    src={Icons.veronica}
                    alt="user"
                    width={50}
                    height={50}
                    className="self-start"
                  />
                  <div className="pl-2">
                    <div className="f-14 text-darkblue poppins-medium">
                      Brit Ferguson
                      <span className="text-grey f-12 poppins-regular pl-3">
                        11:28
                      </span>
                    </div>
                    {/* CONTENT MESSAGE */}
                    {/* RIGHT MESSAGE REQUEST DETAILS*/}
                    <div className="flex bg-blue w-[75%] p-2 rounded-lg mr-auto relative">
                      <div className="absolute right-2 top-3">
                        <Image
                          src={Icons.arrowDownDarkIcon}
                          alt="arrow"
                          width={20}
                          height={20}
                          className="rounded-lg object-cover -rotate-90"
                        />
                      </div>
                      <Image
                        src={Images.lucerneImage}
                        alt="user"
                        width={300}
                        height={200}
                        className="rounded-lg w-[250px] h-[150px] object-cover"
                      />
                      <div className="pl-2">
                        <div className="text-darkblue f-16 poppins-medium">
                          Request Details
                        </div>
                        <div className="f-12 text-grey poppins-regular line-clamp-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit nihil alias blanditiis elit. Impedit
                          nihil alias blanditiis elit. Impedit nihil alias
                          blanditiis elit. Impedit nihil alias blanditiis elit.
                          Impedit nihil alias blanditiis elit. Impedit nihil
                          alias blanditiis elit. Impedit nihil alias blanditiis
                          elit. Impedit nihil alias blanditiis
                        </div>

                        {/* TAGS  */}
                        <div className="flex flex-wrap">
                          <div className="itinerary-tag rounded-lg poppins-medium text-darkblue m-1 f-12">
                            5 days
                          </div>
                          <div className="itinerary-tag rounded-lg poppins-medium text-darkblue m-1 f-12">
                            Theme
                          </div>
                          <div className="itinerary-tag rounded-lg poppins-medium text-darkblue m-1 f-12">
                            Seasonality
                          </div>
                          <div className="itinerary-tag rounded-lg poppins-medium text-darkblue m-1 f-12">
                            Oct 11 - Oct 15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-lightblue rounded-lg py-2 absolute bottom-0 w-[96%]">
                <div className="flex flex-wrap items-center">
                  <UploadInput />

                  <div className="rounded-full px-4 py-2 bg-slate-300 w-11/12 ml-2 flex justify-between items-center">
                    <div className="w-11/12">
                      <input
                        className="chat-input w-full f-14"
                        type="text"
                        placeholder="type here..."
                      />
                    </div>
                    <div className="pointer">
                      <Image
                        src={Icons.paperPlaneIconGold}
                        alt="user"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ITINERARY AND TRIPS BAR RIGHT */}
          <div className="col-3 px-2">
            <div className="bg-white rounded-lg py-2 h-[90vh] overflow-auto px-4">
              <ResizableTabs />

              <div className="row">
                <div className="col-12 px-2">
                  <div className="f-24 text-darkblue poppins-medium py-2">
                    {"Trip to france"}
                  </div>
                </div>

                <div className="col-12 pb-4 px-2">
                  <ServicesSwiper images={[]} />
                </div>

                <div className="col-12 px-2">
                  <div className="f-16 text-grey pt-1 pb-4">
                    {"selectedItinerary.description"}
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex items-center">
                    <Image src={Icons.locationDarkIcon} alt="location" />
                    <div className="text-grey pl-1">{"France"}</div>
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex items-center">
                    <Image src={Icons.clockDarkIcon} alt="time" />
                    <div className="text-grey pl-1">{"2h"}</div>
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex items-center">
                    <Image src={Icons.calendarDarkIcon} alt="calendar" />
                    <div className="text-grey pl-1">{"11 March"}</div>
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
                            <Image src={Icons.arrowDownDarkIcon} alt="arrow" />
                          </div>
                        </div>
                        <div
                          className={`${day.collapsed ? "hidden" : ""} py-1`}
                        >
                          {day.services.map((service, index) => {
                            return (
                              <div
                                className="py-1"
                                key={index + service.location}
                              >
                                <div className="flex p-2 bg-grey rounded-lg items-center justify-between">
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
        </div>
      </div>
    </main>
  );
}
