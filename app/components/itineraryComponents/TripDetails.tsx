"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SingleSelect from "../SingleSelect";
import BasicDateRangePicker from "../DateRangePicker";
import CircularProgress from "@mui/material/CircularProgress";

import saveIcon from "../../assets/Icon_Save.png";
import uploadIcon from "../../assets/upload_icon.png";
import themeIcon from "../../assets/theme.png";
import dotsIcon from "../../assets/dots_icon.png";
import Link from "next/link";

export default function TripDetails(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;
  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    setStepsDone(["tripDetails"]);
  }, [setStepsDone]);

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
                Reference Number <span className="text-orange">*</span>
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
            <div className="col-6">
              <div className="text-darkblue pt-8">
                Validity Dates<span className="text-orange">*</span>
              </div>
              <div className="validity-dates">
                <BasicDateRangePicker />
              </div>
            </div>
            {/* theme  */}
            <div className="col-6">
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
            <div className="col-6">
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
            <div className="col-6">
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

            {/* Number of Adults  */}
            <div className="col-6">
              <div className="text-darkblue pb-2 pt-8">
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
            <div className="col-6">
              <div className="text-darkblue pb-2 pt-8">
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

        {/* upload images  */}
        <div className="col-4">
          <div className="row">
            {/* upload images  */}
            <div className="col-12">
              <div className="upload-container flex justify-center items-center h-full">
                <div className="text-center">
                  <div className="flex justify-center">
                    <Image src={uploadIcon} alt="upload" />
                  </div>
                  <div className="f-16 text-darkblue pt-3">
                    Drag & drop files here
                  </div>
                  <div className="text-darkblue">or upload from desktop</div>
                </div>
              </div>
            </div>
            <div className="col-12 pt-6">
              <div className="flex justify-between items-center">
                <Image
                  src={themeIcon}
                  alt="theme"
                  width={105}
                  height={80}
                  className="rounded-lg"
                />
                <div className="f-16 text-darkblue">File name.png</div>
                <div className="uploaded-tag flex justify-between items-center px-3 pr-6">
                  <CircularProgress
                    variant="determinate"
                    value={progress}
                    style={{ height: "24px", width: "24px" }}
                  />

                  <div className="text-white poppins-medium pl-2">Uploaded</div>
                </div>
                <Image src={dotsIcon} alt="dots" className="cursor-pointer" />
              </div>
            </div>
            <div className="col-12 pt-6">
              <div className="flex justify-between items-center">
                <Image
                  src={themeIcon}
                  alt="theme"
                  width={105}
                  height={80}
                  className="rounded-lg"
                />
                <div className="f-16 text-darkblue">File name.png</div>
                <div className="progress-tag flex justify-between items-center px-3">
                  <CircularProgress
                    variant="determinate"
                    value={70}
                    style={{ height: "24px", width: "24px" }}
                  />
                  <div className="pl-6"> 70%</div>
                </div>
                <Image src={dotsIcon} alt="dots" className="cursor-pointer" />
              </div>
            </div>
            <div className="col-12 pt-6">
              <div className="flex justify-between items-center">
                <Image
                  src={themeIcon}
                  alt="theme"
                  width={105}
                  height={80}
                  className="rounded-lg"
                />
                <div className="f-16 text-darkblue">File name.png</div>
                <div className="progress-tag flex justify-between items-center px-3">
                  <CircularProgress
                    variant="determinate"
                    value={40}
                    style={{ height: "24px", width: "24px" }}
                  />
                  <div className="pl-6"> 40%</div>
                </div>
                <Image src={dotsIcon} alt="dots" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

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

        <div className="col-auto pt-[64px]">
          <div
            className="dark-button text-gold poppins-medium cursor-pointer"
            onClick={() => {
              setCurrentStep("accommodation");
              setStepsDone([...stepsDone, "accommodation"]);
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
