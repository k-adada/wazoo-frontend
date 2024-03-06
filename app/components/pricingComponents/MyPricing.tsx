"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function MyPricing() {
  const [myPricings, setMyPricings] = useState([
    {
      id: "1",
      serviceType: "Pricing 1",
      description: "Pricing 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
    },
    {
      id: "2",
      serviceType: "Pricing 2",
      description: "Pricing 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
    },
    {
      id: "3",
      serviceType: "Pricing 3",
      description: "Pricing 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
    },
    {
      id: "4",
      serviceType: "Pricing 4",
      description: "Pricing 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
    },
    {
      id: "5",
      serviceType: "Pricing 5",
      description: "Pricing 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
    },
    {
      id: "6",
      serviceType: "Pricing 6",
      description: "Pricing 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
    },
  ]);

  return (
    <div className="container-fluid myPricings">
      <div className="row">
        <div className="col-12 pt-5">myPricings here</div>
      </div>
    </div>
  );
}
