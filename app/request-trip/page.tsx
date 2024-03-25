"use client";
import React, { useState } from "react";
import "./dist/requestTrip.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import saveIcon from "../assets/Icon_Save.png";
import tripIcon from "../assets/Icon_Plan_Trip.svg";
import backIcon from "../assets/Icon_Back.png";
import downArrowIcon from "../assets/Icon_Arrow_Down_white.png";
import Link from "next/link";
import MultipleSelectLight from "../components/MultipleSelectLight";
import AgenciesTable from "../components/community/AgenciesTable";
import TripInfo from "../components/requestTripComponents/TripInfo";
import ClientPreferences from "../components/requestTripComponents/ClientPreferences";

export default function RequestTrip() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("trip-info");
  const [showTripInfo, setShowTripInfo] = useState(true);
  const [showClientPreferences, setShowClientPreferences] = useState(true);
  const [requestType, setRequestType] = useState("false");

  const routerBack = () => {
    router.back();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        <div className="row items-center justify-between">
          <div className="flex">
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
                Request a Trip
              </div>
            </div>
          </div>
          <div className="flex pt-5">
            <div className="col-auto">
              <Link href="/audiences">
                <div className="dark-button text-gold poppins-medium cursor-pointer">
                  <div className="flex items-center h-full">
                    <Image src={saveIcon} alt="saveIcon" />
                    <div className="pl-4">Save as Draft</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-auto">
              <Link href="/audiences">
                <div className="dark-button text-gold poppins-medium cursor-pointer">
                  <div className="flex items-center h-full">
                    <div className="">Next</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {requestType === "false" && (
          <div className="row pt-5 justify-center">
            <div className="col-md-auto col-12">
              <div className="bg-darkblue rounded-lg px-4 pt-6 pb-10 w-[350px]">
                <div className="">
                  <Image className="w-[60px]" src={tripIcon} alt="tripIcon" />
                </div>
                <div className="text-ice poppins-medium f-20 py-3">
                  Fill a detailed form
                </div>
                <div className="text-grey pb-6">
                  Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do
                  eiusmod tempor incididun Lorem ipsum dolor sit amet, sectetur
                  adipiscing elit.
                </div>

                <div
                  className="f-20 pointer text-darkblue bg-gold rounded-lg px-5 py-3 flex items-center justify-center"
                  onClick={() => {
                    setRequestType("detailed");
                  }}
                >
                  Fill Form
                </div>
              </div>
            </div>

            <div className="col-md-auto col-12">
              <div className="bg-darkblue rounded-lg px-4 pt-6 pb-10 w-[350px]">
                <div className="">
                  <Image className="w-[60px]" src={tripIcon} alt="tripIcon" />
                </div>
                <div className="text-ice poppins-medium f-20 py-3">
                  Leave a small note
                </div>
                <div className="text-grey pb-6">
                  Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do
                  eiusmod tempor incididun Lorem ipsum dolor sit amet, sectetur
                  adipiscing elit.
                </div>

                <div
                  className="f-20 pointer text-darkblue bg-gold rounded-lg px-5 py-3 flex items-center justify-center"
                  onClick={() => {
                    setRequestType("small");
                  }}
                >
                  Leave Note
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SMALL FORM */}
        {requestType === "small" && (
          <div className="row pt-5">
            {/* TRIP INFO SECTION  */}
            <div className="col">
              <TripInfo />
            </div>
          </div>
        )}

        {/* DETAILED FORM */}
        {requestType === "detailed" && (
          <div className="row pt-5">
            {/*  STEPS LEFT BAR START */}
            <div className="col-auto" style={{ maxHeight: "80vh" }}>
              <div className="flex flex-col bg-blue rounded-full h-full w-[10px] items-center justify-between">
                <div className="">
                  <div
                    className={
                      (currentStep === "trip-info" && "bg-darkblue ") +
                      " rounded-full h-[96px] w-[10px]"
                    }
                  ></div>
                </div>
                <div className="">
                  <div
                    className={
                      (currentStep === "client-preferences" && "bg-darkblue ") +
                      " rounded-full h-[96px] w-[10px]"
                    }
                  ></div>
                </div>
                <div className="">
                  <div
                    className={
                      (currentStep === "review-and-submit" && "bg-darkblue ") +
                      " rounded-full h-[96px] w-[10px]"
                    }
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-2" style={{ maxHeight: "80vh" }}>
              <div className="flex flex-col h-full items-center justify-between py-2">
                {/* STEP 1  */}
                <div
                  className="pointer w-full"
                  onClick={() => {
                    setCurrentStep("trip-info");
                  }}
                >
                  <div
                    className={
                      (currentStep === "trip-info" && "bg-blue ") +
                      " py-4 px-4 rounded-lg"
                    }
                  >
                    <div className="f-16 text-grey">01 -</div>
                    <div className="text-darkblue">Trip Info</div>
                  </div>
                </div>

                {/* STEP 2  */}
                <div
                  className="pointer w-full"
                  onClick={() => {
                    setCurrentStep("client-preferences");
                  }}
                >
                  <div
                    className={
                      (currentStep === "client-preferences" && "bg-blue ") +
                      " py-4 px-4 rounded-lg"
                    }
                  >
                    <div className="f-16 text-grey">02 -</div>
                    <div className="text-darkblue">Client Preferences</div>
                  </div>
                </div>

                {/* STEP 3  */}
                <div
                  className="pointer w-full"
                  onClick={() => {
                    setCurrentStep("review-and-submit");
                  }}
                >
                  <div
                    className={
                      (currentStep === "review-and-submit" && "bg-blue ") +
                      " py-4 px-4 rounded-lg"
                    }
                  >
                    <div className="f-16 text-grey">03 -</div>
                    <div className="text-darkblue">Review And Submit</div>
                  </div>
                </div>
              </div>
            </div>
            {/*  STEPS LEFT BAR END */}

            {/* TRIP INFO SECTION  */}
            {currentStep === "trip-info" && (
              <div className="col">
                <TripInfo />
              </div>
            )}

            {/* CLIENT PREFFERENCES SECTION  */}
            {currentStep === "client-preferences" && (
              <div className="col">
                <ClientPreferences />
              </div>
            )}

            {currentStep === "review-and-submit" && (
              <div className="col">
                <div
                  className="row items-center bg-darkblue rounded-lg px-5 py-2 justify-between mb-5 pointer"
                  onClick={() => {
                    setShowTripInfo(!showTripInfo);
                  }}
                >
                  <div className="col-auto text-white f-24">Trip Info</div>
                  <div className="col-auto">
                    <Image src={downArrowIcon} alt="downArrowIcon" />
                  </div>
                </div>

                {showTripInfo && <TripInfo />}

                <div
                  className="row items-center bg-darkblue rounded-lg px-5 py-2 justify-between my-5 pointer"
                  onClick={() => {
                    setShowClientPreferences(!showClientPreferences);
                  }}
                >
                  <div className="col-auto text-white f-24">
                    Client Preferences
                  </div>
                  <div className="col-auto">
                    <Image src={downArrowIcon} alt="downArrowIcon" />
                  </div>
                </div>
                {showClientPreferences && <ClientPreferences />}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
