"use client";
import React, { useEffect, useState } from "react";
import "./dist/createItineraries.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";
import SingleSelect from "../components/SingleSelect";
import BasicDateRangePicker from "../components/DateRangePicker";
import CircularProgress from "@mui/material/CircularProgress";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import addIcon from "../assets/Icon_Add.png";
import saveIcon from "../assets/Icon_Save.png";
import backIcon from "../assets/Icon_Back.png";
import uploadIcon from "../assets/upload_icon.png";
import themeIcon from "../assets/theme.png";
import dotsIcon from "../assets/dots_icon.png";
import AvailabilityTimes from "../components/AvailabilityTimes";
import TripDetails from "../components/itineraryComponents/TripDetails";
import Accommodation from "../components/itineraryComponents/Accommodation";

export default function CreateItineraries() {
  const [progress, setProgress] = React.useState(0);
  const [currentStep, setCurrentStep] = useState("trip-details");
  const [stepsDone, setStepsDone] = useState(["trip-details"]);
  // const steps = [
  //   "trip-details",
  //   "accommodation",
  //   "activities",
  //   "transport",
  //   "pricing",
  //   "review",
  // ];

  React.useEffect(() => {
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
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue">
      <div className="container-fluid">
        {/* navbar  */}
        <div className="row items-center">
          <div className="col-auto">
            <LeftDrawerDMC />
          </div>
          {/* <div className="col-auto">
            <div className="poppins-semibold text-darkblue">France</div>
          </div> */}
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
          <div className="col-12">
            <div className="f-36 poppins-semibold text-darkblue pt-5">
              Itinerary
            </div>
          </div>

          {/*  STEPS BAR */}
          <div className="col-12">
            <div className="row">
              {/* STEP 1  */}
              <div className="col-auto">
                <div className="itinerary-step">
                  <div className="darkblue-ball"></div>
                  <div className="f-14 text-grey text-center">Step 1</div>
                  <div className="text-darkblue text-center">Trip Details</div>
                </div>
              </div>
              <div className="col">
                <div className="step-direction pt-3">
                  <div className="step-line active"></div>
                </div>
              </div>
              {/* STEP 2  */}
              <div className="col-auto">
                <div className="itinerary-step">
                  <div
                    className={
                      stepsDone.includes("accommodation")
                        ? "darkblue-ball"
                        : "grey-ball"
                    }
                  ></div>
                  <div className="f-14 text-grey text-center">Step 2</div>
                  <div className="text-darkblue text-center">Accommodation</div>
                </div>
              </div>
              <div className="col">
                <div className="step-direction pt-3">
                  <div
                    className={
                      (stepsDone.includes("accommodation") ? "active" : "") +
                      " step-line"
                    }
                  ></div>
                </div>
              </div>
              {/* STEP 3  */}
              <div className="col-auto">
                <div className="itinerary-step">
                  <div className="grey-ball"></div>
                  <div className="f-14 text-grey text-center">Step 3</div>
                  <div className="text-darkblue text-center">Activities</div>
                </div>
              </div>
              <div className="col">
                <div className="step-direction pt-3">
                  <div className="step-line"></div>
                </div>
              </div>
              {/* STEP 4  */}
              <div className="col-auto">
                <div className="itinerary-step">
                  <div className="grey-ball"></div>
                  <div className="f-14 text-grey text-center">Step 4</div>
                  <div className="text-darkblue text-center">Transport</div>
                </div>
              </div>
              <div className="col">
                <div className="step-direction pt-3">
                  <div className="step-line"></div>
                </div>
              </div>
              {/* STEP 5  */}
              <div className="col-auto">
                <div className="itinerary-step">
                  <div className="grey-ball"></div>
                  <div className="f-14 text-grey text-center">Step 5</div>
                  <div className="text-darkblue text-center">
                    Pricing & Payment
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="step-direction pt-3">
                  <div className="step-line"></div>
                </div>
              </div>
              {/* STEP 6  */}
              <div className="col-auto">
                <div className="itinerary-step">
                  <div className="grey-ball"></div>
                  <div className="f-14 text-grey text-center">Step 6</div>
                  <div className="text-darkblue text-center">Review</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="flex">
              <div className="flex items-center py-5 back-button">
                <Image src={backIcon} alt="back" />
                <div className="pl-2 text-darkblue">Back</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {currentStep === "trip-details" && (
            <>
              <TripDetails
                setCurrentStep={setCurrentStep}
                stepsDone={stepsDone}
                setStepsDone={setStepsDone}
              />
            </>
          )}

          {currentStep === "accommodation" && (
            <>
              <Accommodation
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
