"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import providerIcon from "../../assets/Icon_My_Account.svg";
import deleteRedIcon from "../../assets/delete_red.svg";
import addIcon from "../../assets/Icon_Add_Dark.png";

import AvailabilityTimes from "../../components/AvailabilityTimes";

export default function ServiceProviders(props: any) {
  const { setSelectProviderPopup, selectedProviders } = props;

  return (
    <div className="row">
      {/* select service provider  */}
      <div className="col-12">
        <div className="text-darkblue pb-2 pt-8 f-20">
          Select Service Providers (Optional)
        </div>
        <div className="">
          <div className="row">
            {selectedProviders.map((provider, index) => {
              return (
                <div className="col-12 py-4">
                  <div className="rounded-lg bg-white py-4 px-4">
                    <div className="row items-center">
                      <div className="col-auto">
                        <Image
                          src={providerIcon}
                          alt="providerIcon"
                          className="w-[60px] h-[60px]"
                        />
                      </div>
                      <div className="col row">
                        <div className="col-6 pb-2">
                          <div className="text-darkblue">Provider Name</div>
                        </div>
                        <div className="col-6 pb-2">
                          <div className="text-darkblue">Provider Cost ($)</div>
                        </div>
                        <div className="col-6 py-1">
                          <div className="light-input">
                            <input
                              className="px-5 py-4 rounded-lg bg-white text-grey w-full border"
                              type="text"
                              placeholder="Provider"
                              value={"Provider " + index}
                            />
                          </div>
                        </div>
                        <div className="col-6 flex items-center py-1">
                          <div className="light-input w-full">
                            <input
                              className="px-5 py-4 rounded-lg bg-white text-grey w-full border"
                              type="number"
                              placeholder="Cost"
                            />
                          </div>
                        </div>

                        <div className="col-12 pt-5 pb-2">
                          <div className="text-darkblue">
                            Provider Availability
                          </div>
                          <AvailabilityTimes />
                        </div>
                      </div>
                      <div className="col-auto">
                        <Image
                          src={deleteRedIcon}
                          alt="delete"
                          className="pointer h-[40px] w-[40px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="flex justify-center rounded-lg py-4 border-dashed pointer mt-3"
            onClick={() => {
              setSelectProviderPopup("select");
            }}
          >
            <div className="">
              <Image src={addIcon} alt="add" />
            </div>
            <div className="text-darkblue">
              <div className="pl-3">Add a provider for this service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
