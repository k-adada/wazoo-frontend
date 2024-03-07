"use client";
import React, { useEffect, useState } from "react";
import "./dist/createServices.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";
import SingleSelect from "../components/SingleSelect";
import BasicDateRangePicker from "../components/DateRangePicker";
import CircularProgress from "@mui/material/CircularProgress";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import saveIcon from "../assets/Icon_Save.png";
import backIcon from "../assets/Icon_Back.png";
import uploadIcon from "../assets/upload_icon.png";
import themeIcon from "../assets/theme.png";
import dotsIcon from "../assets/dots_icon.png";
import AvailabilityTimes from "../components/AvailabilityTimes";
import Link from "next/link";

export default function CreateServices() {
  const [progress, setProgress] = React.useState(0);

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
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pb-[100px]">
      <div className="container-fluid">
        {/* navbar  */}
        <div className="row items-center">
          <div className="col-auto">
            <LeftDrawerDMC />
          </div>
          <div className="col-auto">
            <div className="poppins-semibold text-darkblue">France</div>
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
            <div className="flex items-center py-5 back-button">
              <Image src={backIcon} alt="back" />
              <div className="pl-2 text-darkblue">Back</div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">Service</div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="row">
              {/* service name  */}
              <div className="col-6">
                <div className="text-darkblue pb-2">
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
                <div className="text-darkblue pb-2">
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
                <div className="text-darkblue pb-2 pt-8">
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
                <div className="text-darkblue pb-2 pt-8">
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
                <div className="text-darkblue pb-2 pt-8">
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
                <div className="text-darkblue pt-8">
                  Validity Dates<span className="text-orange">*</span>
                </div>
                <div className="validity-dates">
                  <BasicDateRangePicker />
                </div>
              </div>
              {/* duration  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 pt-8">
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

              {/* AvailabilityTimes */}
              <div className="col-12">
                <AvailabilityTimes />
              </div>

              {/* select service provider  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 pt-8">
                  Select Service Provider <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <div className="remove-mui-label">
                    <SingleSelect
                      options={[
                        { label: "John Doe" },
                        { label: "James Smith" },
                        { label: "Ali Mansour" },
                      ]}
                      label="Select Category"
                    />
                  </div>
                </div>
              </div>

              {/* service provider phone number  */}
              <div className="col-6">
                <div className="text-darkblue pt-8 pb-2">
                  Service Provider Phone Number
                </div>
                <div className="light-input">
                  <input
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              {/* service provider Price  */}
              <div className="col-6">
                <div className="text-darkblue pt-8 pb-2">
                  Service Provider Price <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <input
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    type="number"
                    placeholder="Price"
                  />
                </div>
              </div>

              {/* My DEfault Selling Price  */}
              <div className="col-6">
                <div className="text-darkblue pt-8 pb-2">
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
                <div className="text-darkblue pt-8 pb-2">
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

              {/* Requires Voucher  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 pt-8">
                  Requires Voucher <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <div className="remove-mui-label">
                    <SingleSelect
                      options={[{ label: "Yes" }, { label: "No" }]}
                      label="Select"
                    />
                  </div>
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
                    <div className="f-20 text-darkblue pt-3">
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
                  <div className="f-20 text-darkblue">File name.png</div>
                  <div className="uploaded-tag flex justify-between items-center px-3 pr-6">
                    <CircularProgress
                      variant="determinate"
                      value={progress}
                      style={{ height: "24px", width: "24px" }}
                    />

                    <div className="text-white poppins-medium pl-2">
                      Uploaded
                    </div>
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
                  <div className="f-20 text-darkblue">File name.png</div>
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
                  <div className="f-20 text-darkblue">File name.png</div>
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
            <Link href="/services">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={saveIcon} alt="saveIcon" />
                  <div className="pl-4">Save Service</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
