"use client";
import React, { useState } from "react";
import "./dist/themes.css";
import Image from "next/image";

import destination from "../assets/theme.png";
interface Theme {
  id: number;
  name: string;
  continent: string;
  country: string;
  image: any;
}
export default function Themes() {
  const [themes, setThemes] = useState([
    {
      id: 1,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 2,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 3,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 4,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 5,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 1,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 2,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 3,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 4,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 5,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 1,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 2,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 3,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 4,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 5,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
    {
      id: 6,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: destination,
    },
  ]);

  const [selectedThemes, setSelectedThemes] = useState<Theme[]>([]);

  return (
    <main className="flex min-h-screen flex-col items-center  p-md-24 p-3 bg-bluesky pb-[100px]">
      <div className="f-48 text-gold pt-8 pb-3">Luxury Travel</div>
      <div className="f-24 text-ice pb-5">
        Select the travel themes you serve
      </div>

      {/* themes bar  */}
      <div className="bg-white py-2 px-4 rounded w-2/3">
        <div className="flex justify-between items-center">
          {/* title */}
          <div className="f-24 text-darkblue poppins-semibold">Themes</div>

          {/* search */}
          <div className="">
            <input
              className="bg-lightblue text-darkblue p-3 rounded w-full"
              placeholder="Search themes"
              type="text"
            />
          </div>
        </div>
      </div>

      {/* themes list */}
      <div className="grid grid-cols-12 gap-3 w-2/3 mt-6">
        {themes.map((item, index) => {
          return (
            <div
              key={index}
              className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 m-auto cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                className="rounded-[15px]"
                src={item.image}
                alt="destination"
              />
              <div className="f-32 text-ice poppins-medium line-clamp-1 pt-2">
                {item.name}
              </div>
              <div className="text-grey line-clamp-2">{item.subtitle}</div>
            </div>
          );
        })}
      </div>

      {/* next button */}
      <div className="w-full bottom-fixed text-center">
        <button className="bg-gold-gradient text-dark-input p-3 w-1/4 rounded">
          Next
        </button>
      </div>
    </main>
  );
}
