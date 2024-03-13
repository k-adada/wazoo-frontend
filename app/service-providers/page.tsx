"use client";
import React, { useEffect, useState } from "react";
import "./dist/serviceProviders.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import addIcon from "../assets/Icon_Add.png";
import backIcon from "../assets/Icon_Back.png";

import searchIcon from "../assets/Icon_Search_Black.png";
import serviceProviderIcon from "../assets/service_providers_none.png";
import ServiceProvidersTable from "../components/ServiceProvidersTable";

export default function ServiceProviders() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };
  const [serviceProviders, setServiceProviders] = useState([1]);
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

        {serviceProviders.length > 0 ? (
          <div className="row justify-between pt-10">
            <div className="flex col-auto">
              <Link href="/create-service-providers">
                <div className="dark-button text-gold poppins-medium cursor-pointer">
                  <div className="flex items-center h-full">
                    <Image src={addIcon} alt="add icon" />
                    <div className="pl-4">Create Service Provider</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-5 relative">
              <input
                type="text"
                className="bg-white py-2 pl-10 rounded-lg w-full"
                placeholder="Search"
              />
              <div className="absolute left-5 top-2">
                <Image src={searchIcon} alt="Search" />
              </div>
            </div>

            <div className="col-12 pt-7">
              <ServiceProvidersTable />
            </div>
          </div>
        ) : (
          <>
            <div className="row items-center justify-center">
              <div className="col-12">
                <div className="text-center">
                  <Image
                    className="m-auto"
                    src={serviceProviderIcon}
                    alt="serviceproviderEmptyIcon"
                  />
                  <div className="f-48 text-darkblue poppins-medium">
                    No Service Providers Created
                  </div>
                  <div className="f-24 text-grey">
                    Start adding your Providers
                  </div>
                </div>
              </div>

              <div className="col-auto pt-[64px]">
                <Link href="/create-service-providers">
                  <div className="dark-button text-gold poppins-medium cursor-pointer">
                    <div className="flex items-center h-full">
                      <Image src={addIcon} alt="add icon" />
                      <div className="pl-4">Add Service Provider</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
