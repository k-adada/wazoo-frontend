"use client";
import React, { useState } from "react";
import "./dist/createAudience.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import saveIcon from "../assets/Icon_Save.png";
import backIcon from "../assets/Icon_Back.png";
import Link from "next/link";
import MultipleSelectLight from "../components/MultipleSelectLight";
import AgenciesTable from "../components/community/AgenciesTable";

export default function CreateAudience() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("audience-details");
  const [stepsDone, setStepsDone] = useState(["audience-details"]);

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
              <Image src={backIcon} alt="back" />
              <div className="pl-2 text-darkblue">Back</div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">Audience</div>
          </div>

          {/*  STEPS BAR */}
          <div className="col-12 pt-6">
            <div className="row" style={{ maxWidth: "600px", margin: "auto" }}>
              {/* STEP 1  */}
              <div
                className="col-auto pointer"
                onClick={() => {
                  setCurrentStep("audience-details");
                }}
              >
                <div className="itinerary-step">
                  <div className="darkblue-ball"></div>
                  <div className="f-14 text-grey text-center">Step 1</div>
                  <div className="text-darkblue text-center">
                    Audience Details
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
                  setCurrentStep("select-agencies");
                  setStepsDone(["catalogue-details", "select-agencies"]);
                }}
              >
                <div className="itinerary-step">
                  <div
                    className={
                      stepsDone.includes("select-agencies")
                        ? "darkblue-ball"
                        : "grey-ball"
                    }
                  ></div>
                  <div className="f-14 text-grey text-center">Step 2</div>
                  <div className="text-darkblue text-center">
                    Select Travel Agencies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {currentStep === "audience-details" && (
            <>
              <div className="col-12">
                <div className="row pt-8">
                  <div className="col-12 pb-8">
                    <div className="rounded-lg bg-grey text-darkblue f-20 py-3 px-4">
                      Target specific Travel Agency segments with the
                      &apos;Audiences&apos; feature, publishing Catalogues for
                      unique preferences
                    </div>
                  </div>

                  {/* audience name  */}
                  <div className="col-4">
                    <div className="text-darkblue pb-2 f-20">
                      Audience Name <span className="text-orange">*</span>
                    </div>
                    <div className="f-14 text-darkblue">
                      Give your target audience a name
                    </div>
                    <div className="light-input">
                      <input
                        className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                        type="text"
                        placeholder="Audience Name"
                      />
                    </div>
                  </div>

                  {/* Theme  */}
                  <div className="col-4">
                    <div className="text-darkblue pb-2 f-20">
                      Theme <span className="text-orange">*</span>
                    </div>
                    <div className="f-14 text-darkblue">
                      Select the theme your target audience is interested in
                    </div>
                    <div className="light-input">
                      <MultipleSelectLight
                        options={[
                          { id: "Adventure", name: "adventure" },
                          { id: "Cultural", name: "cultural" },
                          { id: "Religious", name: "religious" },
                          { id: "Religious2", name: "religious2" },
                        ]}
                        placeholder="Select Theme"
                      />
                    </div>
                  </div>

                  {/* Destination Covered  */}
                  <div className="col-4">
                    <div className="text-darkblue pb-2 f-20">
                      Destination Covered <span className="text-orange">*</span>
                    </div>
                    <div className="f-14 text-darkblue">
                      Select the destinations your target audience covers
                    </div>
                    <div className="light-input">
                      <MultipleSelectLight
                        options={[
                          { id: "Adventure", name: "adventure" },
                          { id: "Cultural", name: "cultural" },
                          { id: "Religious", name: "religious" },
                          { id: "Religious2", name: "religious2" },
                        ]}
                        placeholder="Select Destination"
                      />
                    </div>
                  </div>

                  {/*Continent of Operation  */}
                  <div className="col-4 pt-4">
                    <div className="text-darkblue pb-2 f-20">
                      Continent of Operation{" "}
                      <span className="text-orange">*</span>
                    </div>
                    <div className="f-14 text-darkblue">
                      Select the continent in which your target audience
                      operates
                    </div>
                    <div className="light-input">
                      <MultipleSelectLight
                        options={[
                          { id: "Adventure", name: "adventure" },
                          { id: "Cultural", name: "cultural" },
                          { id: "Religious", name: "religious" },
                          { id: "Religious2", name: "religious2" },
                        ]}
                        placeholder="Select Continent"
                      />
                    </div>
                  </div>

                  {/*Country of Operation  */}
                  <div className="col-4 pt-4">
                    <div className="text-darkblue pb-2 f-20">
                      Country of Operation{" "}
                      <span className="text-orange">*</span>
                    </div>
                    <div className="f-14 text-darkblue">
                      Select the country in which your target audience operates
                    </div>
                    <div className="light-input">
                      <MultipleSelectLight
                        options={[
                          { id: "Adventure", name: "adventure" },
                          { id: "Cultural", name: "cultural" },
                          { id: "Religious", name: "religious" },
                          { id: "Religious2", name: "religious2" },
                        ]}
                        placeholder="Select Country"
                      />
                    </div>
                  </div>

                  {/*City of Operation  */}
                  <div className="col-4 pt-4">
                    <div className="text-darkblue pb-2 f-20">
                      City of Operation <span className="text-orange">*</span>
                    </div>
                    <div className="f-14 text-darkblue">
                      Select the city in which your target audience operates
                    </div>
                    <div className="light-input">
                      <MultipleSelectLight
                        options={[
                          { id: "Adventure", name: "adventure" },
                          { id: "Cultural", name: "cultural" },
                          { id: "Religious", name: "religious" },
                          { id: "Religious2", name: "religious2" },
                        ]}
                        placeholder="Select City"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-12">
                    <div className="text-darkblue pt-4 pb-2 f-20">
                      Description <span className="text-orange">*</span>
                    </div>
                    <div className="light-input">
                      <textarea
                        className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                        placeholder="Write Description Here..."
                        style={{ height: "200px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto pt-[64px]">
                <div
                  className="dark-button text-gold poppins-medium cursor-pointer"
                  onClick={() => {
                    setCurrentStep("select-agencies");
                    setStepsDone(["audience-details", "select-agencies"]);
                  }}
                >
                  <div className="flex items-center h-full">
                    {/* <Image src={saveIcon} alt="saveIcon" /> */}
                    <div className="">Generate Agencies</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === "select-agencies" && (
            <>
              <div className="col-12 pt-10">
                <AgenciesTable />
              </div>

              <div className="col-auto pt-[64px]">
                <Link href="/audiences">
                  <div className="dark-button text-gold poppins-medium cursor-pointer">
                    <div className="flex items-center h-full">
                      <Image src={saveIcon} alt="saveIcon" />
                      <div className="pl-4">Submit Audience</div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
