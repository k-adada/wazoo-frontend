"use client";
import React, { useState } from "react";
import "./dist/destinations.css";
import Image from "next/image";

import destination from "../assets/destination.png";

export default function Destinations() {
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 2,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 3,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 4,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 5,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 1,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 2,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 3,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 4,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 5,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 1,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 2,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 3,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 4,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 5,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: destination,
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center  p-md-24 p-3 bg-bluesky">
      <div className="f-48 text-gold">Luxury Travel</div>
      <div className="f-24 text-ice">
        Select the travel Destinations you serve
      </div>

      {/* destinations bar  */}
      <div className="bg-white py-2 px-4 rounded w-2/3">
        <div className="flex justify-between items-center">
          {/* title */}
          <div className="f-24 text-darkblue poppins-semibold">
            Destinations
          </div>

          {/* country continent */}
          <div className="flex">
            <div className="rounded mx-2 ">
              <select className="bg-blue rounded p-3" name="" id="">
                <option value="1">Continent</option>
                <option value="2">Asia</option>
                <option value="3">Europe</option>
              </select>
            </div>
            <div className="rounded mx-2">
              <select className="bg-blue rounded p-3" name="" id="">
                <option value="1">Country</option>
                <option value="2">Lebanon</option>
                <option value="3">France</option>
              </select>
            </div>
          </div>

          {/* search */}
          <div className="">
            <input
              className="bg-lightblue text-darkblue p-3 rounded w-full"
              placeholder="Search destinations"
              type="text"
            />
          </div>
        </div>
      </div>

      {/* destinations list */}
      <div className="grid grid-cols-6 gap-3 w-2/3 mt-4">
        {destinations.map((item, index) => {
          return (
            <div
              key={index}
              className="xl:col-span-1 md:col-span-2 sm:col-span-3 col-span-6 m-auto cursor-pointer"
            >
              <Image
                className="rounded-[15px]"
                src={item.image}
                alt="destination"
              />
            </div>
          );
        })}
      </div>

      {/* next button */}
      <div className="w-2/3 bottom-fixed text-center">
        <button className="bg-gold-gradient text-dark-input p-3 w-1/4 rounded">
          Next
        </button>
      </div>
    </main>
  );
}
