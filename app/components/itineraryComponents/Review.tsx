"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import DragTableServices from "../DragTableServices";
import Totals from "../pricingComponents/Totals";
import Payables from "../pricingComponents/Payables";
import MyPricing from "../pricingComponents/MyPricing";
import PricingDetails from "../pricingComponents/PricingDetails";

import saveIcon from "../../assets/Icon_Save.png";
import downArrowIcon from "../../assets/Icon_Arrow_Down_white.png";
import SingleSelect from "../SingleSelect";
import BasicDateRangePicker from "../DateRangePicker";

export default function Review(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;

  useEffect(() => {
    setStepsDone([...stepsDone, "transport"]);
  }, []);

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

  return (
    <div className="container-fluid transport">
      <div className="row">
        {/* ITINERARY OVERVIEW */}
        <div className="col-12">
          <div className="bg-darkblue rounded-lg px-5 py-2 flex justify-between mb-5">
            <div className="f-24 text-ice poppins-semibold">
              Itinerary Overview
            </div>
            <div
              className="flex items-center"
              // onClick={() => {
              //   let newDays = [...days];
              //   newDays[index].collapsed = !newDays[index].collapsed;
              //   setDays(newDays);
              // }}
            >
              <Image src={downArrowIcon} alt="down arrow" className="pointer" />
            </div>
          </div>

          <div className="row">
            {/* Itinerary name  */}
            <div className="col-4">
              <div className="text-darkblue pb-2">
                Itinerary Name <span className="text-orange">*</span>
              </div>
              <div className="light-input">
                <input
                  className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                  type="text"
                  placeholder="Itinerary Name"
                />
              </div>
            </div>
            {/* reference number  */}
            <div className="col-4">
              <div className="text-darkblue pb-2">
                Reference Numbver <span className="text-orange">*</span>
              </div>
              <div className="light-input">
                <input
                  className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                  type="text"
                  placeholder="422"
                  value={422}
                  disabled
                />
              </div>
            </div>
            {/* validity dates */}
            <div className="col-4">
              <div className="text-darkblue">
                Validity Dates<span className="text-orange">*</span>
              </div>
              <div className="validity-dates">
                <BasicDateRangePicker />
              </div>
            </div>
            {/* theme  */}
            <div className="col-4">
              <div className="text-darkblue pb-2 pt-8">
                Theme <span className="text-orange">*</span>
              </div>
              <div className="light-input">
                <div className="remove-mui-label">
                  <SingleSelect
                    options={[
                      { label: "Adventure" },
                      { label: "Family Travel" },
                      { label: "Honey Moon" },
                      { label: "Safari" },
                      { label: "Sports & Outdoors" },
                    ]}
                    label="Select Theme"
                  />
                </div>
              </div>
            </div>
            {/* select season  */}
            <div className="col-4">
              <div className="text-darkblue pb-2 pt-8">
                Seasonality<span className="text-orange">*</span>
              </div>
              <div className="remove-mui-label">
                <SingleSelect
                  options={[
                    { label: "Winter" },
                    { label: "Summer" },
                    { label: "Spring" },
                    { label: "Autumn" },
                  ]}
                  label="Select Season"
                />
              </div>
            </div>
            {/* Trip Length  */}
            <div className="col-4">
              <div className="text-darkblue pb-2 pt-8">
                Trip Lenth <span className="text-orange">*</span>
              </div>
              <div className="light-input">
                <input
                  className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                  type="number"
                  placeholder="Number of days"
                />
              </div>
            </div>

            {/* Description */}
            <div className="col-12">
              <div className="text-darkblue pt-8 pb-2">
                Description <span className="text-orange">*</span>
              </div>
              <div className="light-input">
                <textarea
                  className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                  placeholder="Service Name"
                />
              </div>
            </div>
          </div>
        </div>

        {/* DETAILED ITINERARY */}
        <div className="col-12 pt-5">
          <div className="bg-darkblue rounded-lg px-5 py-2 flex justify-between mb-5">
            <div className="f-24 text-ice poppins-semibold">
              Detailed Itinerary
            </div>
            <div
              className="flex items-center"
              // onClick={() => {
              //   let newDays = [...days];
              //   newDays[index].collapsed = !newDays[index].collapsed;
              //   setDays(newDays);
              // }}
            >
              <Image src={downArrowIcon} alt="down arrow" className="pointer" />
            </div>
          </div>

          {/* DRAG TABLE SERVICES */}
          <div className="f-32 text-darkblue poppins-semibold pb-4">
            Services
          </div>
          <DragTableServices services={pricings} />
        </div>

        {/* PRICING AND PAYMENT */}
        <div className="col-12 pt-5">
          <div className="bg-darkblue rounded-lg px-5 py-2 flex justify-between mb-5">
            <div className="f-24 text-ice poppins-semibold">
              Pricing & Payment
            </div>
            <div
              className="flex items-center"
              // onClick={() => {
              //   let newDays = [...days];
              //   newDays[index].collapsed = !newDays[index].collapsed;
              //   setDays(newDays);
              // }}
            >
              <Image src={downArrowIcon} alt="down arrow" className="pointer" />
            </div>
          </div>
        </div>
        {true ? (
          <>
            {/* TOTALS */}
            <div className="col-12">
              <Totals />
            </div>
            {/* PAYABLES */}
            <div className="col-12 pt-5">
              <Payables />
            </div>
            {/* MY PRICING */}
            <div className="col-12 pt-5">
              <MyPricing />
            </div>
            {/* PRICING DETAILS */}
            <div className="col-12 pt-5">
              <PricingDetails />
            </div>
          </>
        ) : (
          <></>
        )}

        {/* save as draft */}
        <div className="col-auto pt-[64px]">
          <div className="dark-button text-gold poppins-medium cursor-pointer">
            <div className="flex items-center h-full">
              <Image src={saveIcon} alt="saveIcon" />
              <div className="pl-4">Save as Draft</div>
            </div>
          </div>
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
