"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ServicesSwiper from "../../components/servicesSwiper";
import sunIcon from "../../assets/Sundark.svg";
import bookmarkIcon from "../../assets/Icon_Bookmarked_gold.svg";
import unbookmarkIcon from "../../assets/Icon_Unbookmark.svg";
import locationIcon from "../../assets/Icon_Location.png";
import clockIcon from "../../assets/Icon_Time.png";
import calendarIcon from "../../assets/Icon_Calendar_dark.png";
import treeIcon from "../../assets/tree_dark.svg";
import louvreImage from "../../assets/images/services/Louvre.jpg";
import lucerneImage from "../../assets/images/services/lucerne.jpg";
import montsaintImage from "../../assets/images/services/montsaintmich.jpg";
import triomphImage from "../../assets/images/services/Triomphe.jpg";
import notreImage from "../../assets/images/services/NotreDameCathedral.jpg";
import quartierImage from "../../assets/images/services/Quartier_Latin.jpg";
import Link from "next/link";
import Images from "@/app/Images";

export default function TripsSection(props: any) {
  const { popup, setOpenPreview } = props;
  const router = useRouter();

  const images = [
    louvreImage,
    lucerneImage,
    montsaintImage,
    triomphImage,
    notreImage,
    quartierImage,
  ];

  const trips = [
    {
      name: "Enchanting Parisian Escape",
      description:
        "Experience the magic of Paris with charming streets, iconic landmarks, and exquisite cuisine.",
      location: "Paris, France",
      duration: "5 days",
      date: "Apr 1 - Oct 31",
      theme: "Romantic",
      season: "Spring/Summer",
      image: Images.louvreImage,
    },
    {
      name: "Adventure in the Swiss Alps",
      description:
        "Embark on an adrenaline-packed journey through the breathtaking landscapes of the Swiss Alps.",
      location: "Switzerland",
      duration: "7 days",
      date: "Jun 15 - Sep 15",
      theme: "Adventure",
      season: "Summer",
      image: Images.lucerneImage,
    },
    {
      name: "Romantic Riviera Retreat",
      description:
        "Unwind and romance in the picturesque settings of the Riviera with azure waters and golden beaches.",
      location: "French Riviera",
      duration: "10 days",
      date: "May 1 - Sep 30",
      theme: "Romantic",
      season: "Spring/Summer",
      image: "url",
    },
    {
      name: "Cultural Odyssey in Rome",
      description:
        "Delve into the rich history and culture of Rome, exploring ancient ruins, art masterpieces, and vibrant neighborhoods.",
      location: "Rome, Italy",
      duration: "6 days",
      date: "Mar 15 - Nov 15",
      theme: "Cultural",
      season: "Spring/Fall",
      image: "url",
    },
    {
      name: "Island Paradise Getaway",
      description:
        "Escape to a tropical paradise with pristine beaches, turquoise waters, and lush landscapes.",
      location: "Maldives",
      duration: "8 days",
      date: "Dec 1 - May 31",
      theme: "Beach",
      season: "Winter/Spring",
      image: "url",
    },
    {
      name: "Historic Journey through Athens",
      description:
        "Discover the ancient wonders of Athens, from the Acropolis to historic ruins, and immerse in Greek mythology.",
      location: "Athens, Greece",
      duration: "7 days",
      date: "Apr 15 - Oct 31",
      theme: "Historic",
      season: "Spring/Summer",
      image: "url",
    },
    {
      name: "Safari Expedition in Serengeti",
      description:
        "Embark on an unforgettable safari adventure in the vast savannahs of Serengeti, witnessing diverse wildlife and natural beauty.",
      location: "Tanzania",
      duration: "9 days",
      date: "Jun 1 - Oct 15",
      theme: "Wildlife",
      season: "Summer",
      image: "url",
    },
    {
      name: "Exploring the Wonders of Istanbul",
      description:
        "Immerse in the vibrant culture and history of Istanbul, from ancient landmarks to bustling bazaars.",
      location: "Istanbul, Turkey",
      duration: "6 days",
      date: "Mar 1 - Nov 30",
      theme: "Cultural",
      season: "Spring/Fall",
      image: "url",
    },
    {
      name: "Tropical Bliss in Bali",
      description:
        "Relax and rejuvenate in the serene beauty of Bali, with lush landscapes, serene beaches, and spiritual retreats.",
      location: "Bali, Indonesia",
      duration: "10 days",
      date: "Apr 15 - Oct 31",
      theme: "Beach",
      season: "Spring/Summer",
      image: "url",
    },
    {
      name: "Northern Lights Discovery in Iceland",
      description:
        "Witness the mesmerizing spectacle of the Northern Lights in Iceland, amidst rugged landscapes and geothermal wonders.",
      location: "Iceland",
      duration: "7 days",
      date: "Sep 1 - Mar 31",
      theme: "Nature",
      season: "Winter",
      image: "url",
    },
  ];

  return (
    <div className="row mt-2" style={{ maxWidth: "95%", margin: "auto" }}>
      {trips.map((item, index) => {
        return (
          <div className="col-3 px-5 py-2" key={index}>
            {/* <Link href="/trip"> */}
            <div
              className="row bg-white rounded-lg py-2 pointer"
              onClick={() => {
                if (!popup) {
                  router.push("/trip");
                } else {
                  setOpenPreview(true);
                }
              }}
            >
              <div className="col-12 pb-4 px-2">
                <div className="image-wrapper-83">
                  <Image src={images[index]} alt="casinoImage" />
                </div>
                {!popup && (
                  <div className="absolute top-2 right-4 pointer">
                    <div
                      className="py-2 px-2 rounded-full backdrop-blur-xl"
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    >
                      <Image
                        src={unbookmarkIcon}
                        alt="three dots"
                        className="three-dots"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="col-12 px-2">
                <div className="f-20 text-darkblue poppins-medium">
                  {item.name}
                </div>
              </div>
              <div className="col-12 px-2 pb-3">
                <div className="f-16 text-grey pt-1 line-clamp-2">
                  {item.description}
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image className="mr-1" src={locationIcon} alt="location" />
                  <div className="text-darkblue">{item.location}</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image className="mr-1" src={clockIcon} alt="time" />
                  <div className="text-darkblue">{item.duration}</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image className="mr-1" src={calendarIcon} alt="calendar" />
                  <div className="text-darkblue">{item.date}</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image className="mr-1" src={treeIcon} alt="tree icon" />
                  <div className="text-darkblue">{item.theme}</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image className="mr-1" src={sunIcon} alt="sun icon" />
                  <div className="text-darkblue">{item.season}</div>
                </div>
              </div>
            </div>
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}
