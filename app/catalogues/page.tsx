"use client";
import React, { useEffect, useState } from "react";
import "./dist/catalogues.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import addIcon from "../assets/Icon_Add.png";
import backIcon from "../assets/Icon_Back.png";
import serviceEmptyIcon from "../assets/services_empty.png";
import listIcon from "../assets/Icon_List_View.png";
import locationIcon from "../assets/Icon_Location.png";
import threeDotsIcon from "../assets/three_dots_white.png";
import casinoImage from "../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";

import AudienceDrawer from "../components/catalogueComponents/AudienceDrawer";

export default function Catalogues() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };
  const [itineraries, setItineraries] = useState([1]);

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
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pb-[100px]">
      <div className="container-fluid">
        {/* navbar  */}
        <div className="row items-center">
          <div className="col-auto">
            <LeftDrawerDMC />
          </div>
          <div className="col-auto">
            <div className="poppins-semibold text-darkblue">France</div>
          </div>
          <div className="col"></div>
          <div className="col-auto">
            <div className="cursor-pointer">
              <Image src={notificationIcon} alt="notification" />
            </div>
          </div>
          <div className="col-auto">
            <div className="flex items-center cursor-pointer">
              <div className="user-icon">
                <Image src={avatarIcon} alt="avatar" />
              </div>
              <div className="poppins-medium text-darkblue pl-4">
                Brit Ferguson
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-auto">
            <div
              className="flex items-center py-5 back-button"
              onClick={routerBack}
            >
              <Image src={backIcon} alt="back" />
              <div className="pl-2 text-darkblue">Back</div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">
              Catalogues
            </div>
          </div>
        </div>

        {itineraries.length > 0 ? (
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
                  <div className="f-20 py-3 px-3 bg-white rounded-lg">
                    Filters
                  </div>
                </div>
                <div className="flex col-auto">
                  <Link href="/create-itineraries">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={addIcon} alt="add icon" />
                        <div className="pl-4">Create Catalogue</div>
                      </div>
                    </div>
                  </Link>
                  <div className="px-3"></div>
                  <Link href="#">
                    <div className="dark-button text-gold poppins-medium cursor-pointer">
                      <div className="flex items-center h-full">
                        <Image src={listIcon} alt="list icon" />
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
                {[1, 2, 3, 4, 5, 6].map((item, index) => {
                  return (
                    <div className="col-2xl-3 col-lg-4 col-md-6 py-3 px-2" key={index}>
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
                              <Image src={casinoImage} alt="casinoImage" />
                            </div>
                            <div className="absolute top-2 right-8 pointer">
                              <Image
                                src={threeDotsIcon}
                                alt="three dots"
                                className="three-dots"
                              />
                            </div>
                          </div>
                          <div className="col-12 px-2">
                            <div className="f-20 text-darkblue poppins-medium">
                              Itinerary Name {index + 1}
                            </div>
                          </div>

                          <div className="col-12 px-2">
                            <div className="text-grey pt-4">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Veniam voluptates eveniet iste
                              corrupti! Cum,
                            </div>
                          </div>

                          <div className="col-auto px-2 py-1">
                            <div className="bg-grey text-grey rounded-xl px-2">
                              #Outdoor activity
                            </div>
                          </div>
                          <div className="col-auto px-2 py-1">
                            <div className="bg-grey text-grey rounded-xl px-2">
                              #Beach&Sun
                            </div>
                          </div>

                          <div className="col-auto px-2 py-1">
                            <div className="bg-grey text-grey rounded-xl px-2">
                              #Snow&Skii
                            </div>
                          </div>

                          <div className="col-12 flex items-center justify-between pt-4">
                            <div className="text-darkblue f-14 poppins-medium">
                              Packages
                              <div className="flex">
                                <Image
                                  className="rounded-full"
                                  style={{
                                    width: "36px",
                                    height: "36px",
                                  }}
                                  src={casinoImage}
                                  alt="casino"
                                />
                                <Image
                                  className="rounded-full"
                                  style={{
                                    width: "36px",
                                    height: "36px",
                                    transform: "translateX(-50%)",
                                  }}
                                  src={casinoImage}
                                  alt="casino"
                                />
                                <Image
                                  className="rounded-full"
                                  style={{
                                    width: "36px",
                                    height: "36px",
                                    transform: "translateX(-100%)",
                                  }}
                                  src={casinoImage}
                                  alt="casino"
                                />
                                <Image
                                  className="rounded-full"
                                  style={{
                                    width: "36px",
                                    height: "36px",
                                    transform: "translateX(-150%)",
                                  }}
                                  src={casinoImage}
                                  alt="casino"
                                />
                              </div>
                            </div>
                            <div className="text-darkblue f-14 poppins-medium pr-20">
                              Services
                              <div className="flex">
                                <Image
                                  className="rounded-full"
                                  style={{
                                    width: "36px",
                                    height: "36px",
                                  }}
                                  src={casinoImage}
                                  alt="casino"
                                />
                                <Image
                                  className="rounded-full"
                                  style={{
                                    width: "36px",
                                    height: "36px",
                                    transform: "translateX(-50%)",
                                  }}
                                  src={casinoImage}
                                  alt="casino"
                                />
                                <Image
                                  className="rounded-full"
                                  style={{
                                    width: "36px",
                                    height: "36px",
                                    transform: "translateX(-100%)",
                                  }}
                                  src={casinoImage}
                                  alt="casino"
                                />
                                <Image
                                  className="rounded-full"
                                  style={{
                                    width: "36px",
                                    height: "36px",
                                    transform: "translateX(-150%)",
                                  }}
                                  src={casinoImage}
                                  alt="casino"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-12 pt-4">
                            <div
                              className="rounded-lg bg-lineslight poppins-medium py-3 text-darkblue flex items-center justify-center pointer hover"
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
                                <Image src={locationIcon} alt="speaker" />
                              </div>
                              <div className="pl-2"> Create Listing</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className="col-3">
              <div className="row bg-white rounded-lg py-2">
                <div className="col-12 px-2">
                  <div className="f-28 text-darkblue poppins-medium">
                    Itinerary Name
                  </div>
                </div>

                <div className="col-12 pb-4 px-2">
                  <ServicesSwiper images={[]} />
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image src={locationIcon} alt="location" />
                    <div className="text-darkblue">Paris, France</div>
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image src={clockIcon} alt="time" />
                    <div className="text-darkblue">3h</div>
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image src={calendarIcon} alt="calendar" />
                    <div className="text-darkblue">Oct 11 - Oct 15</div>
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <Image src={dollarIcon} alt="dollar sign" />
                    <div className="text-darkblue">$350</div>
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <div className="text-darkblue">Outdoor Activity</div>
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="service-tag flex">
                    <div className="text-darkblue">Sub-type</div>
                  </div>
                </div>
                <div className="col-12 px-2">
                  <div className="f-20 text-darkblue pt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam voluptates eveniet iste corrupti! Cum, nulla
                    exercitationem beatae tempora veritatis ex voluptates labore
                    a quae, reiciendis soluta? Error repellat commodi similique.
                  </div>
                </div>

                <div className="col-12 px-2">
                  <div className="f-20 poppins-semibold text-darkblue py-2">
                    Service Provider
                  </div>
                  <div className="flex py-1">
                    <div className="">
                      <Image src={userIcon} alt="userIcon" />
                    </div>
                    <div className="text-darkblue">Le Touriste</div>
                  </div>
                  <div className="flex py-1">
                    <div className="">
                      <Image src={dollarIcon} alt="dollars" />
                    </div>
                    <div className="text-darkblue">$350</div>
                  </div>
                  <div className="flex py-1">
                    <div className="">
                      <Image src={phoneIcon} alt="phoneIcon" />
                    </div>
                    <div className="text-darkblue">
                      <a href="tel:+9613123456">+33 1 09 75 83 51</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ) : (
          <>
            <div className="row items-center justify-center">
              <div className="col-12">
                <div className="text-center">
                  <Image
                    className="m-auto"
                    src={serviceEmptyIcon}
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
                      <Image src={addIcon} alt="add icon" />
                      <div className="pl-4">Add Catalogue</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
