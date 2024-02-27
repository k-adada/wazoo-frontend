"use client";
import React, { useEffect, useState } from "react";
import "./dist/destinations.css";
import Image from "next/image";

import destination from "../assets/destination.png";
import check from "../assets/check.png";
import CountryMultiSelect from "../components/CountryMultiSelect";

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
      image: destination,
    },
    {
      id: 2,
      name: "France",
      continent: "Europe",
      country: "France",
      image: destination,
    },
    {
      id: 3,
      name: "Australia",
      continent: "Oceania",
      country: "Australia",
      image: destination,
    },
    {
      id: 4,
      name: "Brazil",
      continent: "South America",
      country: "Brazil",
      image: destination,
    },
    {
      id: 5,
      name: "Egypt",
      continent: "Africa",
      country: "Egypt",
      image: destination,
    },
    {
      id: 6,
      name: "Japan",
      continent: "Asia",
      country: "Japan",
      image: destination,
    },
    {
      id: 7,
      name: "Italy",
      continent: "Europe",
      country: "Italy",
      image: destination,
    },
    {
      id: 8,
      name: "New Zealand",
      continent: "Oceania",
      country: "New Zealand",
      image: destination,
    },
    {
      id: 9,
      name: "Argentina",
      continent: "South America",
      country: "Argentina",
      image: destination,
    },
    {
      id: 10,
      name: "South Africa",
      continent: "Africa",
      country: "South Africa",
      image: destination,
    },
    {
      id: 11,
      name: "Thailand",
      continent: "Asia",
      country: "Thailand",
      image: destination,
    },
    {
      id: 12,
      name: "Spain",
      continent: "Europe",
      country: "Spain",
      image: destination,
    },
    {
      id: 13,
      name: "Fiji",
      continent: "Oceania",
      country: "Fiji",
      image: destination,
    },
    {
      id: 14,
      name: "Chile",
      continent: "South America",
      country: "Chile",
      image: destination,
    },
    {
      id: 15,
      name: "Morocco",
      continent: "Africa",
      country: "Morocco",
      image: destination,
    },
    {
      id: 16,
      name: "India",
      continent: "Asia",
      country: "India",
      image: destination,
    },
    {
      id: 17,
      name: "Germany",
      continent: "Europe",
      country: "Germany",
      image: destination,
    },
    {
      id: 18,
      name: "Samoa",
      continent: "Oceania",
      country: "Samoa",
      image: destination,
    },
    {
      id: 19,
      name: "Peru",
      continent: "South America",
      country: "Peru",
      image: destination,
    },
    {
      id: 20,
      name: "Kenya",
      continent: "Africa",
      country: "Kenya",
      image: destination,
    },
    {
      id: 21,
      name: "Maldives",
      continent: "Asia",
      country: "Maldives",
      image: destination,
    },
    {
      id: 22,
      name: "Greece",
      continent: "Europe",
      country: "Greece",
      image: destination,
    },
    {
      id: 23,
      name: "Vanuatu",
      continent: "Oceania",
      country: "Vanuatu",
      image: destination,
    },
    {
      id: 24,
      name: "Colombia",
      continent: "South America",
      country: "Colombia",
      image: destination,
    },
    {
      id: 25,
      name: "Tanzania",
      continent: "Africa",
      country: "Tanzania",
      image: destination,
    },
    {
      id: 26,
      name: "Vietnam",
      continent: "Asia",
      country: "Vietnam",
      image: destination,
    },
    {
      id: 27,
      name: "Netherlands",
      continent: "Europe",
      country: "Netherlands",
      image: destination,
    },
    {
      id: 28,
      name: "Tonga",
      continent: "Oceania",
      country: "Tonga",
      image: destination,
    },
    {
      id: 29,
      name: "Ecuador",
      continent: "South America",
      country: "Ecuador",
      image: destination,
    },
    {
      id: 30,
      name: "Botswana",
      continent: "Africa",
      country: "Botswana",
      image: destination,
    },
  ]);

  const [selectedDestinations, setSelectedDestinations] = useState<
    Destination[]
  >([]);

  const [filteredDestinations, setFilteredDestinations] = useState<
    Destination[]
  >([]);

  const [filteredCountries, setFilteredCountries] = React.useState<
    Destination[]
  >([]);

  const filterCountries = (allDestinations: Destination[]): Destination[] => {
    let result;
    if (filteredCountries.length === 0) {
      result = allDestinations;
    } else {
      result = allDestinations.filter((destination) =>
        filteredCountries.some(
          (filteredCountry) => filteredCountry.country === destination.country
        )
      );
    }
    return result;
  };

  useEffect(() => {
    console.log("filteredCountries", filteredCountries);
    setFilteredDestinations(filterCountries(destinations));
  }, [filteredCountries]);

  useEffect;

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
              <CountryMultiSelect
                options={destinations}
                setFilteredCountries={setFilteredCountries}
              />
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
      <div className="grid grid-cols-12 gap-3 w-2/3 mt-4">
        {filteredDestinations.map((item, index) => {
          return (
            <div
              key={index}
              className="2xl:col-span-2 xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 m-auto cursor-pointer relative"
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
