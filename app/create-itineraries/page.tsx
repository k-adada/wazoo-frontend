"use client";
import React, { useEffect, useState } from "react";
import "./dist/createItineraries.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";
import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";

import backIcon from "../assets/Icon_Back.png";
import avatarIcon from "../assets/avatar.png";
import bgImage from "../assets/background_image_tour.png";

import TripDetails from "../components/itineraryComponents/TripDetails";
import Accommodation from "../components/itineraryComponents/Accommodation";
import Activities from "../components/itineraryComponents/Activities";
import Transport from "../components/itineraryComponents/Transport";
import Pricing from "../components/itineraryComponents/Pricing";
import Review from "../components/itineraryComponents/Review";
import Preview from "../components/itineraryComponents/Preview";
import MapView from "../components/itineraryComponents/MapView";

export default function CreateItineraries() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("pricing");
  const [stepsDone, setStepsDone] = useState(["trip-details"]);
  // const steps = [
  //   "trip-details",
  //   "accommodation",
  //   "activities",
  //   "transport",
  //   "pricing",
  //   "review",
  // ];

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
    <main
      className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "right",
      }}
    >
      <div className="container-fluid" style={{ width: "95%" }}>
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
              Itinerary
            </div>
          </div>
          {currentStep != "preview" && (
            <>
              {/*  STEPS BAR */}
              <div className="col-12 pb-10 pt-4">
                <div className="row">
                  {/* STEP 1  */}
                  <div
                    className="col-auto pointer"
                    onClick={() => {
                      setCurrentStep("trip-details");
                    }}
                  >
                    <div className="itinerary-step">
                      <div className="darkblue-ball"></div>
                      <div className="f-14 text-grey text-center">Step 1</div>
                      <div className="text-darkblue text-center">
                        Trip Details
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="step-direction pt-3">
                      <div className="step-line active"></div>
                    </div>
                  </div>
                  {/* STEP 2  */}
                  <div
                    className="col-auto pointer"
                    onClick={() => {
                      setCurrentStep("accommodation");
                    }}
                  >
                    <div className="itinerary-step">
                      <div
                        className={
                          stepsDone.includes("accommodation")
                            ? "darkblue-ball"
                            : "grey-ball"
                        }
                      ></div>
                      <div className="f-14 text-grey text-center">Step 2</div>
                      <div className="text-darkblue text-center">
                        Accommodation
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="step-direction pt-3">
                      <div
                        className={
                          (stepsDone.includes("accommodation")
                            ? "active"
                            : "") + " step-line"
                        }
                      ></div>
                    </div>
                  </div>
                  {/* STEP 3  */}
                  <div
                    className="col-auto pointer"
                    onClick={() => {
                      setCurrentStep("activities");
                    }}
                  >
                    <div className="itinerary-step">
                      <div
                        className={
                          stepsDone.includes("activities")
                            ? "darkblue-ball"
                            : "grey-ball"
                        }
                      ></div>
                      <div className="f-14 text-grey text-center">Step 3</div>
                      <div className="text-darkblue text-center">
                        Activities
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="step-direction pt-3">
                      <div
                        className={
                          (stepsDone.includes("activities") ? "active" : "") +
                          " step-line"
                        }
                      ></div>
                    </div>
                  </div>
                  {/* STEP 4  */}
                  <div
                    className="col-auto pointer"
                    onClick={() => {
                      setCurrentStep("transport");
                    }}
                  >
                    <div className="itinerary-step">
                      <div
                        className={
                          stepsDone.includes("transport")
                            ? "darkblue-ball"
                            : "grey-ball"
                        }
                      ></div>
                      <div className="f-14 text-grey text-center">Step 4</div>
                      <div className="text-darkblue text-center">Transport</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="step-direction pt-3">
                      <div
                        className={
                          (stepsDone.includes("transport") ? "active" : "") +
                          " step-line"
                        }
                      ></div>
                    </div>
                  </div>
                  {/* STEP 5  */}
                  <div
                    className="col-auto pointer"
                    onClick={() => {
                      setCurrentStep("pricing");
                    }}
                  >
                    <div className="itinerary-step">
                      <div
                        className={
                          stepsDone.includes("pricing")
                            ? "darkblue-ball"
                            : "grey-ball"
                        }
                      ></div>
                      <div className="f-14 text-grey text-center">Step 5</div>
                      <div className="text-darkblue text-center">
                        Pricing & Payment
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="step-direction pt-3">
                      <div
                        className={
                          (stepsDone.includes("pricing") ? "active" : "") +
                          " step-line"
                        }
                      ></div>
                    </div>
                  </div>
                  {/* STEP 6  */}
                  <div
                    className="col-auto pointer"
                    onClick={() => {
                      setCurrentStep("review");
                    }}
                  >
                    <div className="itinerary-step">
                      <div
                        className={
                          stepsDone.includes("review")
                            ? "darkblue-ball"
                            : "grey-ball"
                        }
                      ></div>
                      <div className="f-14 text-grey text-center">Step 6</div>
                      <div className="text-darkblue text-center">Review</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="row ">
          {currentStep === "trip-details" && (
            <>
              <TripDetails
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
              />
            </>
          )}

          {(currentStep === "accommodation" ||
            currentStep === "activities" ||
            currentStep === "transport") && (
            <>
              <Activities
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
                currentStep={currentStep}
              />
            </>
          )}

          {/* {currentStep === "activities" && (
            <>
              <Activities
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
                currentStep={currentStep}
              />
            </>
          )}

          {currentStep === "transport" && (
            <>
              <Activities
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
                currentStep={currentStep}
              />
            </>
          )} */}

          {currentStep === "pricing" && (
            <>
              <Pricing
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
              />
            </>
          )}

          {currentStep === "review" && (
            <>
              <Review
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
              />
            </>
          )}

          {currentStep === "preview" && (
            <>
              <Preview
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
              />
            </>
          )}

          {currentStep === "map-view" && (
            <>
              <MapView
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
