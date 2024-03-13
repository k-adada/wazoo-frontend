"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SingleSelect from "../SingleSelect";
import BasicDateRangePicker from "../DateRangePicker";
import CircularProgress from "@mui/material/CircularProgress";

import saveIcon from "../../assets/Icon_Save.png";
import uploadIcon from "../../assets/upload_icon.png";
import themeIcon from "../../assets/theme.png";
import dotsIcon from "../../assets/dots_icon.png";
import Link from "next/link";

export default function CatalogueDetails(props: {
  setCurrentStep: any;
  stepsDone: any;
  setStepsDone: any;
}) {
  const { setCurrentStep, stepsDone, setStepsDone } = props;
  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    setStepsDone(["catalogue-details"]);
  }, [setStepsDone]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <div className="row">
            {/* Catalogue name  */}
            <div className="col-6">
              <div className="text-darkblue pb-2">
                Catalogue Name <span className="text-orange">*</span>
              </div>
              <div className="light-input">
                <input
                  className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                  type="text"
                  placeholder="Catalogue Name"
                />
              </div>
            </div>

            {/* Description */}
            <div className="col-12">
              <div className="text-darkblue pt-8 pb-2">
                Description <span className="text-orange">*</span>
              </div>
              <div className="light-input">
                <textarea
                  style={{ height: "200px" }}
                  className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                  placeholder="Description"
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
                  <div className="f-16 text-darkblue pt-3">
                    Drag & drop files here
                  </div>
                  <div className="text-darkblue">or upload from desktop</div>
                </div>
              </div>
            </div>
            <div className="col-12 pt-6">
              <div className="flex justify-between items-center">
                <Image
                  src={themeIcon}
                  alt="theme"
                  width={105}
                  height={80}
                  className="rounded-lg"
                />
                <div className="f-16 text-darkblue">File name.png</div>
                <div className="uploaded-tag flex justify-between items-center px-3 pr-6">
                  <CircularProgress
                    variant="determinate"
                    value={progress}
                    style={{ height: "24px", width: "24px" }}
                  />

                  <div className="text-white poppins-medium pl-2">Uploaded</div>
                </div>
                <Image src={dotsIcon} alt="dots" className="cursor-pointer" />
              </div>
            </div>
            <div className="col-12 pt-6">
              <div className="flex justify-between items-center">
                <Image
                  src={themeIcon}
                  alt="theme"
                  width={105}
                  height={80}
                  className="rounded-lg"
                />
                <div className="f-16 text-darkblue">File name.png</div>
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
            <div className="col-12 pt-6">
              <div className="flex justify-between items-center">
                <Image
                  src={themeIcon}
                  alt="theme"
                  width={105}
                  height={80}
                  className="rounded-lg"
                />
                <div className="f-16 text-darkblue">File name.png</div>
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
          <Link href="/catalogues">
            <div className="dark-button text-gold poppins-medium cursor-pointer">
              <div className="flex items-center h-full">
                <Image src={saveIcon} alt="saveIcon" />
                <div className="pl-4">Save as Draft</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-auto pt-[64px]">
          <div
            className="dark-button text-gold poppins-medium cursor-pointer"
            onClick={() => {
              setCurrentStep("catalogue-builder");
              setStepsDone([...stepsDone, "catalogue-builder"]);
            }}
          >
            <div className="flex items-center h-full">
              <div className="">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
