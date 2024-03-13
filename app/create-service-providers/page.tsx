"use client";
import React from "react";
import "./dist/createServiceProviders.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";
import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import saveIcon from "../assets/Icon_Save.png";
import backIcon from "../assets/Icon_Back.png";
import Link from "next/link";

export default function CreateServiceProviders() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };

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
            <div
              className="flex items-center py-5 back-button"
              onClick={routerBack}
            >
              <Image src={backIcon} alt="back" />
              <div className="pl-2 text-darkblue">Back</div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">
              Service Providers
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="row pt-8">
              {/* service name  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 f-20">
                  Service Provider Name <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <input
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    type="text"
                    placeholder="Service Provider Name"
                  />
                </div>
              </div>

              {/* service provider phone number  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 f-20">Phone Number</div>
                <div className="light-input">
                  <input
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="col-12">
                <div className="text-darkblue pt-4 pb-2 f-20">
                  Description <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <textarea
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    placeholder="Write Description Here..."
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto pt-[64px]">
            <Link href="/service-providers">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={saveIcon} alt="saveIcon" />
                  <div className="pl-4">Create Service Provider</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
