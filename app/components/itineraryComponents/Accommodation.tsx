"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SingleSelect from "../SingleSelect";

import saveIcon from "../../assets/Icon_Save.png";

export default function Accommodation(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <div className="row">
            {/* Itinerary name  */}
            <div className="col-6">
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
            <div className="col-6">
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

            {/* Meal basis  */}
            <div className="col-6">
              <div className="text-darkblue pb-2 pt-8">
                Basis <span className="text-orange">*</span>
              </div>
              <div className="light-input">
                <div className="remove-mui-label">
                  <SingleSelect
                    options={[
                      { label: "Meal Basis" },
                      { label: "Breakfast" },
                      { label: "Dinner" },
                    ]}
                    label="Meal Basis"
                  />
                </div>
              </div>
            </div>
            {/* room config  */}
            <div className="col-12">
              <div className="text-darkblue pb-2 pt-8">
                Room Configuration<span className="text-orange">*</span>
              </div>
              <div className="remove-mui-label">
                <SingleSelect
                  options={[
                    { label: "Single" },
                    { label: "Double" },
                    { label: "Queen" },
                  ]}
                  label="Room Configuration"
                />
              </div>
            </div>
            {/* Extra Bed  */}
            <div className="col-12">
              <div className="text-darkblue pb-2 pt-8">
                Extra Bed<span className="text-orange">*</span>
              </div>
              <div className="remove-mui-label">
                <SingleSelect
                  options={[{ label: "Yes" }, { label: "No" }]}
                  label="extra bed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* upload images  */}
        <div className="col-4">
          <div className="row bg-white rounded-lg">
            <div className="col-12">wqewqe</div>
          </div>
        </div>

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
              setCurrentStep("activities");
              setStepsDone([...stepsDone, "activities"]);
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
