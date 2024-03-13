"use client";
import React, { useEffect, useState } from "react";
import "./dist/destinations.css";
import Image from "next/image";

import destination from "../assets/destination.png";
import check from "../assets/check.png";
import CountryMultiSelect from "../components/CountryMultiSelect";
import ContinentMultiSelect from "../components/ContinentMultiSelect";
import Link from "next/link";

import australiaImage from "../assets/images/destinations/Australia.webp";
import brazilImage from "../assets/images/destinations/Brazil.webp";
import egyptImage from "../assets/images/destinations/egypt.jpg";
import franceImage from "../assets/images/destinations/France.png";
import lebanonImage from "../assets/images/destinations/Baalbek.webp";
import japanImage from "../assets/images/destinations/Japan.webp";
import italyImage from "../assets/images/destinations/Italy.png";
import newzealandImage from "../assets/images/destinations/NewZeland.png";
import spainImage from "../assets/images/destinations/spain.webp";
import thailandImage from "../assets/images/destinations/Thailand.webp";
import uaeImage from "../assets/images/destinations/UAE.png";
import turkeyImage from "../assets/images/destinations/Turkey.png";
import switzerlandImage from "../assets/images/destinations/Switzerland.webp";

interface Destination {
  id: number;
  name: string;
  continent: string;
  country: string;
  image: any;
}

export default function Destinations() {
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: "Lebanon",
      continent: "Asia",
      country: "Lebanon",
      image: lebanonImage,
    },
    {
      id: 2,
      name: "France",
      continent: "Europe",
      country: "France",
      image: franceImage,
    },
    {
      id: 3,
      name: "Australia",
      continent: "Oceania",
      country: "Australia",
      image: australiaImage,
    },
    {
      id: 4,
      name: "Brazil",
      continent: "South America",
      country: "Brazil",
      image: brazilImage,
    },
    {
      id: 5,
      name: "Egypt",
      continent: "Africa",
      country: "Egypt",
      image: egyptImage,
    },
    {
      id: 6,
      name: "Japan",
      continent: "Asia",
      country: "Japan",
      image: japanImage,
    },
    {
      id: 7,
      name: "Italy",
      continent: "Europe",
      country: "Italy",
      image: italyImage,
    },
    {
      id: 8,
      name: "New Zealand",
      continent: "Oceania",
      country: "New Zealand",
      image: newzealandImage,
    },

    {
      id: 11,
      name: "Thailand",
      continent: "Asia",
      country: "Thailand",
      image: thailandImage,
    },
    {
      id: 12,
      name: "Spain",
      continent: "Europe",
      country: "Spain",
      image: spainImage,
    },
    {
      id: 13,
      name: "UAE",
      continent: "Asia",
      country: "UAE",
      image: uaeImage,
    },
    {
      id: 14,
      name: "Turkey",
      continent: "Asia",
      country: "Turkey",
      image: turkeyImage,
    },
    {
      id: 15,
      name: "Switzerland",
      continent: "Europe",
      country: "Switzerland",
      image: switzerlandImage,
    },
  ]);

  const [selectedDestinations, setSelectedDestinations] = useState<
    Destination[]
  >([]);

  const [filteredDestinations, setFilteredDestinations] = useState<
    Destination[]
  >([]);

  const [filteredCountries, setFilteredCountries] = useState<Destination[]>([]);

  const [filteredContinents, setFilteredContinents] = useState<Destination[]>(
    []
  );

  useEffect(() => {
    const filterDestinations = (destinations: Destination[]) => {
      let filteredDestinations = destinations;
      if (filteredCountries.length > 0) {
        filteredDestinations = filteredDestinations.filter((destination) =>
          filteredCountries.some(
            (filteredCountry) => filteredCountry.id === destination.id
          )
        );
      }
      if (filteredContinents.length > 0) {
        filteredDestinations = filteredDestinations.filter((destination) =>
          filteredContinents.some(
            (filteredContinent) => filteredContinent.id === destination.id
          )
        );
      }
      return filteredDestinations;
    };

    console.log("filteredCountries", filteredCountries);

    setFilteredDestinations(filterDestinations(destinations));
  }, [filteredCountries, filteredContinents, destinations]);

  return (
    <main className="flex min-h-screen flex-col items-center  p-md-24 p-3 bg-bluesky pb-[100px]">
      <div className="f-48 text-gold pt-8 pb-3">Luxury Travel</div>
      <div className="f-24 text-ice pb-5">
        Select the travel Destinations you serve
      </div>

      {/* destinations bar  */}
      <div
        className="bg-white py-2 px-4 rounded-lg w-full"
        style={{ maxWidth: "80%" }}
      >
        <div className="flex justify-between items-center">
          {/* title */}
          <div className="f-24 text-darkblue poppins-semibold">
            Destinations
          </div>

          {/* country continent */}
          <div className="grid grid-cols-6 w-full">
            <div className="rounded-lg mx-2 col-span-2 bg-blue">
              <ContinentMultiSelect
                options={destinations}
                setFilteredContinents={setFilteredContinents}
              />
            </div>
            <div className="rounded-lg mx-2 col-span-4 bg-blue">
              <CountryMultiSelect
                options={destinations}
                setFilteredCountries={setFilteredCountries}
              />
            </div>
          </div>

          {/* search */}
          {/* <div className="">
            <input
              className="bg-lightblue text-darkblue p-3 rounded-lg w-full"
              placeholder="Search destinations"
              type="text"
            />
          </div> */}
        </div>
      </div>

      {/* destinations list */}
      <div
        className="grid grid-cols-12 gap-6 w-full mt-6"
        style={{ maxWidth: "80%" }}
      >
        {filteredDestinations.map((item, index) => {
          return (
            <div
              key={index}
              className="2xl:col-span-2 xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 m-auto cursor-pointer relative transform transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => {
                setSelectedDestinations((prevSelectedDestinations) => {
                  if (
                    prevSelectedDestinations.some(
                      (destination) => destination.id === item.id
                    )
                  ) {
                    return prevSelectedDestinations.filter(
                      (destination) => destination.id !== item.id
                    );
                  } else {
                    return [...prevSelectedDestinations, item];
                  }
                });
              }}
            >
              <div className="destination-name-overlay flex items-center justify-center">
                <div className="text-ice text-center poppins-medium">
                  {item.name}
                </div>
              </div>

              {selectedDestinations.some(
                (destination) => destination.id === item.id
              ) && (
                <>
                  <div className="destination-selected-overlay flex items-center justify-center">
                    <div className="text-ice text-center poppins-medium">
                      <Image src={check} alt="check" />
                    </div>
                  </div>
                </>
              )}

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

      {/* next button */}
      <div className="w-full bottom-fixed text-center">
        <Link href="/themes">
          <button className="bg-gold-gradient text-dark-input p-3 w-1/4 rounded-lg poppins-medium">
            Next
          </button>
        </Link>
      </div>
    </main>
  );
}
