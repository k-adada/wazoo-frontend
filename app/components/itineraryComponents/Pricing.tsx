"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import saveIcon from "../../assets/Icon_Save.png";
import addGoldIcon from "../../assets/Icon_Add.png";
import DragTableServices from "../DragTableServices";
import Totals from "../pricingComponents/Totals";
import Payables from "../pricingComponents/Payables";
import MyPricing from "../pricingComponents/MyPricing";
import PricingDetails from "../pricingComponents/PricingDetails";
import Link from "next/link";
import DragPricingTable from "./DragPricingTable";
import SelectSPTable from "../serviceProvidersComponents/SelectSPTable";
import SelectSingleSPTable from "../serviceProvidersComponents/SelectSingleSPTable";

export default function Pricing(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;

  useEffect(() => {
    setStepsDone([
      "tripDetails",
      "accommodation",
      "activities",
      "transport",
      "pricing",
    ]);
  }, [setStepsDone]);

  const [pricings, setPricings] = useState([
    {
      id: "1",
      serviceType: "Pricing 1",
      description: "Pricing 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
    },
    {
      id: "2",
      serviceType: "Pricing 2",
      description: "Pricing 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
    },
    {
      id: "3",
      serviceType: "Pricing 3",
      description: "Pricing 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
    },
    {
      id: "4",
      serviceType: "Pricing 4",
      description: "Pricing 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
    },
    {
      id: "5",
      serviceType: "Pricing 5",
      description: "Pricing 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
    },
    {
      id: "6",
      serviceType: "Pricing 6",
      description: "Pricing 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
    },
  ]);
  const [selectProviderPopup, setSelectProviderPopup] = useState("false");
  const [serviceProviders, setServiceProviders] = useState([
    {
      id: "1",
      name: "Service Provider 1",
      description: "Service Provider 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
    },
    {
      id: "2",
      name: "Service Provider 2",
      description: "Service Provider 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
    },
    {
      id: "3",
      name: "Service Provider 3",
      description: "Service Provider 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
    },
    {
      id: "4",
      name: "Service Provider 4",
      description: "Service Provider 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
    },
    {
      id: "5",
      name: "Service Provider 5",
      description: "Service Provider 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
    },
    {
      id: "6",
      name: "Service Provider 6",
      description: "Service Provider 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
    },
  ]);

  return (
    <div className="container-fluid transport">
      {/* SERVICE PROVIDERS POPUP  */}
      {selectProviderPopup != "false" && (
        <>
          <div className="overlay-dark"></div>
          <div className="popup-container bg-grey rounded-lg px-10 py-10">
            {selectProviderPopup == "select" && (
              <>
                <div className="f-36 poppins-semibold text-darkblue text-center pb-10">
                  Select a Provider for this service 1
                </div>
                <div className="flex justify-end pb-4">
                  <div className="light-input w-1/4">
                    <input
                      className="px-5 py-2 rounded-lg bg-white text-grey w-full"
                      type="text"
                      placeholder="Search Service Provider"
                    />
                  </div>
                  <div
                    className="dark-button flex text-gold items-center w-1/4 justify-center poppins-medium f-16 ml-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("create");
                    }}
                  >
                    <div className="">
                      <Image src={addGoldIcon} alt="add icon" />
                    </div>
                    <div className="pl-4">Add New Provider</div>
                  </div>
                </div>
                <div className="">
                  <SelectSingleSPTable
                    setSelectProviderPopup={setSelectProviderPopup}
                  />
                </div>

                <div className="flex justify-between pt-5">
                  <div
                    className="light-button flex text-darkblue items-center w-full justify-center poppins-medium f-16 mr-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("false");
                    }}
                  >
                    cancel
                  </div>
                  <div
                    className="dark-button flex text-gold items-center w-full justify-center poppins-medium f-16 ml-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("false");
                    }}
                  >
                    <div className="">
                      <Image src={addGoldIcon} alt="add icon" />
                    </div>
                    <div className="pl-4">Link Service Provider(s)</div>
                  </div>
                </div>
              </>
            )}

            {selectProviderPopup == "create" && (
              <>
                <div className="f-36 poppins-semibold text-darkblue text-center pb-10">
                  Create new Service Provider
                </div>

                <div className="row">
                  {/* name  */}
                  <div className="col-6">
                    <div className="text-darkblue pb-2 pt-5 f-20">
                      Duration <span className="text-orange">*</span>
                    </div>
                    <div className="light-input">
                      <input
                        className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                        type="text"
                        placeholder="Service Provider Name"
                      />
                    </div>
                  </div>
                  {/* number  */}
                  <div className="col-6">
                    <div className="text-darkblue pb-2 pt-5 f-20">
                      Phone Number
                    </div>
                    <div className="light-input">
                      <input
                        className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                        type="number"
                        placeholder="e.g: +1234567890"
                      />
                    </div>
                  </div>
                  {/* Description */}
                  <div className="col-12">
                    <div className="text-darkblue pt-5 pb-2 f-20">
                      Description <span className="text-orange">*</span>
                    </div>
                    <div className="light-input">
                      <textarea
                        className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                        placeholder="Description"
                        style={{ height: "200px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-10">
                  <div
                    className="light-button flex text-darkblue items-center w-full justify-center poppins-medium f-16 mr-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("select");
                    }}
                  >
                    cancel
                  </div>
                  <div
                    className="dark-button flex text-gold items-center w-full justify-center poppins-medium f-16 ml-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("select");
                    }}
                  >
                    <div className="">
                      <Image src={addGoldIcon} alt="add icon" />
                    </div>
                    <div className="pl-4">Create Service Provider</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}

      <div className="row">
        <div className="col-12">
          {/* DRAG TABLE SERVICES */}

          <div className="f-32 text-darkblue poppins-semibold pb-4">
            Services
          </div>

          <DragPricingTable
            services={pricings}
            setServices={setPricings}
            setSelectProviderPopup={setSelectProviderPopup}
          />
        </div>

        <div className="col-12 pt-5">
          <Totals />
        </div>

        <div className="col-12 pt-5">
          <Payables />
        </div>

        <div className="col-12 pt-5">
          <MyPricing />
        </div>

        <div className="col-12 pt-5">
          <PricingDetails />
        </div>

        {/* save as draft */}
        <div className="col-auto pt-[64px]">
          <Link href="/itineraries">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={saveIcon} alt="saveIcon" />
                <div className="pl-4">Save as Draft</div>
              </div>
            </div>
          </Link>
        </div>
        {/* NEXT */}
        <div className="col-auto pt-[64px]">
          <div
            className="dark-button text-gold poppins-medium cursor-pointer"
            onClick={() => {
              setCurrentStep("review");
              setStepsDone([...stepsDone, "review"]);
            }}
          >
            <div className="flex items-center h-full">
              <div className="">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
