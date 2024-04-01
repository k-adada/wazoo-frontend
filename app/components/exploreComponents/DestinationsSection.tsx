import React from "react";
import Image from "next/image";

import Images from "@/app/Images";

export default function DestinationsSection() {
  const destinations = [
    {
      id: 1,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: Images.lebanon,
    },
    {
      id: 2,
      name: "France",
      continent: "Europe",
      country: "France",
      image: Images.franceImage,
    },
    {
      id: 3,
      name: "Australia",
      continent: "Oceania",
      country: "Australia",
      image: Images.australiaImage,
    },
    {
      id: 4,
      name: "Brazil",
      continent: "South America",
      country: "Brazil",
      image: Images.brazil,
    },
    {
      id: 5,
      name: "Egypt",
      continent: "Africa",
      country: "Egypt",
      image: Images.egypt,
    },
    {
      id: 6,
      name: "Japan",
      continent: "Asia",
      country: "Japan",
      image: Images.japanImage,
    },
    {
      id: 7,
      name: "Italy",
      continent: "Europe",
      country: "Italy",
      image: Images.italyImage,
    },
    {
      id: 8,
      name: "New Zealand",
      continent: "Oceania",
      country: "New Zealand",
      image: Images.newzealandImage,
    },

    {
      id: 11,
      name: "Thailand",
      continent: "Asia",
      country: "Thailand",
      image: Images.thailandImage,
    },
    {
      id: 12,
      name: "Spain",
      continent: "Europe",
      country: "Spain",
      image: Images.spain,
    },
    {
      id: 13,
      name: "UAE",
      continent: "Asia",
      country: "UAE",
      image: Images.uaeImage,
    },
    {
      id: 14,
      name: "Turkey",
      continent: "Asia",
      country: "Turkey",
      image: Images.turkeyImage,
    },
    {
      id: 15,
      name: "Switzerland",
      continent: "Europe",
      country: "Switzerland",
      image: Images.switzerlandImage,
    },
  ];

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6 w-full mt-2"
      style={{ maxWidth: "95%" }}
    >
      {destinations.map((item, index) => {
        return (
          <div
            key={index}
            className="m-auto cursor-pointer relative transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="destination-name-overlay flex items-center justify-center">
              <div className="text-ice text-center poppins-medium">
                {item.name}
              </div>
            </div>

            <Image
              className="rounded-[15px] object-cover"
              src={item.image}
              alt="destination"
              style={{ width: "200px", height: "240px" }}
            />
          </div>
        );
      })}
    </div>
  );
}
