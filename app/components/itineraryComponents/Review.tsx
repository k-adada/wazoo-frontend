"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import DragTableServices from "../DragTableServices";
import Totals from "../pricingComponents/Totals";
import Payables from "../pricingComponents/Payables";
import MyPricing from "../pricingComponents/MyPricing";
import PricingDetails from "../pricingComponents/PricingDetails";
import SingleSelect from "../SingleSelect";
import BasicDateRangePicker from "../DateRangePicker";

import saveIcon from "../../assets/Icon_Save.png";
import eyeIcon from "../../assets/Icon_Preview_gold.png";
import downArrowIcon from "../../assets/Icon_Arrow_Down_white.png";
import tourImage from "../../assets/tour_effel.jpg";
import Link from "next/link";

export default function Review(props: {
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
      "review",
    ]);
  }, [setStepsDone]);

  const [showItineraryOverview, setShowItineraryOverview] = useState(true);
  const [showDetailedItinerary, setShowDetailedItinerary] = useState(true);
  const [showPricingAndPayment, setShowPricingAndPayment] = useState(true);
  const [showTotals, setShowTotals] = useState(true);
  const [showPayables, setShowPayables] = useState(true);
  const [showMyPricing, setShowMyPricing] = useState(true);
  const [showPricingDetails, setShowPricingDetails] = useState(true);

  const [days, setDays] = useState([
    {
      id: 1,
      notesCollapsed: false,
      collapsed: false,
      services: [
        {
          id: "1",
          serviceType: "Service 1",
          description: "Service 1 Description",
          location: "Location 1",
          method: "Method 1",
          duration: "Duration 1",
          timeslot: "Timeslot 1",
          price: "350",
        },
        {
          id: "2",
          serviceType: "Service 2",
          description: "Service 2 Description",
          location: "Location 2",
          method: "Method 2",
          duration: "Duration 2",
          timeslot: "Timeslot 2",
          price: "350",
        },
      ] as any[],
    },
    {
      id: 2,
      notesCollapsed: false,
      collapsed: true,
      services: [
        {
          id: "1",
          serviceType: "Service 1",
          description: "Service 1 Description",
          location: "Location 1",
          method: "Method 1",
          duration: "Duration 1",
          timeslot: "Timeslot 1",
          price: "350",
        },
        {
          id: "2",
          serviceType: "Service 2",
          description: "Service 2 Description",
          location: "Location 2",
          method: "Method 2",
          duration: "Duration 2",
          timeslot: "Timeslot 2",
          price: "350",
        },
      ] as any[],
    },
    {
      id: 3,
      notesCollapsed: false,
      collapsed: false,
      services: [
        {
          id: "1",
          serviceType: "Service 1",
          description: "Service 1 Description",
          location: "Location 1",
          method: "Method 1",
          duration: "Duration 1",
          timeslot: "Timeslot 1",
          price: "350",
        },
        {
          id: "2",
          serviceType: "Service 2",
          description: "Service 2 Description",
          location: "Location 2",
          method: "Method 2",
          duration: "Duration 2",
          timeslot: "Timeslot 2",
          price: "350",
        },
      ] as any[],
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
              onClick={() => {
                setShowItineraryOverview(!showItineraryOverview);
              }}
            >
              <Image src={downArrowIcon} alt="down arrow" className="pointer" />
            </div>
          </div>

          {showItineraryOverview && (
            <>
              {/* details  */}
              <div className="row">
                {/* Itinerary name  */}
                <div className="col-4">
                  <div className="text-darkblue pb-2 f-20">
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
                  <div className="text-darkblue pb-2 f-20">
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
                  <div className="text-darkblue f-20">
                    Validity Dates<span className="text-orange">*</span>
                  </div>
                  <div className="validity-dates">
                    <BasicDateRangePicker />
                  </div>
                </div>
                {/* theme  */}
                <div className="col-4">
                  <div className="text-darkblue pb-2 pt-8 f-20">
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
                  <div className="text-darkblue pb-2 pt-8 f-20">
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
                  <div className="text-darkblue pb-2 pt-8 f-20">
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

                {/* Number of Adults  */}
                <div className="col-3">
                  <div className="text-darkblue pb-2 pt-8 f-20">
                    Number of Adults <span className="text-orange">*</span>
                  </div>
                  <div className="light-input">
                    <input
                      className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                      type="text"
                      placeholder="2"
                    />
                  </div>
                </div>

                {/* Number of Children  */}
                <div className="col-3">
                  <div className="text-darkblue pb-2 pt-8 f-20">
                    Number of Children <span className="text-orange">*</span>
                  </div>
                  <div className="light-input">
                    <input
                      className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                      type="text"
                      placeholder="1"
                    />
                  </div>
                </div>

                {/* Images  */}
                <div className="col-6">
                  <div className="text-darkblue pb-2 pt-8 f-20">Images</div>
                  <div className="flex">
                    <div className="pr-1">
                      <Image
                        className="rounded-lg"
                        style={{
                          height: "56px",
                          width: "56px",
                          objectFit: "cover",
                        }}
                        src={tourImage}
                        alt="tourImage"
                      />
                    </div>
                    <div className="px-1">
                      <Image
                        className="rounded-lg"
                        style={{
                          height: "56px",
                          width: "56px",
                          objectFit: "cover",
                        }}
                        src={tourImage}
                        alt="tourImage"
                      />
                    </div>
                    <div className="px-1">
                      <Image
                        className="rounded-lg"
                        style={{
                          height: "56px",
                          width: "56px",
                          objectFit: "cover",
                        }}
                        src={tourImage}
                        alt="tourImage"
                      />
                    </div>
                    <div className="px-1">
                      <Image
                        className="rounded-lg"
                        style={{
                          height: "56px",
                          width: "56px",
                          objectFit: "cover",
                        }}
                        src={tourImage}
                        alt="tourImage"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="col-12">
                  <div className="text-darkblue pt-8 pb-2 f-20">
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
            </>
          )}
        </div>

        {/* DETAILED ITINERARY */}
        <div className="col-12 pt-5">
          <div className="bg-darkblue rounded-lg px-5 py-2 flex justify-between mb-5">
            <div className="f-24 text-ice poppins-semibold">
              Detailed Itinerary
            </div>
            <div
              className="flex items-center"
              onClick={() => {
                setShowDetailedItinerary(!showDetailedItinerary);
              }}
            >
              <Image src={downArrowIcon} alt="down arrow" className="pointer" />
            </div>
          </div>
          {showDetailedItinerary && (
            <>
              <div className="">
                {days.map((day, index) => {
                  return (
                    <div
                      className="row py-4 overflow-hidden"
                      key={index + day.id + day.id}
                    >
                      {/* Day BAR  */}
                      <div className="col-12">
                        <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
                          <div className="f-24 text-darkblue poppins-semibold">
                            May {index + 1}, 2024
                          </div>
                          <div
                            className="flex items-center"
                            onClick={() => {
                              let newDays = [...days];
                              newDays[index].collapsed =
                                !newDays[index].collapsed;
                              setDays(newDays);
                            }}
                          >
                            <Image
                              src={downArrowIcon}
                              alt="down arrow"
                              className="pointer"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Rich textbox and services bar  */}
                      <div
                        className={
                          days[index].collapsed ? "hidden " : "" + " col-12"
                        }
                      >
                        <div className="px-5 pt-3">
                          {/* RICH TEXTBOX BAR  */}
                          <div className="bg-white rounded-lg py-3 flex justify-between items-center  px-3">
                            <div className=" text-darkblue poppins-semibold">
                              Day Notes
                            </div>
                            <Image
                              src={downArrowIcon}
                              alt="down arrow"
                              className="pointer"
                              onClick={() => {
                                let newDays = [...days];
                                newDays[index].notesCollapsed =
                                  !newDays[index].notesCollapsed;
                                setDays(newDays);
                              }}
                            />
                          </div>
                        </div>

                        {/* DRAG TABLE SERVICES */}
                        <div className="px-5 pt-5">
                          <DragTableServices services={day.services} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* PRICING AND PAYMENT */}
        <div className="col-12 pt-5">
          <div className="bg-darkblue rounded-lg px-5 py-2 flex justify-between mb-5">
            <div className="f-24 text-ice poppins-semibold">
              Pricing & Payment
            </div>
            <div
              className="flex items-center"
              onClick={() => {
                setShowPricingAndPayment(!showPricingAndPayment);
              }}
            >
              <Image src={downArrowIcon} alt="down arrow" className="pointer" />
            </div>
          </div>
        </div>
        {showPricingAndPayment && (
          <>
            {/* TOTALS */}
            <div className="col-12">
              {/*  BAR  */}
              <div className="">
                <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
                  <div className="f-24 text-darkblue poppins-semibold">
                    Totals
                  </div>
                  <div
                    className="flex items-center"
                    onClick={() => {
                      setShowTotals(!showTotals);
                    }}
                  >
                    <Image
                      src={downArrowIcon}
                      alt="down arrow"
                      className="pointer"
                    />
                  </div>
                </div>
              </div>
              {showTotals && <Totals title={false} />}
            </div>
            {/* PAYABLES */}
            <div className="col-12 pt-5">
              {/*  BAR  */}
              <div className="">
                <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
                  <div className="f-24 text-darkblue poppins-semibold">
                    Payables
                  </div>
                  <div
                    className="flex items-center"
                    onClick={() => {
                      setShowPayables(!showPayables);
                    }}
                  >
                    <Image
                      src={downArrowIcon}
                      alt="down arrow"
                      className="pointer"
                    />
                  </div>
                </div>
              </div>
              {showPayables && <Payables title={false} />}
            </div>
            {/* MY PRICING */}
            <div className="col-12 pt-5">
              {/*  BAR  */}
              <div className="">
                <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
                  <div className="f-24 text-darkblue poppins-semibold">
                    My Pricing & Payment Terms
                  </div>
                  <div
                    className="flex items-center"
                    onClick={() => {
                      setShowMyPricing(!showMyPricing);
                    }}
                  >
                    <Image
                      src={downArrowIcon}
                      alt="down arrow"
                      className="pointer"
                    />
                  </div>
                </div>
              </div>
              {showMyPricing && <MyPricing title={false} />}
            </div>
            {/* PRICING DETAILS */}
            <div className="col-12 pt-5">
              {/*  BAR  */}
              <div className="">
                <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
                  <div className="f-24 text-darkblue poppins-semibold">
                    Pricing Details
                  </div>
                  <div
                    className="flex items-center"
                    onClick={() => {
                      setShowPricingDetails(!showPricingDetails);
                    }}
                  >
                    <Image
                      src={downArrowIcon}
                      alt="down arrow"
                      className="pointer"
                    />
                  </div>
                </div>
              </div>
              {showPricingDetails && <PricingDetails title={false} />}
            </div>
          </>
        )}

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
        {/* Preview */}
        <div className="col-auto pt-[64px]">
          <div
            className="dark-button text-gold poppins-medium cursor-pointer"
            onClick={() => {
              setCurrentStep("preview");
              setStepsDone([...stepsDone, "preview"]);
            }}
          >
            <div className="flex items-center h-full">
              <Image src={eyeIcon} alt="preview gold" />
              <div className="pl-4">Preview</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
