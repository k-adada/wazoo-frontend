"use client";
import React from "react";
import LeftDrawerDMC from "../LeftDrawerDMC";
import Image from "next/image";

import { usePathname } from "next/navigation";
import LeftDrawerTA from "../LeftDrawerTA";

import Icons from "@/app/Icons";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const hideOnRoutes = ["/registration", "/themes", "/destinations"];
  const taOnRoutes = [
    "/explore",
    "/request-trip",
    "/explore-trip-request",
    "/ta-dashboard",
  ];
  return (
    <>
      <div className="absolute w-full top-2">
        {hideOnRoutes.includes(pathname) ? (
          <></>
        ) : (
          <div className="container-fluid" style={{ maxWidth: "95%" }}>
            {taOnRoutes.includes(pathname) ? (
              <>
                {/* TA navbar  */}
                <div className="row items-center">
                  <div className="col-auto">
                    <LeftDrawerTA />
                  </div>

                  <div className="col"></div>
                  <div className="col-auto">
                    <div className="cursor-pointer">
                      <Image src={Icons.notificationIcon} alt="notification" />
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="flex items-center cursor-pointer">
                      <div className="user-icon">
                        <Image src={Icons.john} alt="johnIcon" />
                      </div>
                      <div className="poppins-medium text-darkblue pl-4">
                        John iver
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
                      <Image src={Icons.notificationIcon} alt="notification" />
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="flex items-center cursor-pointer">
                      <div className="user-icon">
                        <Image src={Icons.avatarIcon} alt="avatar" />
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

      {/* bottom bar */}
      <div className="w-full fixed bottom-10 text-center z-10">
        <div className="flex items-center justify-center">
          <div
            className="rounded-full overflow-hidden backdrop-blur-xl py-4 px-4 mx-1 pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <Image
              src={Icons.planeIconGold}
              alt="plane"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
          <div
            className="rounded-full overflow-hidden backdrop-blur-md py-4 px-4 mx-1 pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <Image
              src={Icons.doorIconGold}
              alt="door"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
          <Link href="/ta-dashboard">
            <div
              className="rounded-full overflow-hidden backdrop-blur-md py-4 px-4 mx-1 pointer"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              <div className="rounded-full overflow-hidden bg-gold py-4 px-4">
                <Image
                  src={Icons.homeIconDark}
                  alt="home"
                  style={{ height: "25px", width: "25px" }}
                />
              </div>
            </div>
          </Link>
          <div
            className="rounded-full overflow-hidden backdrop-blur-md py-4 px-4 mx-1 pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <Image
              src={Icons.bookmarkIconGold}
              alt="bookmark"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
          <Link href="/explore">
            <div
              className="rounded-full overflow-hidden backdrop-blur-md py-4 px-4 mx-1 pointer"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              <Image
                src={Icons.searchIconGold}
                alt="search"
                style={{ height: "25px", width: "25px" }}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
