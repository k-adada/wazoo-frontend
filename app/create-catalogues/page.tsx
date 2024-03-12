"use client";
import React, { useEffect, useState } from "react";
import "./dist/createCatalogues.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";
import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";

import backIcon from "../assets/Icon_Back.png";
import avatarIcon from "../assets/avatar.png";
import bgImage from "../assets/background_image_tour.png";

import Transport from "../components/itineraryComponents/Transport";
import Pricing from "../components/itineraryComponents/Pricing";
import Review from "../components/itineraryComponents/Review";
import Preview from "../components/itineraryComponents/Preview";
import MapView from "../components/itineraryComponents/MapView";
import CatalogueDetails from "../components/catalogueComponents/CatalogueDetails";
import CatalogueBuilder from "../components/catalogueComponents/CatalogueBuilder";
import CataloguePreview from "../components/catalogueComponents/CataloguePreview";

export default function CreateCatalogues() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("catalogue-details");
  const [stepsDone, setStepsDone] = useState(["catalogue-details"]);
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
      className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "right",
      }}
    >
      <div className="container-fluid" style={{ width: "80%" }}>
        {/* navbar  */}
        <div className="row items-center">
          <div className="col-auto">
            <LeftDrawerDMC />
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
              Catalogue
            </div>
          </div>

          {/*  STEPS BAR */}
          <div className="col-12 pt-6">
            <div className="row">
              {/* STEP 1  */}
              <div
                className="col-auto pointer"
                onClick={() => {
                  setCurrentStep("catalogue-details");
                }}
              >
                <div className="itinerary-step">
                  <div className="darkblue-ball"></div>
                  <div className="f-14 text-grey text-center">Step 1</div>
                  <div className="text-darkblue text-center">
                    Catalogue Details
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
                  setCurrentStep("catalogue-builder");
                  setStepsDone(["catalogue-details", "catalogue-builder"]);
                }}
              >
                <div className="itinerary-step">
                  <div
                    className={
                      stepsDone.includes("catalogue-builder")
                        ? "darkblue-ball"
                        : "grey-ball"
                    }
                  ></div>
                  <div className="f-14 text-grey text-center">Step 2</div>
                  <div className="text-darkblue text-center">
                    Catalogue Builder
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="step-direction pt-3">
                  <div
                    className={
                      (stepsDone.includes("catalogue-builder")
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
                  setCurrentStep("review");
                  setStepsDone([
                    "catalogue-details",
                    "catalogue-builder",
                    "review",
                  ]);
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
        </div>

        <div className="row pt-10">
          {/* catalogue details  */}
          {currentStep === "catalogue-details" && (
            <>
              <CatalogueDetails
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
              />
            </>
          )}

          {/* catalogue builder  */}
          {currentStep === "catalogue-builder" && (
            <>
              <CatalogueBuilder
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
              />
            </>
          )}

          {/* catalogue builder  */}
          {currentStep === "review" && (
            <>
              <CatalogueBuilder
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
              />
            </>
          )}

          {/* Preview Catalogue  */}
          {currentStep === "preview" && (
            <>
              <CataloguePreview
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
