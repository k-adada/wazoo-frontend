"use client";
import React, { useState } from "react";
import "./dist/requestTrip.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import saveIcon from "../assets/Icon_Save.png";
import tripIcon from "../assets/Icon_Plan_Trip.svg";
import submitIcon from "../assets/Icon_Submit_gold.svg";
import backIcon from "../assets/Icon_Back.png";
import downArrowIcon from "../assets/Icon_Arrow_Down_white.png";
import Link from "next/link";
import MultipleSelectLight from "../components/MultipleSelectLight";
import AgenciesTable from "../components/community/AgenciesTable";
import TripInfo from "../components/requestTripComponents/TripInfo";
import ClientPreferences from "../components/requestTripComponents/ClientPreferences";
import RequestItineraries from "../components/requestTripComponents/RequestItineraries";
import RequestServices from "../components/requestTripComponents/RequestServices";

export default function RequestTrip() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("trip-info");
  const [showTripInfo, setShowTripInfo] = useState(true);
  const [showClientPreferences, setShowClientPreferences] = useState(true);
  const [showItinerariesAndServices, setShowItinerariesAndServices] =
    useState(true);
  const [requestType, setRequestType] = useState("false");

  const routerBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (currentStep === "trip-info") {
      setCurrentStep("itineraries&services");
    } else if (currentStep === "itineraries&services") {
      setCurrentStep("client-preferences");
    } else if (currentStep === "client-preferences") {
      setCurrentStep("review-and-submit");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] ">
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
            <div className="col-auto self-center flex items-center">
              <div className="f-36 poppins-semibold text-darkblue ">
                Request a Trip
              </div>

              <div className="f-20 poppins-medium text-darkblue pl-4">
                {requestType === "quick" && "- Quick Dispatch"}
                {requestType === "tailored" && "- Tailored Request"}
              </div>
            </div>
          </div>
          {requestType !== "false" && (
            <div className="flex pt-5">
              <div className="col-auto">
                <Link href="/ta-dashboard">
                  <div className="dark-button text-gold poppins-medium pointer">
                    <div className="flex items-center h-full">
                      <Image src={saveIcon} alt="saveIcon" />
                      <div className="pl-4">Save as Draft</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-auto">
                <div
                  className="dark-button text-gold poppins-medium pointer"
                  onClick={() => {
                    handleNext();
                  }}
                >
                  <div className="flex items-center h-full">
                    <div className="">Next</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {requestType === "false" && (
          <div className="row pt-5 justify-center">
            <div className="col-md-auto col-12">
              <div className="bg-darkblue rounded-lg px-4 pt-6 pb-10 w-[350px] h-full flex flex-col justify-between">
                <div className="w-full">
                  <div className="">
                    <Image className="w-[60px]" src={tripIcon} alt="tripIcon" />
                  </div>
                  <div className="text-ice poppins-medium f-20 py-3">
                    Tailored Request
                  </div>
                  <div className="text-grey pb-6">
                    Customize your trip by selecting from sample itineraries and
                    services before submitting your request to DMCs
                  </div>
                </div>
                <div
                  className="f-20 pointer text-darkblue bg-gold rounded-lg px-5 py-3 flex items-center justify-center"
                  onClick={() => {
                    setRequestType("tailored");
                  }}
                >
                  Tailor My Trip
                </div>
              </div>
            </div>

            <div className="col-md-auto col-12">
              <div className="bg-darkblue rounded-lg px-4 pt-6 pb-10 w-[350px] h-full flex flex-col justify-between">
                <div className="w-full">
                  <div className="">
                    <Image
                      className="w-[60px]"
                      src={submitIcon}
                      alt="submitIcon"
                    />
                  </div>
                  <div className="text-ice poppins-medium f-20 py-3">
                    Quick Dispatch
                  </div>
                  <div className="text-grey pb-6">
                    Quick Dispatch streamlines your request process by swiftly
                    connecting you with DMCs that match your chosen travel theme
                    and destinations, ensuring a prompt and tailored response to
                    your inquiry.
                  </div>
                </div>
                <div
                  className="f-20 pointer text-darkblue bg-gold rounded-lg px-5 py-3 flex items-center justify-center"
                  onClick={() => {
                    setRequestType("quick");
                  }}
                >
                  Dispatch
                </div>
              </div>
            </div>
          </div>
        )}

        {/* quick FORM */}
        {requestType === "quick" && (
          <div className="row pt-5">
            {/* TRIP INFO SECTION  */}
            <div className="col">
              <TripInfo quickDispatch={true} />
            </div>
          </div>
        )}

        {/* DETAILED FORM */}
        {requestType === "tailored" && (
          <div className="row pt-5">
            {/*  STEPS LEFT BAR START */}
            <div className="col-2" style={{ height: "80vh" }}>
              <div className="flex fixed" style={{ height: "80vh" }}>
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
                        (currentStep === "itineraries&services" &&
                          "bg-darkblue ") + " rounded-full h-[96px] w-[10px]"
                      }
                    ></div>
                  </div>
                  <div className="">
                    <div
                      className={
                        (currentStep === "client-preferences" &&
                          "bg-darkblue ") + " rounded-full h-[96px] w-[10px]"
                      }
                    ></div>
                  </div>
                  <div className="">
                    <div
                      className={
                        (currentStep === "review-and-submit" &&
                          "bg-darkblue ") + " rounded-full h-[96px] w-[10px]"
                      }
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col h-full items-center justify-between py-2 pl-5">
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
                      setCurrentStep("itineraries&services");
                    }}
                  >
                    <div
                      className={
                        (currentStep === "itineraries&services" && "bg-blue ") +
                        " py-4 px-4 rounded-lg"
                      }
                    >
                      <div className="f-16 text-grey">02 -</div>
                      <div className="text-darkblue">
                        Itineraries & Services
                      </div>
                    </div>
                  </div>
                  {/* STEP 3  */}
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
                      <div className="f-16 text-grey">03 -</div>
                      <div className="text-darkblue">Client Preferences</div>
                    </div>
                  </div>
                  {/* STEP 4  */}
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
                      <div className="f-16 text-grey">04 -</div>
                      <div className="text-darkblue">Review And Submit</div>
                    </div>
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

            {/* SERVICES AND ITINERARIES  */}
            {currentStep === "itineraries&services" && (
              <div className="col-10">
                <RequestItineraries />
                <div className="py-5"></div>
                <RequestServices />
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
                  className="row items-center bg-darkblue rounded-lg px-5 py-2 justify-between mb-5 pointer"
                  onClick={() => {
                    setShowItinerariesAndServices(!showItinerariesAndServices);
                  }}
                >
                  <div className="col-auto text-white f-24">
                    Itineraries and Services
                  </div>
                  <div className="col-auto">
                    <Image src={downArrowIcon} alt="downArrowIcon" />
                  </div>
                </div>

                {showItinerariesAndServices && (
                  <>
                    <RequestItineraries />
                    <div className="py-5"></div>
                    <RequestServices />
                  </>
                )}

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
