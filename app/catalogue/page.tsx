"use client";
import React from "react";
import "./dist/catalogue.css";
import Image from "next/image";

import { useRouter } from "next/navigation";

import CataloguePreview from "../components/catalogueComponents/CataloguePreview";
import Icons from "../Icons";

export default function Catalogue() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };

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
              Catalogue
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
