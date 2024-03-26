"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Icons from "@/app/Icons";
import Images from "@/app/Images";

import DragTableRequestItineraries from "./DragTableRequestItineraries";

export default function RequestItineraries() {
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

  const [selectedItineraries, setSelectedItineraries] = useState([
    {
      id: "1",
      image: Images.aurora,
      name: "Itinerary 1",
      theme: "theme",
      destination: "destination",
      season: "summer",
      validity: "oct 1 - oct 4",
      price: "350",
    },
    {
      id: "2",
      image: Images.machupichu,
      name: "Itinerary 2",
      theme: "theme 2",
      destination: "destination 2",
      season: "winter",
      validity: "oct 6 - oct 10",
      price: "350",
    },
  ] as any[]);

  return (
    <div className="">
      {/* Item BAR  */}
      <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
        <div className="f-24 text-darkblue poppins-semibold">Itineraries</div>
        <div className="dark-button flex items-center text-gold pointer">
          <Image src={Icons.addIconGold} alt="add" width={20} height={20} />
          <div className="pl-2">Add Itinerary</div>
        </div>
      </div>

      {/* DRAG TABLE SERVICES */}
      <div className="px-5 pt-5">
        <DragTableRequestItineraries
          itineraries={selectedItineraries}
          days={selectedItineraries}
          setDays={selectedItineraries}
          dayIndex={1}
        />
      </div>
    </div>
  );
}
