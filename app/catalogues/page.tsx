"use client";
import React, { useEffect, useState } from "react";
import "./dist/catalogues.css";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

import casinoImage from "../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";

import AudienceDrawer from "../components/catalogueComponents/AudienceDrawer";
import Icons from "../Icons";
import Images from "../Images";

export default function Catalogues() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };

  const catalogues = [
    {
      id: 1,
      image: Images.aurora,
      name: "Catalogue 1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["#Outdoor activity", "#Beach&Sun", "#Snow&Skii"],
      packages: [casinoImage, casinoImage, casinoImage, casinoImage],
      services: [casinoImage, casinoImage, casinoImage, casinoImage],
    },
    {
      id: 2,
      image: Images.australiaImage,
      name: "Catalogue 2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["#Outdoor activity", "#Beach&Sun", "#Snow&Skii"],
      packages: [casinoImage, casinoImage, casinoImage, casinoImage],
      services: [casinoImage, casinoImage, casinoImage, casinoImage],
    },
    {
      id: 3,
      image: Images.brazil,
      name: "Catalogue 3",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["#Outdoor activity", "#Beach&Sun", "#Snow&Skii"],
      packages: [casinoImage, casinoImage, casinoImage, casinoImage],
      services: [casinoImage, casinoImage, casinoImage, casinoImage],
    },
    {
      id: 4,
      image: Images.disney,
      name: "Catalogue 4",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["#Outdoor activity", "#Beach&Sun", "#Snow&Skii"],
      packages: [casinoImage, casinoImage, casinoImage, casinoImage],
      services: [casinoImage, casinoImage, casinoImage, casinoImage],
    },
    {
      id: 5,
      image: Images.istanbul,
      name: "Catalogue 5",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["#Outdoor activity", "#Beach&Sun", "#Snow&Skii"],
      packages: [casinoImage, casinoImage, casinoImage, casinoImage],
      services: [casinoImage, casinoImage, casinoImage, casinoImage],
    },
    {
      id: 6,
      image: Images.japanImage,
      name: "Catalogue 6",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["#Outdoor activity", "#Beach&Sun", "#Snow&Skii"],
      packages: [casinoImage, casinoImage, casinoImage, casinoImage],
      services: [casinoImage, casinoImage, casinoImage, casinoImage],
    },
  ];

  const [activeCatalogue, setActiveCatalogue] = useState(-1);

  const [openAudiences, setOpenAudiences] = useState(false);

  const [audienceData, setAudienceData] = useState([
    {
      id: 1,
      name: "Families",
      selected: true,
      image: casinoImage,
      agencies: [1, 2, 3, 4, 5, 6, , 7, 8, 9],
    },
    {
      id: 2,
      name: "Couples",
      selected: false,
      image: casinoImage,
      agencies: [1, 2, 3, 4],
    },
    {
      id: 3,
      name: "Friends",
      selected: false,
      image: casinoImage,
      agencies: [1, 2, 3, 4, 5, 6],
    },
    {
      id: 4,
      name: "Solo",
      selected: false,
      image: casinoImage,
      agencies: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      id: 5,
      name: "Business",
      selected: false,
      image: casinoImage,
      agencies: [1, 2, 3],
    },
    {
      id: 6,
      name: "Adventure",
      selected: false,
      image: casinoImage,
      agencies: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      id: 7,
      name: "Relaxation",
      selected: false,
      image: casinoImage,
      agencies: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      id: 8,
      name: "Culture",
      selected: false,
      image: casinoImage,
      agencies: [1, 2, 3, 4, 5, 6, 7, 8],
    },

    {
      id: 9,
      name: "Nature",
      selected: false,
      image: casinoImage,
      agencies: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  ]);

  useEffect(() => {
    if (!openAudiences) {
      setActiveCatalogue(-1);
    }
  }, [openAudiences]);

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto">
            <div
              className="flex items-center py-5 back-button"
              onClick={routerBack}
            >
              <Image src={Icons.backIcon} alt="back" />
              <div className="pl-2 text-darkblue">Back</div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">
              Catalogues
            </div>
          </div>
        </div>

        {catalogues.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <AudienceDrawer
                openAudiences={openAudiences}
                setOpenAudiences={setOpenAudiences}
                audienceData={audienceData}
                setAudienceData={setAudienceData}
              />
            </div>
            <div className="col-12">
              <div className="row justify-between">
                <div className="col-auto">
                  <div className="f-16 py-3 px-3 bg-white rounded-lg">
                    Filters
                  </div>
                </div>
                <div className="flex col-auto">
                  <Link href="/create-catalogues">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={Icons.addIconGold} alt="add icon" />
                        <div className="pl-4">Create Catalogue</div>
                      </div>
                    </div>
                  </Link>
                  <div className="px-3"></div>
                  <Link href="#">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={Icons.listIconGold} alt="list icon" />
                        <div className="pl-4">List View</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12 py-3"></div>
                {/* <div className="col-12 pt-7">
                  <ServicesTable />
                </div> */}
                {catalogues.map((item, index) => {
                  return (
                    <div
                      className="col-2xl-3 col-lg-4 col-md-6 py-3 px-2"
                      key={index}
                    >
                      <div
                        className={
                          (activeCatalogue === index
                            ? "active text-white"
                            : "") + " bg-white px-4 rounded-lg catalogue-card"
                        }
                      >
                        <div className="row py-2">
                          <div className="col-12 pb-4 px-2">
                            <div className="image-wrapper-83">
                              <Image src={item.image} alt={item.name} />
                            </div>
                            <div className="absolute top-2 right-8 pointer">
                              <Image
                                src={Icons.threeDotsWhiteIcon}
                                alt="three dots"
                                className="three-dots"
                              />
                            </div>
                          </div>

                          {/* CATALOGUE NAME */}
                          <div className="col-12 px-2 flex justify-between">
                            <div className="f-20 text-darkblue poppins-medium">
                              {item.name}
                            </div>
                            <Link href="/catalogue">
                              <div className="rounded-lg bg-lineslight poppins-medium py-1 text-darkblue flex items-center justify-center hover pointer px-4">
                                <div className="">
                                  <Image
                                    src={Icons.eyeIconDark}
                                    alt="eyeIcon"
                                  />
                                </div>
                                <div className="pl-2">View</div>
                              </div>
                            </Link>
                          </div>

                          {/* DESCRIPTION */}
                          <div className="col-12 px-2">
                            <div className="text-grey pt-4">
                              {item.description}
                            </div>
                          </div>

                          {/* TAGS START */}
                          {item.tags.map((tag, index) => (
                            <div className="col-auto px-2 py-1">
                              <div className="bg-grey text-grey rounded-xl px-2">
                                {tag}
                              </div>
                            </div>
                          ))}
                          {/* TAGS END */}

                          {/* PACKAGES AND SERVICES IMAGES DISPLAY  */}
                          <div className="col-12 flex items-center justify-between pt-4">
                            <div className="text-darkblue f-14 poppins-medium">
                              Packages
                              <div className="flex">
                                {item.packages.map((packageImage, index) => (
                                  <Image
                                    className="rounded-full"
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      transform: `translateX(-${index * 50}%)`,
                                    }}
                                    src={packageImage}
                                    alt="packageImage"
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="text-darkblue f-14 poppins-medium pr-10">
                              Services
                              <div className="flex">
                                {item.services.map((serviceImage, index) => (
                                  <Image
                                    className="rounded-full"
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      transform: `translateX(-${index * 50}%)`,
                                    }}
                                    src={serviceImage}
                                    alt="serviceImage"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* PUBLISH CATALOGUE */}
                          <div className="col-12 pt-4">
                            <div
                              className="rounded-lg bg-lineslight poppins-medium py-3 text-darkblue flex items-center justify-center pointer hover px-4"
                              onClick={() => {
                                if (activeCatalogue === index) {
                                  setActiveCatalogue(-1);
                                } else {
                                  setActiveCatalogue(index);
                                  setOpenAudiences(true);
                                }
                              }}
                            >
                              <div className="">
                                <Image
                                  src={Icons.speakerIconDark}
                                  alt="speaker"
                                />
                              </div>
                              <div className="pl-2"> Publish Catalogue</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="row items-center justify-center">
            <div className="col-12">
              <div className="text-center">
                <Image
                  className="m-auto"
                  src={Icons.serviceEmptyIconDark}
                  alt="serviceEmptyIcon"
                />
                <div className="f-48 text-darkblue poppins-medium">
                  No Catalogues Created
                </div>
                <div className="f-24 text-grey">
                  Start Creating Your Catalogue
                </div>
              </div>
            </div>

            <div className="col-auto pt-[64px]">
              <Link href="/create-catalogues">
                <div className="dark-button text-gold poppins-medium cursor-pointer">
                  <div className="flex items-center h-full">
                    <Image src={Icons.addIconGold} alt="add icon" />
                    <div className="pl-4">Add Catalogue</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
