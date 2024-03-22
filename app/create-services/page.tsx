"use client";
import React, { useEffect, useState } from "react";
import "./dist/createServices.css";
import Image from "next/image";

import saveIcon from "../assets/Icon_Save.png";
import backIcon from "../assets/Icon_Back.png";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ServiceDetails from "../components/servicesComponents/ServiceDetails";
import ServiceProviderPopup from "../components/servicesComponents/ServiceProviderPopup";
import ServiceProviders from "../components/servicesComponents/ServiceProviders";

export default function CreateServices() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };
  const [progress, setProgress] = useState(0);
  const [selectProviderPopup, setSelectProviderPopup] = useState("false");
  const [selectedProviders, setSelectedProviders] = useState([1, 2]);
  const [currentTab, setCurrentTab] = useState("service-providers");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        {/* SERVICE PROVIDERS POPUP  */}
        <ServiceProviderPopup
          selectProviderPopup={selectProviderPopup}
          setSelectProviderPopup={setSelectProviderPopup}
        />

        {/* TITLE AND BACK BUTTON AND SERVICE TABS */}
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
            <div className="f-36 poppins-semibold text-darkblue ">Service</div>
          </div>
          <div className="col-12"></div>
          <div className="col-auto">
            <div
              className={
                (currentTab === "service-details"
                  ? "text-darkblue bg-blue "
                  : "text-grey ") +
                " f-20 py-5 px-5 poppins-medium flex items-center rounded-lg pointer"
              }
              onClick={() => {
                setCurrentTab("service-details");
              }}
            >
              Service Details
            </div>
          </div>
          <div className="col-auto">
            <div
              className={
                (currentTab === "service-providers"
                  ? "text-darkblue bg-blue "
                  : "text-grey ") +
                " f-20 py-5 px-5 poppins-medium flex items-center rounded-lg pointer"
              }
              onClick={() => {
                setCurrentTab("service-providers");
              }}
            >
              Service Providers
            </div>
          </div>
        </div>

        {/* SERVICE DETAILS */}
        {currentTab === "service-details" && <ServiceDetails />}

        {/* SERVICE Providers */}
        {currentTab === "service-providers" && (
          <ServiceProviders
            setSelectProviderPopup={setSelectProviderPopup}
            selectedProviders={selectedProviders}
          />
        )}

        {/* SAVE SERVICE BUTTON */}
        <div className="row">
          <div className="col-auto pt-[64px]">
            <Link href="/services">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={saveIcon} alt="saveIcon" />
                  <div className="pl-4">Save Service</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
