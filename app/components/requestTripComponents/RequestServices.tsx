"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Icons from "@/app/Icons";
import Images from "@/app/Images";

import DragTableRequestServices from "./DragTableRequestServices";
import ActivitiesSection from "../exploreComponents/ActivitiesSection";
import dynamic from "next/dynamic";
import SingleSelect from "../SingleSelect";

const DynamicRichTextBox = dynamic(() => import("../RichTextBox"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function RequestServices() {
  const [selectedServices, setSelectedServices] = useState([] as any[]);

  const [addService, setAddService] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const [customServices, setCustomServices] = useState({
    open: false,
    services: [] as any[],
  });

  return (
    <div className="">
      {addService && (
        <div
          className="fixed h-full w-full top-0 left-0"
          style={{
            overflowY: "auto",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000000000,
          }}
        >
          {openPreview ? (
            customServices.open ? (
              <>
                <div
                  className="container-fluid my-10 p-10 rounded-lg bg-grey"
                  style={{
                    width: "40%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div className="text-darkblue f-30 poppins-semibold">
                    Add Custom Service
                  </div>

                  <div className="f-20 text-darkblue poppins-semibold pt-5">
                    Service Name
                  </div>
                  <div className="f-14 text-darkblue">
                    Please give your custom service a name
                  </div>
                  <div className="">
                    <input
                      className="w-full py-3 rounded-lg px-4"
                      type="text"
                      placeholder="type here"
                    />
                  </div>

                  <div className="f-20 text-darkblue poppins-semibold pt-5">
                    Service Location
                  </div>
                  <div className="f-14 text-darkblue">
                    Please select service location
                  </div>
                  <div className="">
                    <SingleSelect
                      options={["Location", "Location 2", "Location 3"]}
                      label=""
                    />
                  </div>

                  <div className="f-20 text-darkblue poppins-semibold pt-5">
                    Describe your service
                  </div>
                  <div className="h-[300px]">
                    <DynamicRichTextBox initialData="Describe your needs" />
                  </div>
                  <div className="flex justify-between items-center pt-5">
                    <div
                      className="dark-button flex justify-center items-center text-gold pointer mr-4 w-full"
                      onClick={() => {
                        setOpenPreview(false);

                        setCustomServices({
                          open: false,
                          services: customServices.services,
                        });
                      }}
                    >
                      <div className="">Cancel</div>
                    </div>
                    <div
                      className="dark-button flex justify-center items-center text-gold pointer ml-4 w-full"
                      onClick={() => {
                        setOpenPreview(false);

                        let tempServices = customServices.services;
                        tempServices.push(1);

                        setCustomServices({
                          open: false,
                          services: tempServices,
                        });
                      }}
                    >
                      <div className="">Save</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div
                className="container-fluid my-10 p-10 rounded-lg bg-grey"
                style={{
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div className="text-darkblue f-30 poppins-semibold">
                  Louvre Museum - Details
                </div>

                <div className="">
                  <Image
                    src={Images.louvreImage}
                    alt="louvre"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-[250px] object-cover"
                  />
                </div>

                <div className="f-20 text-darkblue poppins-semibold pt-5 pb-1">
                  Experience Method
                </div>
                <div className="">
                  <SingleSelect options={["Self Guided", "Guided"]} label="" />
                </div>

                <div className="f-20 text-darkblue poppins-semibold pt-5 pb-1">
                  Timeslot
                </div>
                <div className="">
                  <SingleSelect
                    options={["Morning", "Afternoon", "Evening"]}
                    label=""
                  />
                </div>

                <div className="f-20 text-darkblue poppins-semibold pt-5 pb-1">
                  Customizations
                </div>
                <DynamicRichTextBox initialData="Describe your needs" />
                <div className="flex justify-between items-center pt-5">
                  <div
                    className="dark-button flex justify-center items-center text-gold pointer mr-4 w-full"
                    onClick={() => {
                      setOpenPreview(false);
                    }}
                  >
                    <div className="">Cancel</div>
                  </div>
                  <div
                    className="dark-button flex justify-center items-center text-gold pointer ml-4 w-full"
                    onClick={() => {
                      setOpenPreview(false);
                    }}
                  >
                    <div className="">Save</div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div
              className="container-fluid my-10 p-10 rounded-lg bg-grey"
              style={{
                maxWidth: "90%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {/* ITINERARYY RELATED INFO */}
              <div
                className="absolute pointer"
                style={{ top: "50px", right: "6%" }}
                onClick={() => {
                  setAddService(false);
                }}
              >
                X
              </div>
              {/* search bar */}
              <div
                className="py-2 px-4 rounded-lg w-full bg-blue"
                style={{
                  maxWidth: "95%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div className="row justify-between items-center">
                  {/* title */}
                  <div className="col-auto">
                    <div className="f-20 text-darkblue poppins-semibold text-center">
                      Add Services to your Trip
                    </div>
                  </div>

                  {/* search */}
                  <div className="col">
                    <div className="flex justify-end items-center">
                      <div className="relative">
                        <div className="absolute left-3 top-3 cursor-pointer">
                          <Image src={Icons.searchIconDark} alt="search" />
                        </div>
                        <input
                          className="bg-white text-darkblue pl-[56px] p-3 rounded-lg w-full"
                          placeholder={"Search "}
                          type="text"
                        />
                      </div>
                      <div className="pl-4 w-auto">
                        <div className="bg-white rounded-lg py-3 px-3 text-darkblue flex items-center pointer">
                          <div className="pr-3">Filters</div>
                          <div className="">
                            <Image
                              src={Icons.arrowDownDarkIcon}
                              alt="arrowDown"
                              width={40}
                              height={40}
                              style={{ height: "10px", width: "15px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="ml-4 dark-button flex items-center text-gold pointer"
                        onClick={() => {
                          setSelectedServices([
                            {
                              id: "1",
                              image: Images.louvreImage,
                              name: "Louvre Museum",
                              serviceType: "Culture",
                              serviceSubType: "Art",
                              location: "Paris, France",
                              method: "Method 1",
                              validity: "Oct 1 - Oct 4",
                              price: "350$",
                            },

                            {
                              id: "2",
                              image: Icons.activityIconDark,
                              name: "Custom Service",
                              serviceType: "Custom",
                              serviceSubType: "-",
                              location: "Germany",
                              method: "Method 2",
                              validity: "Jan 5 - Feb 9",
                              price: "690$",
                            },
                          ]);
                          setAddService(false);
                        }}
                      >
                        <div className="">Add to Trip</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ActivitiesSection
                popup={true}
                setOpenPreview={setOpenPreview}
                setCustomServices={setCustomServices}
                customServices={customServices}
              />
              {/* ITINERARYY RELATED INFO */}
            </div>
          )}
        </div>
      )}

      {/* Item BAR  */}
      <div className="bg-blue rounded-lg px-5 py-2 flex justify-between">
        <div className="f-24 text-darkblue poppins-semibold">Services</div>
        <div
          className="dark-button flex items-center text-gold pointer"
          onClick={() => {
            setAddService(true);
          }}
        >
          <Image src={Icons.addIconGold} alt="add" width={20} height={20} />
          <div className="pl-2">Add Services</div>
        </div>
      </div>

      {/* DRAG TABLE SERVICES */}
      <div className="px-5 pt-5">
        <DragTableRequestServices
          services={selectedServices}
          days={selectedServices}
          setDays={selectedServices}
          dayIndex={1}
        />
      </div>
    </div>
  );
}
