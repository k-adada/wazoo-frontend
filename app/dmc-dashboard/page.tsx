import React from "react";
import "./dist/dmcDashboard.css";
import Image from "next/image";

import Link from "next/link";
import Icons from "../Icons";
import Images from "../Images";

export default function DmcDashboard() {
  const trips = [
    {
      id: 1,
      image: Images.aurora,
      tripId: "Trip ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
      status: "Pending TA",
    },
    {
      id: 2,
      image: Images.australiaImage,
      tripId: "Trip ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
      status: "Pending TA",
    },
    {
      id: 3,
      image: Images.italyImage,
      tripId: "Trip ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
      status: "Pending TA",
    },
    {
      id: 4,
      image: Images.egypt,
      tripId: "Trip ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
      status: "Pending TA",
    },
  ];

  const globalRequests = [
    {
      id: 1,
      image: Icons.jane,
      requestId: "Request ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
    },
    {
      id: 2,
      image: Icons.brit,
      requestId: "Request ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
    },
    {
      id: 3,
      image: Icons.marcus,
      requestId: "Request ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
    },
    {
      id: 4,
      image: Icons.mary,
      requestId: "Request ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
    },
  ];

  const tailoredRequests = [
    {
      id: 1,
      image: Icons.jane,
      requestId: "Request ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
    },
    {
      id: 2,
      image: Icons.brit,
      requestId: "Request ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
    },
    {
      id: 3,
      image: Icons.marcus,
      requestId: "Request ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
    },
    {
      id: 4,
      image: Icons.mary,
      requestId: "Request ID",
      taName: "TA Name",
      date: "Oct 11 - Oct 15",
      people: "3 adults 2 kids",
      location: "Paris, France",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="f-36 poppins-semibold text-darkblue py-5">
              Dashboard
            </div>
          </div>

          {/* CREATE SERVICES BUTTON */}
          <div className="col-auto">
            <Link href="/create-services">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={Icons.addIconGold} alt="add" />
                  <div className="pl-4">Create Services</div>
                </div>
              </div>
            </Link>
          </div>
          {/* CREATE SAMPLE ITINERARY BUTTON */}
          <div className="col-auto">
            <Link href="/create-itineraries">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={Icons.addIconGold} alt="add" />
                  <div className="pl-4">Create Sample Itinerary</div>
                </div>
              </div>
            </Link>
          </div>
          {/* CREATE CATALOG BUTTON */}
          <div className="col-auto">
            <Link href="/create-catalogues">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={Icons.addIconGold} alt="add" />
                  <div className="pl-4">Create Catalog</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 py-4"></div>
          <div className="col-9">
            {/* MY TRIPS START */}
            <div className="flex justify-between items-center">
              <div className="f-20 text-darkblue poppins-semibold">
                My Trips
              </div>
              <div className="flex items-center pointer">
                <div className="f-14 poppins-semibold text-darkblue">
                  View All
                </div>
                <div className="pl-3">
                  <Image src={Icons.arrowDownDarkIcon} alt="right-arrow" />
                </div>
              </div>
            </div>
            <div className="py-2 px-3 rounded-lg bg-white ">
              {trips.map((trip, index) => (
                <div
                  className="flex items-center justify-between rounded-lg bg-blue py-2 w-full my-1"
                  key={index}
                >
                  {/* TRIP IMAGE */}
                  <div className="col-auto">
                    <Image
                      className="rounded-lg w-[44px] h-[44px]"
                      src={trip.image}
                      alt="trip"
                    />
                  </div>

                  {/* TRIP ID AND NAME  */}
                  <div className="col-auto">
                    <div className="text-grey poppins-medium f-16">
                      {trip.tripId}
                    </div>
                    <div className="text-darkblue poppins-medium">
                      {trip.taName}
                    </div>
                  </div>

                  {/* TRIP DATE  */}
                  <div className="col-auto flex items-center">
                    <Image src={Icons.calendarDarkIcon} alt="calendar" />
                    <div className="pl-2 text-darkblue poppins-medium">
                      {trip.date}
                    </div>
                  </div>

                  {/* TRIP PEOPLE */}
                  <div className="col-auto flex items-center">
                    <Image src={Icons.userIconDark} alt="calendar" />
                    <div className="pl-2 text-darkblue poppins-medium">
                      {trip.people}
                    </div>
                  </div>

                  {/* TRIP LOCATION */}
                  <div className="col-auto flex items-center">
                    <Image src={Icons.locationDarkIcon} alt="calendar" />
                    <div className="pl-2 text-darkblue poppins-medium">
                      {trip.location}
                    </div>
                  </div>

                  {/* TRIP STATUS */}
                  <div className="col-auto">
                    <div className="rounded-full bg-new text-white poppins-medium text-center px-2">
                      {trip.status}
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="col-auto flex">
                    <div className="pl-3">
                      <Image
                        className="pointer"
                        src={Icons.editIconDark}
                        alt="right-arrow"
                      />
                    </div>
                    <div className="pl-3">
                      <Image
                        className="pointer"
                        src={Icons.editIconDark}
                        alt="right-arrow"
                      />
                    </div>
                    <div className="pl-3">
                      <Image
                        className="pointer"
                        src={Icons.editIconDark}
                        alt="right-arrow"
                      />
                    </div>
                    <div className="pl-3">
                      <Image
                        className="pointer"
                        src={Icons.editIconDark}
                        alt="right-arrow"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* MY TRIPS END */}

            <div className="row pt-5">
              {/* NEW GLOBAL REQUESTS START */}
              <div className="col-6 pr-1">
                <div className="flex justify-between items-center">
                  <div className="f-20 text-darkblue poppins-semibold">
                    New Global Requests
                  </div>
                  <div className="flex items-center pointer">
                    <div className="f-14 poppins-semibold text-darkblue">
                      View All
                    </div>
                    <div className="pl-3">
                      <Image src={Icons.arrowDownDarkIcon} alt="right-arrow" />
                    </div>
                  </div>
                </div>
                <div className="py-1 px-2 rounded-lg bg-white ">
                  {globalRequests.map((item, index) => (
                    <div
                      className="flex items-center justify-between rounded-lg border-dashed py-2 w-full my-1"
                      key={index}
                    >
                      {/* REQUEST IMAGE */}
                      <div className="col-auto px-1">
                        <Image
                          className="rounded-lg w-[44px] h-[44px]"
                          src={item.image}
                          alt={item.taName}
                        />
                      </div>

                      {/* REQUEST ID AND NAME  */}
                      <div className="col-auto px-1">
                        <div className="text-grey poppins-medium f-12">
                          {item.requestId}
                        </div>
                        <div className="text-darkblue poppins-medium f-12">
                          {item.taName}
                        </div>
                      </div>

                      {/* REQUEST DATE  */}
                      <div className="col-auto flex items-center px-1">
                        <Image src={Icons.calendarDarkIcon} alt="calendar" />
                        <div className="pl-2 text-darkblue poppins-medium f-12">
                          {item.date}
                        </div>
                      </div>

                      {/* REQUEST PEOPLE */}
                      <div className="col-auto flex items-center px-1">
                        <Image src={Icons.userIconDark} alt="calendar" />
                        <div className="pl-2 text-darkblue poppins-medium f-12">
                          {item.people}
                        </div>
                      </div>

                      {/* REQUEST LOCATION */}
                      <div className="col-auto flex items-center px-1">
                        <Image src={Icons.locationDarkIcon} alt="calendar" />
                        <div className="pl-2 text-darkblue poppins-medium f-12">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* NEW GLOBAL REQUESTS END */}

              {/* NEW TAILORED REQUESTS START */}
              <div className="col-6 pl-1">
                <div className="flex justify-between items-center">
                  <div className="f-20 text-darkblue poppins-semibold">
                    New Tailored Requests
                  </div>
                  <div className="flex items-center pointer">
                    <div className="f-14 poppins-semibold text-darkblue">
                      View All
                    </div>
                    <div className="pl-3">
                      <Image src={Icons.arrowDownDarkIcon} alt="right-arrow" />
                    </div>
                  </div>
                </div>
                <div className="py-1 px-2 rounded-lg bg-white ">
                  {tailoredRequests.map((item, index) => (
                    <div
                      className="flex items-center justify-between rounded-lg border-dashed py-2 w-full my-1"
                      key={index}
                    >
                      {/* REQUEST IMAGE */}
                      <div className="col-auto px-1">
                        <Image
                          className="rounded-lg w-[44px] h-[44px]"
                          src={item.image}
                          alt={item.taName}
                        />
                      </div>

                      {/* REQUEST ID AND NAME  */}
                      <div className="col-auto px-1">
                        <div className="text-grey poppins-medium f-12">
                          {item.requestId}
                        </div>
                        <div className="text-darkblue poppins-medium f-12">
                          {item.taName}
                        </div>
                      </div>

                      {/* REQUEST DATE  */}
                      <div className="col-auto flex items-center px-1">
                        <Image src={Icons.calendarDarkIcon} alt="calendar" />
                        <div className="pl-2 text-darkblue poppins-medium f-12">
                          {item.date}
                        </div>
                      </div>

                      {/* REQUEST PEOPLE */}
                      <div className="col-auto flex items-center px-1">
                        <Image src={Icons.userIconDark} alt="calendar" />
                        <div className="pl-2 text-darkblue poppins-medium f-12">
                          {item.people}
                        </div>
                      </div>

                      {/* REQUEST LOCATION */}
                      <div className="col-auto flex items-center px-1">
                        <Image src={Icons.locationDarkIcon} alt="calendar" />
                        <div className="pl-2 text-darkblue poppins-medium f-12">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* NEW GLOBAL REQUESTS END */}
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </main>
  );
}
