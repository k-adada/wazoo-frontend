"use client";
import React, { useEffect, useState } from "react";
import "./dist/createServices.css";
import Image from "next/image";
import SingleSelect from "../components/SingleSelect";
import BasicDateRangePicker from "../components/DateRangePicker";
import CircularProgress from "@mui/material/CircularProgress";

import notificationIcon from "../assets/Icon_Notification_Received.png";
import avatarIcon from "../assets/avatar.png";
import saveIcon from "../assets/Icon_Save.png";
import deleteRedIcon from "../assets/delete_red.png";
import backIcon from "../assets/Icon_Back.png";
import addIcon from "../assets/Icon_Add_Dark.png";
import addGoldIcon from "../assets/Icon_Add.png";
import uploadIcon from "../assets/upload_icon.png";
import themeIcon from "../assets/theme.png";
import dotsIcon from "../assets/dots_icon.png";
import AvailabilityTimes from "../components/AvailabilityTimes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SelectSPTable from "../components/serviceProvidersComponents/SelectSPTable";

export default function CreateServices() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };
  const [progress, setProgress] = useState(0);
  const [selectProviderPopup, setSelectProviderPopup] = useState("false");
  const [selectedProviders, setSelectedProviders] = useState([1, 2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        {/* SERVICE PROVIDERS POPUP  */}
        {selectProviderPopup != "false" && (
          <>
            <div className="overlay-dark"></div>
            <div className="popup-container bg-grey rounded-lg px-10 py-10">
              {selectProviderPopup == "select" && (
                <>
                  <div className="f-36 poppins-semibold text-darkblue text-center pb-10">
                    Select Provider(s) for this service
                  </div>
                  <div className="flex justify-end pb-4">
                    <div className="light-input w-1/4">
                      <input
                        className="px-5 py-2 rounded-lg bg-white text-grey w-full"
                        type="text"
                        placeholder="Search Service Provider"
                      />
                    </div>
                    <div
                      className="dark-button flex text-gold items-center w-1/4 justify-center poppins-medium f-16 ml-2 pointer"
                      onClick={() => {
                        setSelectProviderPopup("create");
                      }}
                    >
                      <div className="">
                        <Image src={addGoldIcon} alt="add icon" />
                      </div>
                      <div className="pl-4">Add New Provider</div>
                    </div>
                  </div>
                  <div className="">
                    <SelectSPTable />
                  </div>

                  <div className="flex justify-between pt-5">
                    <div
                      className="light-button flex text-darkblue items-center w-full justify-center poppins-medium f-16 mr-2 pointer"
                      onClick={() => {
                        setSelectProviderPopup("false");
                      }}
                    >
                      cancel
                    </div>
                    <div
                      className="dark-button flex text-gold items-center w-full justify-center poppins-medium f-16 ml-2 pointer"
                      onClick={() => {
                        setSelectProviderPopup("false");
                      }}
                    >
                      <div className="">
                        <Image src={addGoldIcon} alt="add icon" />
                      </div>
                      <div className="pl-4">Link Service Provider(s)</div>
                    </div>
                  </div>
                </>
              )}

              {selectProviderPopup == "create" && (
                <>
                  <div className="f-36 poppins-semibold text-darkblue text-center pb-10">
                    Create new Service Provider
                  </div>

                  <div className="row">
                    {/* name  */}
                    <div className="col-6">
                      <div className="text-darkblue pb-2 pt-5 f-20">
                        Duration <span className="text-orange">*</span>
                      </div>
                      <div className="light-input">
                        <input
                          className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                          type="text"
                          placeholder="Service Provider Name"
                        />
                      </div>
                    </div>
                    {/* number  */}
                    <div className="col-6">
                      <div className="text-darkblue pb-2 pt-5 f-20">
                        Phone Number
                      </div>
                      <div className="light-input">
                        <input
                          className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                          type="number"
                          placeholder="e.g: +1234567890"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="col-12">
                      <div className="text-darkblue pt-5 pb-2 f-20">
                        Description <span className="text-orange">*</span>
                      </div>
                      <div className="light-input">
                        <textarea
                          className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                          placeholder="Description"
                          style={{ height: "200px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-10">
                    <div
                      className="light-button flex text-darkblue items-center w-full justify-center poppins-medium f-16 mr-2 pointer"
                      onClick={() => {
                        setSelectProviderPopup("select");
                      }}
                    >
                      cancel
                    </div>
                    <div
                      className="dark-button flex text-gold items-center w-full justify-center poppins-medium f-16 ml-2 pointer"
                      onClick={() => {
                        setSelectProviderPopup("select");
                      }}
                    >
                      <div className="">
                        <Image src={addGoldIcon} alt="add icon" />
                      </div>
                      <div className="pl-4">Create Service Provider</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}

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
            <div className="f-36 poppins-semibold text-darkblue ">Service</div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="row">
              {/* service name  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 f-20">
                  Service Name <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <input
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    type="text"
                    placeholder="Service Name"
                  />
                </div>
              </div>
              {/* location  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 f-20">
                  Location <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <input
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    type="text"
                    placeholder="Select on Map"
                  />
                </div>
              </div>
              {/* select category  */}
              <div className="col-12">
                <div className="text-darkblue pb-2 pt-8 f-20">
                  Select Category<span className="text-orange">*</span>
                </div>
                <div className="remove-mui-label">
                  <SingleSelect
                    options={[
                      { label: "Transport" },
                      { label: "Accomodation" },
                      { label: "Activity" },
                    ]}
                    label="Select Category"
                  />
                </div>
              </div>
              {/* type  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 pt-8 f-20">
                  Select Type <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <div className="remove-mui-label">
                    <SingleSelect
                      options={[
                        { label: "type 1" },
                        { label: "Accomodation" },
                        { label: "Activity" },
                      ]}
                      label="Select Category"
                    />
                  </div>
                </div>
              </div>
              {/* subtype  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 pt-8 f-20">
                  Select Subtype <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <div className="remove-mui-label">
                    <SingleSelect
                      options={[
                        { label: "transfer" },
                        { label: "Accomodation" },
                        { label: "Activity" },
                      ]}
                      label="Select Category"
                    />
                  </div>
                </div>
              </div>
              {/* validity dates */}
              <div className="col-6">
                <div className="text-darkblue pt-8 f-20">
                  Validity Dates<span className="text-orange">*</span>
                </div>
                <div className="validity-dates">
                  <BasicDateRangePicker />
                </div>
              </div>
              {/* duration  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 pt-8 f-20">
                  Duration <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <input
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    type="number"
                    placeholder="Hours"
                  />
                </div>
              </div>

              {/* AvailabilityTimes */}
              <div className="col-12">
                <AvailabilityTimes />
              </div>

              {/* select service provider  */}
              <div className="col-12">
                <div className="text-darkblue pb-2 pt-8 f-20">
                  Select Service Provider <span className="text-orange">*</span>
                </div>
                <div className="">
                  <div className="row">
                    <div className="col-6">
                      <div className="text-darkblue">Provider Name</div>
                    </div>
                    <div className="col-6">
                      <div className="text-darkblue">Provider Cost</div>
                    </div>

                    {selectedProviders.map((provider, index) => {
                      return (
                        <>
                          <div className="col-6 py-1">
                            <div className="light-input">
                              <input
                                className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                                type="text"
                                placeholder="Provider"
                                value={"Provider " + index}
                              />
                            </div>
                          </div>
                          <div className="col-6 flex items-center py-1">
                            <div className="light-input w-full">
                              <input
                                className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                                type="number"
                                placeholder="Cost"
                              />
                            </div>
                            <div className="col-auto">
                              <Image
                                src={deleteRedIcon}
                                alt="delete"
                                className="pointer"
                              />
                            </div>
                          </div>
                        </>
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
                      <div className="pl-3">
                        Add a provider for this service
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* My Default Selling Price  */}
              <div className="col-12">
                <div className="text-darkblue pt-8 pb-2 f-20">
                  My Default Selling Price{" "}
                  <span className="f-14">(indicative)</span>
                  <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <input
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    type="number"
                    placeholder="Price"
                  />
                </div>
              </div>

              {/* Minimum age  */}
              <div className="col-6">
                <div className="text-darkblue pt-8 pb-2 f-20">
                  Minimum Age
                  {/* <span className="text-orange">*</span> */}
                </div>
                <div className="light-input">
                  <input
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    type="number"
                    placeholder="Age"
                  />
                </div>
              </div>

              {/* Requires Voucher  */}
              <div className="col-6">
                <div className="text-darkblue pb-2 pt-8 f-20">
                  Requires Voucher <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <div className="remove-mui-label">
                    <SingleSelect
                      options={[{ label: "Yes" }, { label: "No" }]}
                      label="Select"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="col-12">
                <div className="text-darkblue pt-8 pb-2 f-20">
                  Description <span className="text-orange">*</span>
                </div>
                <div className="light-input">
                  <textarea
                    className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                    placeholder="Description"
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* upload images  */}
          <div className="col-4">
            <div className="row">
              {/* upload images  */}
              <div className="col-12">
                <div className="upload-container flex justify-center items-center h-full">
                  <div className="text-center">
                    <div className="flex justify-center">
                      <Image src={uploadIcon} alt="upload" />
                    </div>
                    <div className="f-20 text-darkblue pt-3">
                      Drag & drop files here
                    </div>
                    <div className="text-darkblue">or upload from desktop</div>
                  </div>
                </div>
              </div>
              <div className="col-12 pt-6 pb-1">
                <div className="flex justify-between items-center">
                  <Image
                    src={themeIcon}
                    alt="theme"
                    width={105}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="f-20 text-darkblue line-clamp-1">
                    File name.png
                  </div>
                  <div className="uploaded-tag flex justify-between items-center px-3 pr-6">
                    <CircularProgress
                      variant="determinate"
                      value={progress}
                      style={{ height: "24px", width: "24px" }}
                    />

                    <div className="text-white poppins-medium pl-2">100%</div>
                  </div>
                  <Image src={dotsIcon} alt="dots" className="cursor-pointer" />
                </div>
              </div>
              <div className="col-12 py-1">
                <div className="flex justify-between items-center">
                  <Image
                    src={themeIcon}
                    alt="theme"
                    width={105}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="f-20 text-darkblue line-clamp-1">
                    File name.png
                  </div>
                  <div className="progress-tag flex justify-between items-center px-3">
                    <CircularProgress
                      variant="determinate"
                      value={70}
                      style={{ height: "24px", width: "24px" }}
                    />
                    <div className="pl-6"> 70%</div>
                  </div>
                  <Image src={dotsIcon} alt="dots" className="cursor-pointer" />
                </div>
              </div>
              <div className="col-12 py-1">
                <div className="flex justify-between items-center">
                  <Image
                    src={themeIcon}
                    alt="theme"
                    width={105}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="f-20 text-darkblue line-clamp-1">
                    File name.png
                  </div>
                  <div className="progress-tag flex justify-between items-center px-3">
                    <CircularProgress
                      variant="determinate"
                      value={40}
                      style={{ height: "24px", width: "24px" }}
                    />
                    <div className="pl-6"> 40%</div>
                  </div>
                  <Image src={dotsIcon} alt="dots" className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto pt-[64px]">
            <Link href="/services">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={saveIcon} alt="saveIcon" />
                  <div className="pl-4">Save Service</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
