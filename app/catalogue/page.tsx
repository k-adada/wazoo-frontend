"use client";
import React, { useEffect, useState } from "react";
import "./dist/catalogue.css";
import Image from "next/image";

import { useRouter } from "next/navigation";

import backIcon from "../assets/Icon_Back.png";
import casinoImage from "../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";

import CataloguePreview from "../components/catalogueComponents/CataloguePreview";

export default function Catalogue() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };

  const [activeCatalogue, setActiveCatalogue] = useState(-1);

  const [openAudiences, setOpenAudiences] = useState(false);

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
