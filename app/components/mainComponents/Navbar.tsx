"use client";
import React from "react";
import LeftDrawerDMC from "../LeftDrawerDMC";
import Image from "next/image";

import notificationIcon from "../../assets/Icon_Notification_Received.png";
import avatarIcon from "../../assets/avatar.png";
import { usePathname } from "next/navigation";
import LeftDrawerTA from "../LeftDrawerTA";

export default function Navbar() {
  const pathname = usePathname();

  const hideOnRoutes = ["/registration", "/themes", "/destinations"];
  const taOnRoutes = ["/explore", "/request-trip","/explore-trip-request"];
  return (
    <div className="absolute w-full top-2">
      {hideOnRoutes.includes(pathname) ? (
        <></>
      ) : (
        <div className="container-fluid" style={{ maxWidth: "95%" }}>
          {taOnRoutes.includes(pathname) ? (
            <>
              {/* DMC navbar  */}
              <div className="row items-center">
                <div className="col-auto">
                  <LeftDrawerTA />
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
            </>
          ) : (
            <>
              {/* DMC navbar  */}
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
            </>
          )}
        </div>
      )}
    </div>
  );
}
