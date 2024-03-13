"use client";
import React, { useEffect, useState } from "react";
import "./dist/catalogue.css";
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
import threeDotsIcon from "../assets/three_dots_white.png";
import casinoImage from "../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";
import speakerIcon from "../assets/Icon_Campaigns.svg";
import eyeIcon from "../assets/Icon_Preview.svg";

import AudienceDrawer from "../components/catalogueComponents/AudienceDrawer";
import CataloguePreview from "../components/catalogueComponents/CataloguePreview";

export default function Catalogue() {
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

        <div className="row">
          <CataloguePreview />
        </div>
      </div>
    </main>
  );
}
