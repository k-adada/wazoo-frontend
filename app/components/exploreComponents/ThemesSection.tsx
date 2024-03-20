"use client";
import React, { useState } from "react";
import Image from "next/image";

import destination from "../../assets/theme.png";

import Link from "next/link";

import theme1 from "../../assets/images/themes/Adventure.webp";
import theme2 from "../../assets/images/themes/Beach_Sun.webp";
import theme3 from "../../assets/images/themes/david.jpg";
import theme4 from "../../assets/images/themes/Food_Wine.webp";
import theme5 from "../../assets/images/themes/Honeymoon.webp";
import theme6 from "../../assets/images/themes/Safari.webp";
import theme7 from "../../assets/images/themes/yacht_charter.webp";

export default function ThemesSection() {
  const [themes, setThemes] = useState([
    {
      id: 1,
      name: "Adventure",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme1,
    },
    {
      id: 2,
      name: "Beach & Sun",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme2,
    },
    {
      id: 3,
      name: "Culture & History",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme3,
    },
    {
      id: 4,
      name: "Food & Wine",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme4,
    },
    {
      id: 5,
      name: "Honeymoon",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme5,
    },
    {
      id: 6,
      name: "Safari",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme6,
    },
    {
      id: 7,
      name: "Yacht Charter",
      subtitle:
        "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      country: "Lebanon",
      image: theme7,
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
  ]);

  return (
    <div
      className="grid grid-cols-12 gap-6 w-full mt-6"
      style={{ maxWidth: "80%" }}
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
                width: "300px",
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
