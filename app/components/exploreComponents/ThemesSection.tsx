"use client";
import React, { useState } from "react";
import Image from "next/image";

import Images from "@/app/Images";

export default function ThemesSection() {
  const [themes, setThemes] = useState([
    {
      id: 1,
      name: "Adventure",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.theme1,
    },
    {
      id: 2,
      name: "Beach & Sun",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.theme2,
    },
    {
      id: 3,
      name: "Culture & History",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.theme3,
    },
    {
      id: 4,
      name: "Food & Wine",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.theme4,
    },
    {
      id: 5,
      name: "Honeymoon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.theme5,
    },
    {
      id: 6,
      name: "Safari",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.theme6,
    },
    {
      id: 7,
      name: "Yacht Charter",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.theme7,
    },
    {
      id: 2,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.lebanon,
    },
    {
      id: 3,
      name: "Lebanon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.safari,
    },
    {
      id: 4,
      name: "Marakesh",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.marakesh,
    },
    {
      id: 5,
      name: "Aurora",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: Images.aurora,
    },
    {
      id: 6,
      name: "Brazil",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Brazil",
      image: Images.brazil,
    },
  ]);

  return (
    <div
      className="grid grid-cols-12 gap-6 w-full mt-2"
      style={{ maxWidth: "95%" }}
    >
      {themes.map((item, index) => {
        return (
          <div
            key={index}
            className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 m-auto cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              className="rounded-[15px] object-cover"
              src={item.image}
              alt="destination"
              style={{
                width: "100%",
                height: "240px",
                filter: "brightness(0.8)",
              }}
            />
            <div className="f-22 text-darkblue poppins-medium line-clamp-1 pt-2">
              {item.name}
            </div>
            <div className="text-grey f-16 line-clamp-2">{item.subtitle}</div>
          </div>
        );
      })}
    </div>
  );
}
