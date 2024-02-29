"use client";
import React, { useEffect, useState } from "react";
import "./dist/dmcDashboard.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import addIcon from "../assets/Icon_Add.png";

export default function DmcDashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pb-[100px]">
      <div className="container-fluid">
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
            <div className="f-36 poppins-semibold text-darkblue py-5">
              Dashboard
            </div>
          </div>

          <div className="col-auto">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={addIcon} alt="add" />
                <div className="pl-4">Create Services</div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={addIcon} alt="add" />
                <div className="pl-4">Create Sample Itinerary</div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={addIcon} alt="add" />
                <div className="pl-4">Create Catalog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
