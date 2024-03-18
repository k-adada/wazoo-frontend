"use client";
import React, { useEffect, useState } from "react";
import "./dist/dmcDashboard.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import addIcon from "../assets/Icon_Add.png";
import Link from "next/link";

export default function DmcDashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="f-36 poppins-semibold text-darkblue py-5">
              Dashboard
            </div>
          </div>

          <div className="col-auto">
            <Link href="/create-services">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={addIcon} alt="add" />
                  <div className="pl-4">Create Services</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-auto">
            <Link href="/create-itineraries">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={addIcon} alt="add" />
                  <div className="pl-4">Create Sample Itinerary</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-auto">
            <Link href="/create-catalogues">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={addIcon} alt="add" />
                  <div className="pl-4">Create Catalog</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
