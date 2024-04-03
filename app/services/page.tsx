"use client";
import React, { useState } from "react";
import "./dist/services.css";
import Image from "next/image";
import Link from "next/link";
import ServicesTable from "../components/ServicesTable";
import { useRouter } from "next/navigation";
import ServicesSwiper from "../components/servicesSwiper";

import Icons from "../Icons";

export default function CreateServices() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };

  const providers = [
    {
      name: "Service Provider 1",
      price: "$350",
      phone: "+33 1 09 75 83 51",
      email: "provider@email.com",
      availability: [
        { day: "Monday", time: "11:00am - 10:00pm" },
        { day: "Tuesday", time: "11:00am - 10:00pm" },
        { day: "Wednesday", time: "11:00am - 10:00pm" },
        { day: "Thursday", time: "11:00am - 10:00pm" },
        { day: "Friday", time: "11:00am - 10:00pm" },
        { day: "Saturday", time: "11:00am - 10:00pm" },
        { day: "Sunday", time: "11:00am - 10:00pm" },
      ],
    },
    {
      name: "Service Provider 2",
      price: "$350",
      phone: "+33 1 09 75 83 51",
      email: "provider@email.com",
      availability: [
        { day: "Monday", time: "11:00am - 10:00pm" },
        { day: "Tuesday", time: "11:00am - 10:00pm" },
        { day: "Wednesday", time: "11:00am - 10:00pm" },
        { day: "Thursday", time: "11:00am - 10:00pm" },
        { day: "Friday", time: "11:00am - 10:00pm" },
        { day: "Saturday", time: "11:00am - 10:00pm" },
        { day: "Sunday", time: "11:00am - 10:00pm" },
      ],
    },
  ];
  const services = [1];

  const [detailsTab, setDetailsTab] = useState("details");

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
                <Image src={Icons.backIcon} alt="back" />
                <div className="pl-2 text-darkblue">Back</div>
              </div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">Services</div>
          </div>
        </div>

        {services.length > 0 ? (
          <div className="row">
            <div className="col-9">
              <div className="row justify-between">
                <div className="col-auto">
                  <div className="f-16 py-2 px-3 bg-white rounded-lg pointer">
                    Filters
                  </div>
                </div>
                <div className="flex col-auto">
                  <Link href="/create-services">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={Icons.addIconGold} alt="add icon" />
                        <div className="pl-4">Add Service</div>
                      </div>
                    </div>
                  </Link>
                  <div className="px-3"></div>
                  <Link href="/create-services">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={Icons.listIconGold} alt="list icon" />
                        <div className="pl-4">List View</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row justify-between pt-10">
                <div className="flex col-auto">
                  <Link href="/create-itineraries">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image
                          src={Icons.itineraryIconGold}
                          alt="itineraryIcon icon"
                        />
                        <div className="pl-4">Create Itinerary</div>
                      </div>
                    </div>
                  </Link>
                  <div className="px-3"></div>
                  <Link href="#">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={Icons.reportIconGold} alt="report icon" />
                        <div className="pl-4">Generate Reports</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col relative">
                  <input
                    type="text"
                    className="bg-white py-2 pl-10 rounded-lg w-full"
                    placeholder="Search"
                  />
                  <div className="absolute left-5 top-2">
                    <Image src={Icons.searchIconDark} alt="search" />
                  </div>
                </div>

                <div className="col-12 pt-7">
                  <ServicesTable />
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="row bg-white rounded-lg py-2"
                style={{
                  maxHeight: "80vh",
                  overflowY: "auto",
                }}
              >
                <div className="col-12 px-2">
                  <div className="f-24 text-darkblue poppins-medium py-2">
                    Service Name
                  </div>
                </div>

                <div className="col-12 pb-4 px-2">
                  <ServicesSwiper images={[]} />
                </div>

                {/* DETAILS TABS  */}
                <div className="col-6 px-2 mb-5">
                  <div
                    className={
                      (detailsTab === "details" ? "bg-blue" : "bg-grey") +
                      " rounded-lg poppins-medium pointer"
                    }
                    onClick={() => setDetailsTab("details")}
                  >
                    <div className="py-2 text-center">Details</div>
                  </div>
                </div>
                <div className="col-6 px-2 mb-5">
                  <div
                    className={
                      (detailsTab === "providers" ? "bg-blue" : "bg-grey") +
                      " rounded-lg poppins-medium pointer"
                    }
                    onClick={() => setDetailsTab("providers")}
                  >
                    <div className="py-2 text-center">Providers</div>
                  </div>
                </div>

                {detailsTab === "details" && (
                  <>
                    <div className="col-auto px-2 py-1">
                      <div className="service-tag flex">
                        <Image src={Icons.locationDarkIcon} alt="location" />
                        <div className="text-grey pl-2">Paris, France</div>
                      </div>
                    </div>

                    <div className="col-auto px-2 py-1">
                      <div className="service-tag flex">
                        <Image src={Icons.clockDarkIcon} alt="time" />
                        <div className="text-grey pl-2">3h</div>
                      </div>
                    </div>

                    <div className="col-auto px-2 py-1">
                      <div className="service-tag flex">
                        <Image src={Icons.calendarDarkIcon} alt="calendar" />
                        <div className="text-grey pl-2">Oct 11 - Oct 15</div>
                      </div>
                    </div>
                    <div className="col-auto px-2 py-1">
                      <div className="service-tag flex">
                        <Image src={Icons.dollarIconDark} alt="dollar sign" />
                        <div className="text-grey pl-2">$350</div>
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
                    <div className="col-12 px-2 py-3">
                      <div className="f-14 text-darkblue pt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Veniam voluptates eveniet iste corrupti! Cum,
                        nulla exercitationem beatae tempora veritatis ex
                        voluptates labore a quae, reiciendis soluta? Error
                        repellat commodi similique.
                      </div>
                    </div>
                  </>
                )}

                {detailsTab === "providers" && (
                  <>
                    {providers.map((provider, index) => (
                      <div className="col-12 px-2 py-2" key={index}>
                        <div className="rounded-lg border">
                          <div className="px-2 pt-4">
                            <div className="flex items-center">
                              <div className="pr-3">
                                <Image
                                  height={32}
                                  src={Icons.userIconDark}
                                  alt="userIcon"
                                />
                              </div>
                              <div className="f-18 poppins-semibold text-darkblue ">
                                {provider.name}
                              </div>
                            </div>
                            <div className="pl-5 pt-2">
                              <div className="flex py-1">
                                <div className="pr-3">
                                  <Image
                                    src={Icons.dollarIconDark}
                                    alt="dollars"
                                  />
                                </div>
                                <div className="text-darkblue">
                                  {provider.price}
                                </div>
                              </div>
                              <div className="flex py-1">
                                <div className="pr-3">
                                  <Image
                                    src={Icons.phoneIconDark}
                                    alt="phoneIcon"
                                  />
                                </div>
                                <div className="text-darkblue">
                                  <a href={"tel:" + provider.phone}>
                                    {provider.phone}
                                  </a>
                                </div>
                              </div>
                              <div className="flex py-1">
                                <div className="pr-3">
                                  <Image
                                    src={Icons.calendarDarkIcon}
                                    alt="mail"
                                  />
                                </div>
                                <div className="text-darkblue">
                                  <a href={"mailto:" + provider.email}>
                                    {provider.email}
                                  </a>
                                </div>
                              </div>
                              <div className="py-4">
                                <div className="f-18 poppins-semibold text-darkblue py-2">
                                  Availability Times
                                </div>
                                {provider.availability.map(
                                  (availability, index) => (
                                    <div
                                      className="flex justify-between items-center"
                                      key={index}
                                    >
                                      <div className="text-darkblue poppins-medium">
                                        {availability.day}
                                      </div>
                                      <div className="text-darkblue pr-[80px]">
                                        {availability.time}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
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
                    src={Icons.serviceEmptyIconDark}
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
                      <Image src={Icons.addIconGold} alt="add icon" />
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
