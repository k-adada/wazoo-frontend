"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import saveIcon from "../../assets/Icon_Save.png";
import addIcon from "../../assets/Icon_Add.png";
import searchIcon from "../../assets/Icon_Search_Black.png";
import filterIcon from "../../assets/Icon_Itinerary.png";
import downArrowIcon from "../../assets/down_arrow_dark.png";
import addCircleIcon from "../../assets/Icon_Add_circle.png";
import eyeIcon from "../../assets/Icon_Preview_gold.png";
import tourImage from "../../assets/tour_effel.jpg";
import DragTableServices from "../DragTableServices";

import dynamic from "next/dynamic";
import Link from "next/link";
import { filterColumns } from "@mui/x-data-grid-pro/components/DataGridProVirtualScroller";
import { GridFilterAltIcon } from "@mui/x-data-grid-pro";
import DragTableRequestServices from "./DragTableRequestServices";
// Dynamically import the RichTextBox component with SSR disabled
const DynamicRichTextBox = dynamic(() => import("../RichTextBox"), {
  ssr: false, // Disable server-side rendering for this component
});

type Props = {
  initialData?: string; // Define any props you want to pass to RichTextBox
};

export default function ItinerariesAndServices(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;

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
  const [itineraries, setItineraries] = useState([
    {
      id: "1",
      serviceType: "Itinerary 1",
      description: "Itinerary 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
    },
    {
      id: "2",
      serviceType: "Itinerary 2",
      description: "Itinerary 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
    },
    {
      id: "3",
      serviceType: "Itinerary 3",
      description: "Itinerary 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
    },
    {
      id: "4",
      serviceType: "Itinerary 4",
      description: "Itinerary 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
    },
    {
      id: "5",
      serviceType: "Itinerary 5",
      description: "Itinerary 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
    },
    {
      id: "6",
      serviceType: "Itinerary 6",
      description: "Itinerary 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
    },
  ]);

  const [catalogue, setCatalogue] = useState([
    {
      id: 1,
      slug: "itinerary",
      notesCollapsed: false,
      collapsed: false,
      services: [] as any[],
    },
    {
      id: 2,
      slug: "service",
      notesCollapsed: false,
      collapsed: false,
      services: [] as any[],
    },
  ]);

  const [display, setDisplay] = useState("itinerary");

  const [openServicePopup, setOpenServicePopup] = useState(-1);

  return (
    <div className="container-fluid activities">
      <div className="row">
        <div className="col-9">
          {catalogue.map((item, index) => {
            return (
              <div className="row py-4 overflow-hidden" key={index}>
                {/* Item BAR  */}
                <div className="col-12">
                  <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
                    <div className="f-24 text-darkblue poppins-semibold">
                      Itineraries
                    </div>
                    <div
                      className="flex items-center"
                      onClick={() => {
                        // let newCatalogue = [...catalogue];
                        // newCatalogue[index].collapsed =
                        //   !newCatalogue[index].collapsed;
                        // setCatalogue(newCatalogue);
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
                <div className={" col-12"}>
                  {/* DRAG TABLE SERVICES */}
                  <div className="px-5 pt-5">
                    <DragTableRequestServices
                      services={activities}
                      days={catalogue}
                      setDays={setCatalogue}
                      dayIndex={index}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* NEXT */}
        <div className="col-auto pt-[64px]">
          <Link href="/catalogues">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={addIcon} alt="eyeIcon" />
                <div className="pl-4">Create Catalogue</div>
              </div>
            </div>
          </Link>
        </div>

        {/* save as draft */}
        <div className="col-auto pt-[64px]">
          <div
            className="dark-button text-gold poppins-medium cursor-pointer"
            onClick={() => {
              setCurrentStep("preview");
              setStepsDone([...stepsDone, "preview"]);
            }}
          >
            <div className="flex items-center h-full">
              <Image src={eyeIcon} alt="eyeIcon" />
              <div className="pl-4">Preview Catalogue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
