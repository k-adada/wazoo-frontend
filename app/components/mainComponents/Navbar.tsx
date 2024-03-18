"use client";
import React, { useState } from "react";
import Link from "next/link";
import LeftDrawerDMC from "../LeftDrawerDMC";
import Image from "next/image";
import { useRouter } from "next/router";

import notificationIcon from "../../assets/Icon_Notification_Received.png";
import avatarIcon from "../../assets/avatar.png";

export default function Navbar() {
  // const router = useRouter();
  const hideOnRoutes = ["/registration", "/themes", "/destinations"];
  return (
    <div className="absolute w-full top-2">
      {/* {hideOnRoutes.includes(router.pathname) ? (
        <></>
      ) : ( */}
        <div className="container-fluid" style={{ maxWidth: "95%" }}>
          {/* navbar  */}
          <div className="row items-center">
            <div className="col-auto">
              <LeftDrawerDMC />
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
        </div>
      {/* )} */}
    </div>
  );
}
