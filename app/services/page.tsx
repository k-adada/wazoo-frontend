"use client";
import React, { useEffect, useState } from "react";
import "./dist/services.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";

import addIcon from "../assets/Icon_Add.png";
import backIcon from "../assets/Icon_Back.png";
import serviceEmptyIcon from "../assets/services_empty.png";
import Link from "next/link";

export default function CreateServices() {
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

        <div className="row h-full items-center justify-center">
          <div className="col-12">
            <div className="text-center">
              <Image
                className="m-auto"
                src={serviceEmptyIcon}
                alt="serviceEmptyIcon"
              />
              <div className="f-48 text-darkblue poppins-medium">
                Your List is Empty
              </div>
              <div className="f-24 text-grey">Start adding your services</div>
            </div>
          </div>

          <div className="col-auto pt-[64px]">
            <Link href="/create-services">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={addIcon} alt="add icon" />
                  <div className="pl-4">Add Service</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
