"use client";
import React, { useEffect, useState } from "react";
import "./dist/myTrips.css";
import Image from "next/image";
import Link from "next/link";
import ServicesTable from "../components/ServicesTable";
import { useRouter } from "next/navigation";

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
import Icons from "../Icons";
import MyTripsTable from "../components/requestTripComponents/MyTripsTable";

export default function MyTrips() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };
  const [services, setServices] = useState([1]);
  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto">
            <div className="flex">
              <div
                className="flex items-center py-5 back-button"
                onClick={routerBack}
              >
                <Image src={backIcon} alt="back" />
                <div className="pl-2 text-darkblue">Back</div>
              </div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">My Trips</div>
          </div>
        </div>

        {services.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <div className="row justify-between pt-10">
                <div className="col-auto">
                  <div className="f-16 py-2 px-3 bg-white rounded-lg">
                    Filters
                  </div>
                </div>

                <div className="col relative">
                  <input
                    type="text"
                    className="bg-white py-2 pl-10 rounded-lg w-full"
                    placeholder="Search"
                  />
                  <div className="absolute left-5 top-2">
                    <Image src={searchIcon} alt="search" />
                  </div>
                </div>
                <div className="flex col-auto">
                  <Link href="/request-trip">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={Icons.paperPlaneIconGold} alt="request" />
                        <div className="pl-4">Request a Trip</div>
                      </div>
                    </div>
                  </Link>
                  <div className="px-3"></div>
                  <Link href="#">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={reportIcon} alt="report icon" />
                        <div className="pl-4">Generate Reports</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 pt-7">
                  <MyTripsTable />
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
                    Your List is Empty
                  </div>
                  <div className="f-24 text-grey">
                    Start adding your services
                  </div>
                </div>
              </div>

              <div className="col-auto pt-[64px]">
                <Link href="/create-services">
                  <div className="dark-button text-gold poppins-medium cursor-pointer">
                    <div className="flex items-center h-full">
                      <Image src={addIcon} alt="add icon" />
                      <div className="pl-4">Add Service</div>
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
