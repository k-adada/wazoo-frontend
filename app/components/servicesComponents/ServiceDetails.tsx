"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SingleSelect from "../../components/SingleSelect";
import BasicDateRangePicker from "../../components/DateRangePicker";
import CircularProgress from "@mui/material/CircularProgress";

import uploadIcon from "../../assets/upload_icon.png";
import themeIcon from "../../assets/theme.png";
import dotsIcon from "../../assets/dots_icon.png";

export default function ServiceDetails() {
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

  return (
    <div className="row pt-8">
      <div className="col-8">
        <div className="row">
          {/* service name  */}
          <div className="col-6">
            <div className="text-darkblue pb-2 f-20">
              Service Name <span className="text-orange">*</span>
            </div>
            <div className="light-input">
              <input
                className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                type="text"
                placeholder="Service Name"
              />
            </div>
          </div>
          {/* location  */}
          <div className="col-6">
            <div className="text-darkblue pb-2 f-20">
              Location <span className="text-orange">*</span>
            </div>
            <div className="light-input">
              <input
                className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                type="text"
                placeholder="Select on Map"
              />
            </div>
          </div>
          {/* select category  */}
          <div className="col-12">
            <div className="text-darkblue pb-2 pt-8 f-20">
              Select Category<span className="text-orange">*</span>
            </div>
            <div className="remove-mui-label">
              <SingleSelect
                options={[
                  { label: "Transport" },
                  { label: "Accomodation" },
                  { label: "Activity" },
                ]}
                label="Select Category"
              />
            </div>
          </div>
          {/* type  */}
          <div className="col-6">
            <div className="text-darkblue pb-2 pt-8 f-20">
              Select Type <span className="text-orange">*</span>
            </div>
            <div className="light-input">
              <div className="remove-mui-label">
                <SingleSelect
                  options={[
                    { label: "type 1" },
                    { label: "Accomodation" },
                    { label: "Activity" },
                  ]}
                  label="Select Category"
                />
              </div>
            </div>
          </div>
          {/* subtype  */}
          <div className="col-6">
            <div className="text-darkblue pb-2 pt-8 f-20">
              Select Subtype <span className="text-orange">*</span>
            </div>
            <div className="light-input">
              <div className="remove-mui-label">
                <SingleSelect
                  options={[
                    { label: "transfer" },
                    { label: "Accomodation" },
                    { label: "Activity" },
                  ]}
                  label="Select Category"
                />
              </div>
            </div>
          </div>
          {/* validity dates */}
          <div className="col-6">
            <div className="text-darkblue pt-8 f-20">
              Validity Dates<span className="text-orange">*</span>
            </div>
            <div className="validity-dates">
              <BasicDateRangePicker />
            </div>
          </div>
          {/* duration  */}
          <div className="col-6">
            <div className="text-darkblue pb-2 pt-8 f-20">
              Duration <span className="text-orange">*</span>
            </div>
            <div className="light-input">
              <input
                className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                type="number"
                placeholder="Hours"
              />
            </div>
          </div>

          {/* My Default Selling Price  */}
          <div className="col-12">
            <div className="text-darkblue pt-8 pb-2 f-20">
              My Default Selling Price{" "}
              <span className="f-14">(indicative)</span>
              <span className="text-orange">*</span>
            </div>
            <div className="light-input">
              <input
                className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                type="number"
                placeholder="Price"
              />
            </div>
          </div>

          {/* Minimum age  */}
          <div className="col-6">
            <div className="text-darkblue pt-8 pb-2 f-20">
              Minimum Age
              {/* <span className="text-orange">*</span> */}
            </div>
            <div className="light-input">
              <input
                className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                type="number"
                placeholder="Age"
              />
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
                placeholder="Description"
                style={{ height: "200px" }}
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
                <div className="f-20 text-darkblue pt-3">
                  Drag & drop files here
                </div>
                <div className="text-darkblue">or upload from desktop</div>
              </div>
            </div>
          </div>
          <div className="col-12 pt-6 pb-1">
            <div className="flex justify-between items-center">
              <Image
                src={themeIcon}
                alt="theme"
                width={105}
                height={80}
                className="rounded-lg"
              />
              <div className="f-20 text-darkblue line-clamp-1">
                File name.png
              </div>
              <div className="uploaded-tag flex justify-between items-center px-3 pr-6">
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  style={{ height: "24px", width: "24px" }}
                />

                <div className="text-white poppins-medium pl-2">100%</div>
              </div>
              <Image src={dotsIcon} alt="dots" className="cursor-pointer" />
            </div>
          </div>
          <div className="col-12 py-1">
            <div className="flex justify-between items-center">
              <Image
                src={themeIcon}
                alt="theme"
                width={105}
                height={80}
                className="rounded-lg"
              />
              <div className="f-20 text-darkblue line-clamp-1">
                File name.png
              </div>
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
          <div className="col-12 py-1">
            <div className="flex justify-between items-center">
              <Image
                src={themeIcon}
                alt="theme"
                width={105}
                height={80}
                className="rounded-lg"
              />
              <div className="f-20 text-darkblue line-clamp-1">
                File name.png
              </div>
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
    </div>
  );
}
