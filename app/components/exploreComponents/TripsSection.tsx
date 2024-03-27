"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Images from "@/app/Images";
import Icons from "@/app/Icons";

export default function TripsSection(props: any) {
  const { popup, setOpenPreview } = props;
  const router = useRouter();

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
      image: Images.montsaintImage,
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
      image: Images.triomphImage,
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
      image: Images.notreImage,
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
      image: Images.quartierImage,
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
      image: Images.safari,
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
      image: Images.marakesh,
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
      image: Images.santorini,
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
      image: Images.aurora,
    },
  ];

  return (
    <div className="row mt-2" style={{ maxWidth: "95%", margin: "auto" }}>
      {trips.map((item, index) => {
        return (
          <div className="col-3 px-5 py-2" key={index}>
            {/* <Link href="/trip"> */}
            <div
              className="row bg-white rounded-lg py-2 pointer h-full"
              onClick={() => {
                if (!popup) {
                  router.push("/trip");
                } else {
                  setOpenPreview(true);
                }
              }}
            >
              <div className="col-12 pb-5 px-2">
                <div className="image-wrapper-83">
                  <Image
                    src={item.image}
                    alt="casinoImage"
                    width={1000}
                    height={1000}
                  />
                </div>
                {!popup && (
                  <div className="absolute top-2 right-4 pointer">
                    <div
                      className="py-2 px-2 rounded-full backdrop-blur-xl"
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    >
                      <Image
                        src={Icons.unbookmarkGoldIcon}
                        alt="three dots"
                        className="three-dots"
                      />
                    </div>
                  </div>
                )}

                <div className="f-20 text-darkblue poppins-medium pt-3 line-clamp-1">
                  {item.name}
                </div>
                <div className="f-16 text-grey pt-1 line-clamp-2">
                  {item.description}
                </div>
              </div>

              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.locationDarkIcon}
                    alt="location"
                  />
                  <div className="text-darkblue">{item.location}</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.clockDarkIcon}
                    alt="time"
                  />
                  <div className="text-darkblue">{item.duration}</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.calendarDarkIcon}
                    alt="calendar"
                  />
                  <div className="text-darkblue">{item.date}</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.treeDarkIcon}
                    alt="tree icon"
                  />
                  <div className="text-darkblue">{item.theme}</div>
                </div>
              </div>
              <div className="col-auto px-2 py-1">
                <div className="service-tag flex">
                  <Image
                    className="mr-1"
                    src={Icons.sunDarkIcon}
                    alt="sun icon"
                  />
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
