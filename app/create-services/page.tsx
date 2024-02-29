"use client";
import React, { useEffect, useState } from "react";
import "./dist/createServices.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import addIcon from "../assets/Icon_Add.png";
import backIcon from "../assets/Icon_Back.png";
import SingleSelect from "../components/SingleSelect";

export default function DmcDashboard() {
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
          <div className="col-12">
            <div className="f-36 poppins-semibold text-darkblue pt-5">
              Services
            </div>
          </div>
          <div className="col-12">
            <div className="flex">
              <div className="flex items-center py-4 back-button">
                <Image src={backIcon} alt="back" />
                <div className="pl-2 text-darkblue">Back</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <div className="text-darkblue pb-1">
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
              <div className="col-6">
                <div className="text-darkblue pb-1">
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
              <div className="col-12">
                <div className="text-darkblue pb-1 pt-3">
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
            </div>
          </div>
          <div className="col-4">IMAGES HERE</div>
        </div>
      </div>
    </main>
  );
}
