import React from "react";
import Image from "next/image";

import Images from "@/app/Images";
import Icons from "@/app/Icons";

import Link from "next/link";
import casinoImage from "../../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";

export default function CataloguesSection() {
  const catalogues = [
    {
      id: 1,
      dmcName: "Adventure Tours",
      dmcImage: Icons.vicky,
      name: "Adventure Seeker's Guide",
      description:
        "Discover thrilling outdoor adventures and breathtaking landscapes.",
      tags: ["Adventure", "Outdoor", "Nature"],
      image: Images.kayak,
    },
    {
      id: 2,
      dmcName: "Cultural Explorers",
      dmcImage: Icons.jane,
      name: "Cultural Explorer's Catalogue",
      description:
        "Immerse yourself in rich cultures, history, and local traditions.",
      tags: ["Cultural", "Historical", "Local"],
      image: Images.tajmahal,
    },
    {
      id: 3,
      dmcName: "Luxury Escapes",
      dmcImage: Icons.veronica,
      name: "Luxury Escapes Collection",
      description:
        "Experience ultimate luxury and relaxation in stunning destinations.",
      tags: ["Luxury", "Getaways", "Spa"],
      image: Images.marakesh,
    },
    {
      id: 4,
      dmcName: "Family Adventures",
      dmcImage: Icons.marcus,
      name: "Family Fun Destinations",
      description:
        "Create unforgettable family memories with fun-filled activities.",
      tags: ["Family", "Kids", "Entertainment"],
      image: Images.disney,
    },
    {
      id: 5,
      dmcName: "Wildlife Treks",
      dmcImage: Icons.mary,
      name: "Wildlife and Nature Treks",
      description:
        "Embark on wildlife safaris and explore the wonders of nature.",
      tags: ["Wildlife", "Nature", "Ecotourism"],
      image: Images.safari,
    },
    {
      id: 6,
      dmcName: "City Explorations",
      dmcImage: Icons.john,
      name: "City Explorer's Handbook",
      description:
        "Discover vibrant cities, iconic landmarks, and local culture.",
      tags: ["City", "Landmarks", "Culture"],
      image: Images.istanbul,
    },
    {
      id: 7,
      dmcName: "Island Getaways",
      dmcImage: Icons.brit,
      name: "Island Paradise Selection",
      description:
        "Escape to tropical paradises with pristine beaches and azure waters.",
      tags: ["Island", "Beach", "Paradise"],
      image: Images.thailand,
    },
    {
      id: 8,
      dmcName: "Heritage Tours",
      dmcImage: Icons.vicky,
      name: "Heritage and History Journeys",
      description:
        "Journey through historical sites and explore rich heritage.",
      tags: ["Heritage", "History", "Journeys"],
      image: Images.japan,
    },
    {
      id: 9,
      dmcName: "Eco Adventures",
      dmcImage: Icons.jane,
      name: "Eco-Friendly Adventures",
      description:
        "Experience eco-friendly travel with sustainable adventures.",
      tags: ["Eco-Friendly", "Sustainable", "Adventures"],
      image: Images.utah,
    },
    {
      id: 10,
      dmcName: "Gourmet Tours",
      dmcImage: Icons.veronica,
      name: "Gastronomic Delights Showcase",
      description:
        "Savor culinary delights and indulge in gastronomic experiences.",
      tags: ["Gastronomic", "Culinary", "Delights"],
      image: Images.gastronomic,
    },
  ];

  return (
    <div className="row mt-2" style={{ maxWidth: "95%" }}>
      {catalogues.map((item, index) => {
        return (
          <div className="col-2xl-3 col-lg-4 col-md-6 py-3 px-5" key={index}>
            <Link href="/catalogue">
              <div className="row bg-white rounded-lg py-2 bg-white catalogue-card h-100">
                <div className="col-12 pb-4 px-2">
                  <div className="image-wrapper-83">
                    <Image
                      src={item?.image ? item.image : Images.machupichu}
                      alt="Image"
                    />
                  </div>
                  <div className="absolute top-2 right-8 pointer">
                    <Image
                      src={Icons.threeDotsWhiteIcon}
                      alt="three dots"
                      className="three-dots"
                    />
                  </div>

                  <div className="absolute bottom-8 left-8 pointer">
                    <div className="rounded-full bg-white text-grey flex items-center justify-center pl-1 pr-2 py-1">
                      <Image
                        src={item.dmcImage}
                        alt="avatar"
                        className="rounded-full"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <div className="pl-1 f-14">{item.dmcName}</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-2 flex justify-between">
                  <div className="f-18 text-darkblue poppins-medium">
                    {item.name}
                  </div>
                </div>

                <div className="col-12 px-2 pb-4">
                  <div className="f-14 text-grey pt-2 line-clamp-2">
                    {item.description}
                  </div>
                </div>

                {item.tags.map((tag, index) => (
                  <div className="col-auto px-2 py-1" key={index}>
                    <div className="bg-grey text-darkblue rounded-xl px-2 py-1 f-12">
                      #{tag}
                    </div>
                  </div>
                ))}

                <div className="col-12 flex items-center justify-between pt-3">
                  <div className="text-darkblue f-14 poppins-medium">
                    Itineraries
                    <div className="flex">
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                        }}
                        src={Images.egypt}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-50%)",
                        }}
                        src={Images.spain}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-100%)",
                        }}
                        src={Images.brazil}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-150%)",
                        }}
                        src={Images.lebanon}
                        alt="casino"
                      />
                    </div>
                  </div>
                  <div className="text-darkblue f-14 poppins-medium pr-10">
                    Services
                    <div className="flex">
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                        }}
                        src={Images.montsaint}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-50%)",
                        }}
                        src={Images.triomphe}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-100%)",
                        }}
                        src={Images.versailles}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-150%)",
                        }}
                        src={Images.geneva}
                        alt="casino"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
