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
import serviceEmptyIcon from "../assets/services_empty.png";
import itineraryIcon from "../assets/Icon_Build_Package.png";
import reportIcon from "../assets/Icon_Invoice.png";
import listIcon from "../assets/Icon_List_View.png";
import ServicesSwiper from "../components/servicesSwiper";
import locationIcon from "../assets/Icon_Location.png";
import clockIcon from "../assets/Icon_Time.png";
import calendarIcon from "../assets/Icon_Calendar_dark.png";
import dollarIcon from "../assets/Icon_Dollars.png";
import userIcon from "../assets/Icon_My_Account_dark.png";
import phoneIcon from "../assets/phone_icon.png";
import searchIcon from "../assets/Icon_Search_Black.png";

export default function CreateItineraries() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };
  const [itineraries, setItineraries] = useState([1]);
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
                  <div className="f-20 py-3 px-3 bg-white rounded-lg">
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                  return (
                    <div className="col-4" key={index}>
                      <div className="row rounded-lg py-2">
                        <div className="col-12 pb-4 px-2">
                          <ServicesSwiper images={[]} />
                        </div>
                        <div className="col-12 px-2">
                          <div className="f-28 text-darkblue poppins-medium">
                            Itinerary Name {index + 1}
                          </div>
                        </div>

                        <div className="col-12 px-2">
                          <div className="f-20 text-grey pt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Veniam voluptates eveniet iste corrupti! Cum,
                          </div>
                        </div>

                        <div className="col-auto px-2 py-1">
                          <div className="service-tag flex">
                            <Image src={locationIcon} alt="location" />
                            <div className="text-grey">Paris, France</div>
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
                        <div className="col-auto px-2 py-1">
                          <div className="service-tag flex">
                            <Image src={dollarIcon} alt="dollar sign" />
                            <div className="text-grey">$350</div>
                          </div>
                        </div>
                        <div className="col-auto px-2 py-1">
                          <div className="service-tag flex">
                            <div className="text-grey">
                              Outdoor Activity
                            </div>
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
                  <div className="f-28 text-darkblue poppins-medium">
                    Itinerary Name
                  </div>
                </div>

                <div className="col-12 pb-4 px-2">
                  <ServicesSwiper images={[]} />
                </div>

                <div className="col-12 px-2">
                  <div className="f-20 text-grey py-4">
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
      

                <div className="col-12 px-2">
                  <div className="f-20 poppins-semibold text-darkblue py-2">
                    Service Provider
                  </div>
                  <div className="flex py-1">
                    <div className="">
                      <Image src={userIcon} alt="userIcon" />
                    </div>
                    <div className="text-darkblue">Le Touriste</div>
                  </div>
                  <div className="flex py-1">
                    <div className="">
                      <Image src={dollarIcon} alt="dollars" />
                    </div>
                    <div className="text-darkblue">$350</div>
                  </div>
                  <div className="flex py-1">
                    <div className="">
                      <Image src={phoneIcon} alt="phoneIcon" />
                    </div>
                    <div className="text-darkblue">
                      <a href="tel:+9613123456">+33 1 09 75 83 51</a>
                    </div>
                  </div>
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
