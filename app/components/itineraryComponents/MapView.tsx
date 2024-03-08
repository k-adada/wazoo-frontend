"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import locationIcon from "../../assets/Icon_Location.png";
import mercedesImage from "../../assets/mercedes.webp";
import listViewIcon from "../../assets/Icon_List_View.png";
import addCircleIcon from "../../assets/Icon_Add_circle.png";
import tourImage from "../../assets/tour_effel.jpg";
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

export default function MapView(props: {
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

  return (
    <div className="container-fluid map-view">
      {/* map view */}
      <div className="flex justify-end">
        <div
          className="dark-button text-gold poppins-medium cursor-pointer"
          onClick={() => {
            setCurrentStep("activities");
          }}
        >
          <div className="flex items-center h-full">
            <Image src={listViewIcon} alt="list view" />
            <div className="pl-4">Table View</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg py-4 px-3">
        <div className="row">
          <div className="col-7">
            {/* 1 day itinerary */}
            <div className="row">
              <div className="col-4 border-right">
                <div className="">
                  <div className="f-20 text-darkblue poppins-bold pb-3">
                    Day 1
                  </div>
                  <div className="f-12 text-darkblue poppins-medium">
                    Upon arrival to Paris you will be met by your driver,
                    transfer to the hotel for check in
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="f-28 poppins-bold text-darkblue">
                  May 1, 2024
                </div>
                <div className="poppins-semibold text-darkblue f-20">
                  Arrive in Paris, France
                </div>

                {/* SERVICE CARD  */}
                <div className="bg-grey flex rounded-lg px-4 py-4">
                  <div className="">
                    <Image
                      src={mercedesImage}
                      alt="car"
                      style={{ height: "110px" }}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <div className="pl-4">
                    <div className="f-20 text-darkblue poppins-semibold">
                      Transfer from CDG to Hilton
                    </div>
                    <div className="f-12 text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun...
                    </div>

                    <div className="flex">
                      <div className="f-10 bg-darkgrey rounded-full py-1 px-2">
                        #Outdoor Activity
                      </div>
                    </div>
                    <div className="flex items-center pt-1">
                      <div className="pr-1">
                        <Image
                          src={locationIcon}
                          alt="location"
                          style={{ height: "14px", width: "14px" }}
                        />
                      </div>
                      <div className="f-10 text-grey pt-1">Paris, France</div>
                    </div>
                  </div>
                </div>

                {/* SERVICE CARD  */}
                <div className="bg-grey flex rounded-lg px-4 py-4 mt-3">
                  <div className="">
                    <Image
                      src={mercedesImage}
                      alt="car"
                      style={{ height: "110px" }}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <div className="pl-4">
                    <div className="f-20 text-darkblue poppins-semibold">
                      Transfer from CDG to Hilton
                    </div>
                    <div className="f-12 text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun...
                    </div>

                    <div className="flex">
                      <div className="f-10 bg-darkgrey rounded-full py-1 px-2">
                        #Outdoor Activity
                      </div>
                    </div>
                    <div className="flex items-center pt-1">
                      <div className="pr-1">
                        <Image
                          src={locationIcon}
                          alt="location"
                          style={{ height: "14px", width: "14px" }}
                        />
                      </div>
                      <div className="f-10 text-grey pt-1">Paris, France</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-6">
              <div className="col-4 border-right">
                <div className="">
                  <div className="f-20 text-darkblue poppins-bold pb-3">
                    Day 2
                  </div>
                  <div className="f-12 text-darkblue poppins-medium">
                    Upon arrival to Paris you will be met by your driver,
                    transfer to the hotel for check in
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="f-28 poppins-bold text-darkblue">
                  May 2, 2024
                </div>
                <div className="poppins-semibold text-darkblue f-20">
                  Arrive in Lyon, France
                </div>

                {/* SERVICE CARD  */}
                <div className="bg-grey flex rounded-lg px-4 py-4">
                  <div className="">
                    <Image
                      src={mercedesImage}
                      alt="car"
                      style={{ height: "110px" }}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <div className="pl-4">
                    <div className="f-20 text-darkblue poppins-semibold">
                      Transfer from CDG to Hilton
                    </div>
                    <div className="f-12 text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun...
                    </div>

                    <div className="flex">
                      <div className="f-10 bg-darkgrey rounded-full py-1 px-2">
                        #Outdoor Activity
                      </div>
                    </div>
                    <div className="flex items-center pt-1">
                      <div className="pr-1">
                        <Image
                          src={locationIcon}
                          alt="location"
                          style={{ height: "14px", width: "14px" }}
                        />
                      </div>
                      <div className="f-10 text-grey pt-1">Paris, France</div>
                    </div>
                  </div>
                </div>

                {/* SERVICE CARD  */}
                <div className="bg-grey flex rounded-lg px-4 py-4 mt-3">
                  <div className="">
                    <Image
                      src={mercedesImage}
                      alt="car"
                      style={{ height: "110px" }}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <div className="pl-4">
                    <div className="f-20 text-darkblue poppins-semibold">
                      Transfer from CDG to Hilton
                    </div>
                    <div className="f-12 text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun...
                    </div>

                    <div className="flex">
                      <div className="f-10 bg-darkgrey rounded-full py-1 px-2">
                        #Outdoor Activity
                      </div>
                    </div>
                    <div className="flex items-center pt-1">
                      <div className="pr-1">
                        <Image
                          src={locationIcon}
                          alt="location"
                          style={{ height: "14px", width: "14px" }}
                        />
                      </div>
                      <div className="f-10 text-grey pt-1">Paris, France</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5">
            <iframe
              className="w-full rounded-lg"
              height="550"
              style={{ border: "0" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2d4tECWsMVm3Us4dSM4q84TV6O9XG588
    &q=Paris+France"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
