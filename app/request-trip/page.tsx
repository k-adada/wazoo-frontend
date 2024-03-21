"use client";
import React, { useState } from "react";
import "./dist/requestTrip.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import saveIcon from "../assets/Icon_Save.png";
import backIcon from "../assets/Icon_Back.png";
import Link from "next/link";
import MultipleSelectLight from "../components/MultipleSelectLight";
import AgenciesTable from "../components/community/AgenciesTable";

export default function RequestTrip() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("trip-info");

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

        <div className="row pt-5">
          {/*  STEPS LEFT BAR START */}
          <div className="col-auto" style={{ maxHeight: "80vh" }}>
            <div className="flex flex-col bg-blue rounded-full h-full w-[10px] items-center justify-between">
              <div className="">
                <div className="bg-darkblue rounded-full h-[96px] w-[10px]"></div>
              </div>
              <div className="">
                <div className="bg-darkblue rounded-full h-[96px] w-[10px]"></div>
              </div>
              <div className="">
                <div className="bg-darkblue rounded-full h-[96px] w-[10px]"></div>
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
                <div className="py-4 px-4 bg-blue rounded-lg">
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
                <div className="py-4 px-4 bg-blue rounded-lg">
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
                <div className="py-4 px-4 bg-blue rounded-lg">
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
              <div className="row px-5 py-5 rounded-lg bg-blue">
                {/*  Trip Name */}
                <div className="col-6">
                  <div className="text-darkblue pb-2 f-16">
                    Trip Name <span className="text-orange">*</span>
                  </div>
                  <div className="f-14 text-darkblue">
                    Give your trip a name
                  </div>
                  <div className="light-input">
                    <input
                      className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                      type="text"
                      placeholder="Type Here..."
                    />
                  </div>
                </div>
                {/* Client Name  */}
                <div className="col-6">
                  <div className="text-darkblue pb-2 f-16">
                    Client Name <span className="text-orange">*</span>
                  </div>
                  <div className="f-14 text-darkblue">Lead Traveler Name</div>
                  <div className="light-input">
                    <input
                      className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                      type="text"
                      placeholder="Type Here..."
                    />
                  </div>
                </div>
                {/* Number of Adults  */}
                <div className="col-6 py-6">
                  <div className="text-darkblue pb-2 f-16">
                    Number of Adults <span className="text-orange">*</span>
                  </div>
                  <div className="f-14 text-darkblue">
                    Please add the number of adults
                  </div>
                  <div className="light-input">
                    <input
                      className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                      type="number"
                      placeholder="input number"
                    />
                  </div>
                </div>
                {/* Number of Children  */}
                <div className="col-6 py-6">
                  <div className="text-darkblue pb-2 f-16">
                    Number of Children <span className="text-orange">*</span>
                  </div>
                  <div className="f-14 text-darkblue">
                    Please add the number of Children
                  </div>
                  <div className="light-input">
                    <input
                      className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                      type="number"
                      placeholder="input number"
                    />
                  </div>
                </div>
                {/* Trip Dates  */}
                <div className="col-6 py-6">
                  <div className="text-darkblue pb-2 f-16">
                    Trip Dates <span className="text-orange">*</span>
                  </div>
                  <div className="f-14 text-darkblue">
                    (i.e May 4-9, 2023 or First week or May)
                  </div>
                  <div className="light-input">
                    <input
                      className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                      type="date"
                      placeholder="input date"
                    />
                  </div>
                </div>
                {/* How flexible are the dates? */}
                <div className="col-6 py-6">
                  <div className="text-darkblue pb-2 f-16">
                    How flexible are the dates?{" "}
                    <span className="text-orange">*</span>
                  </div>
                  <div className="f-14 text-darkblue">
                    Please select flexible dates
                  </div>
                  <div className="light-input">
                    <MultipleSelectLight
                      options={[ 
                        { id: "Felxible", name: "Felxible" },
                        { id: "Very", name: "Very" },
                        {
                          id: "Age is just a number",
                          name: "Age is just a number",
                        },
                        { id: "Note Flexible", name: "Note Flexible" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>
                {/* Budget Approach */}
                <div className="col-6 py-6">
                  <div className="text-darkblue pb-2 f-16">
                    Budget Approach
                    <span className="text-orange">*</span>
                  </div>
                  <div className="f-14 text-darkblue">
                    Please select one or more Approach
                  </div>
                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Felxible", name: "Felxible" },
                        { id: "Very", name: "Very" },
                        { id: "Not Flexible", name: "Not Flexible" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>
                {/*  Trip Budget */}
                <div className="col-6 py-6">
                  <div className="text-darkblue pb-2 f-16">
                    Trip Budget
                    <span className="text-orange">*</span>
                  </div>
                  <div className="f-14 text-darkblue">Please select Budget</div>
                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "$5000-$10000", name: "$5000-$10000" },
                        { id: "$10000-$15000", name: "$10000-$15000" },
                        { id: "$15000-$20000", name: "$15000-$20000" },
                        { id: "$20000-$25000", name: "$20000-$25000" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/*  Guide Gratuity */}
                <div className="col-12 py-6">
                  <div className="text-darkblue pb-2 f-16">
                    Would you like us to include a guide gratuity in this quote?
                    <span className="text-orange">*</span>
                  </div>
                  <div className="f-14 text-darkblue">
                    Please note: if you choose NO we will include a suggested
                    guide gratuity in your confirmation documents with the
                    expectation that you will pay guide gratuity locally in the
                    local currency.
                  </div>
                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Yes", name: "Yes" },
                        { id: "No", name: "No" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CLIENT PREFFERENCES SECTION  */}
          {currentStep === "client-preferences" && (
            <div className="col">
              <div className="row px-5 py-5 rounded-lg bg-blue">
                {/*Please describe how the clients most like to experience a destination*  */}
                <div className="col-6 pb-6">
                  <div className="text-darkblue f-16 pb-4">
                    Describe how the clients like to experience a destination
                    <span className="text-orange">*</span>
                  </div>

                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Adventure", name: "adventure" },
                        { id: "Cultural", name: "cultural" },
                        { id: "Religious", name: "religious" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/*How does the group travel together */}
                <div className="col-6 pb-6">
                  <div className="text-darkblue f-16 pb-4">
                    How does the group travel together
                    <span className="text-orange">*</span>
                  </div>

                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Adventure", name: "adventure" },
                        { id: "Cultural", name: "cultural" },
                        { id: "Religious", name: "religious" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/*Please describe any travel restrictions of anyone in group */}
                <div className="col-6 py-6">
                  <div className="text-darkblue f-16 pb-4">
                    Please describe any travel restrictions of anyone in the group
                  </div>

                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Adventure", name: "adventure" },
                        { id: "Cultural", name: "cultural" },
                        { id: "Religious", name: "religious" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/*What is the preferred transportation style of the group* */}
                <div className="col-6 py-6">
                  <div className="text-darkblue f-16 pb-4">
                    What is the preferred transportation style of the group
                    <span className="text-orange">*</span>
                  </div>

                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Adventure", name: "adventure" },
                        { id: "Cultural", name: "cultural" },
                        { id: "Religious", name: "religious" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/*How many hotels do they prefer to stay in during the trip? */}
                <div className="col-6 py-6">
                  <div className="text-darkblue f-16 pb-4">
                    How many hotels do they prefer to stay in during the trip?
                  </div>

                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Adventure", name: "adventure" },
                        { id: "Cultural", name: "cultural" },
                        { id: "Religious", name: "religious" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/*Please describe the preferred hotel style?* */}
                <div className="col-6 py-6">
                  <div className="text-darkblue f-16 pb-4">
                    Please describe the preferred hotel style?
                    <span className="text-orange">*</span>
                  </div>

                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Adventure", name: "adventure" },
                        { id: "Cultural", name: "cultural" },
                        { id: "Religious", name: "religious" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/*Please describe the preferred bedding configuration */}
                <div className="col-6 py-6">
                  <div className="text-darkblue f-16 pb-4">
                    Please describe the preferred bedding configuration
                  </div>

                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Adventure", name: "adventure" },
                        { id: "Cultural", name: "cultural" },
                        { id: "Religious", name: "religious" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/*What is the preferred decor style of accommodation?* */}
                <div className="col-6 py-6">
                  <div className="text-darkblue f-16 pb-4">
                    What is the preferred decor style of accommodation?
                    <span className="text-orange">*</span>
                  </div>

                  <div className="light-input">
                    <MultipleSelectLight
                      options={[
                        { id: "Adventure", name: "adventure" },
                        { id: "Cultural", name: "cultural" },
                        { id: "Religious", name: "religious" },
                      ]}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/* Additional info */}
                <div className="col-12">
                  <div className="text-darkblue pt-4 pb-2 f-16">
                    Please include any additional iformation you would like us
                    to know
                  </div>
                  <div className="light-input">
                    <textarea
                      className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                      placeholder="Type Information Here..."
                      style={{ height: "200px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
