"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import eyeIcon from "../../assets/Icon_Preview.svg";
import parisImage from "../../assets/tour_effel.jpg";
import activityIcon from "../../assets/Icon_Activity.png";
import carIcon from "../../assets/Icon_car.png";
import homeIcon from "../../assets/Icon_Home_dark.png";

import casinoImage from "../../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";
import louvreImage from "../../assets/images/services/Louvre.jpg";
import triomphImage from "../../assets/images/services/Triomphe.jpg";
import mercedesImage from "../../assets/mercedes.webp";
import genevaImage from "../../assets/images/services/Geneva.webp";
import jungerfrauImage from "../../assets/images/services/jungfraujoch.jpg";
import interlakenImage from "../../assets/images/services/interlaken.jpg";

export default function Totals(props: any) {
  const { title = true } = props;
  const [totals, setTotals] = useState({
    activities: [
      {
        id: "2",
        serviceType: "Musee du Louvre",
        description: "Pricing 2 Description",
        location: "Location 2",
        method: "Method 2",
        duration: "Duration 2",
        timeslot: "Timeslot 2",
        price: "350",
        image: louvreImage,
      },
      {
        id: "3",
        serviceType: "Arc de Triomphe",
        description: "Pricing 3 Description",
        location: "Location 3",
        method: "Method 3",
        duration: "Duration 3",
        timeslot: "Timeslot 3",
        price: "350",
        image: triomphImage,
      },
      {
        id: "5",
        serviceType: "Geneve",
        description: "Pricing 5 Description",
        location: "Location 5",
        method: "Method 5",
        duration: "Duration 5",
        timeslot: "Timeslot 5",
        price: "350",
        image: genevaImage,
      },
      {
        id: "6",
        serviceType: "JungerFrau",
        description: "Pricing 6 Description",
        location: "Location 6",
        method: "Method 6",
        duration: "Duration 6",
        timeslot: "Timeslot 6",
        price: "350",
        image: jungerfrauImage,
      },
    ],
    accommodations: [
      {
        id: "1",
        serviceType: "The Ritz Hotel",
        description: "Pricing 1 Description",
        location: "Location 1",
        method: "Method 1",
        duration: "Duration 1",
        timeslot: "Timeslot 1",
        price: "350",
        image: casinoImage,
      },
    ],
    trasnport: [
      {
        id: "4",
        serviceType: "CDG to The Ritz",
        description: "Pricing 4 Description",
        location: "Location 4",
        method: "Method 4",
        duration: "Duration 4",
        timeslot: "Timeslot 4",
        price: "350",
        image: mercedesImage,
      },
      {
        id: "7",
        serviceType: "The Ritz to CDG",
        description: "Pricing 4 Description",
        location: "Location 4",
        method: "Method 4",
        duration: "Duration 4",
        timeslot: "Timeslot 4",
        price: "350",
        image: mercedesImage,
      },
    ],
    other: [
      {
        id: "8",
        serviceType: "InterLaken Tour",
        description: "Pricing 4 Description",
        location: "Location 4",
        method: "Method 4",
        duration: "Duration 4",
        timeslot: "Timeslot 4",
        price: "350",
        image: interlakenImage,
      },
    ],
  });

  return (
    <div className="container-fluid totals">
      <div className="row">
        {title && (
          <div className="col-12 pt-5 pb-4">
            <div className="f-32 text-darkblue poppins-semibold">Totals</div>
          </div>
        )}

        <div className="col-12 pt-2">
          <div className="bg-white row rounded-lg py-8">
            {/* activities  */}
            <div className="col border-right">
              <div className="px-5">
                <div className="f-24 text-darkblue text-center poppins-bold">
                  10
                </div>
                <div className="total-icon pt-2">
                  <Image
                    className="m-auto"
                    src={activityIcon}
                    alt="activityIcon"
                  />
                </div>
                <div className="text-center text-darkblue poppins-medium py-2">
                  Activities
                </div>
                <div className="f-16 poppins-semibold text-darkblue text-center pb-8">
                  $12,000.00
                </div>

                {totals.activities.map((total, index) => (
                  <div className="flex items-center py-1" key={total.id}>
                    <div className="">
                      <Image
                        className="rounded-lg object-cover"
                        style={{ width: "40px", height: "40px" }}
                        src={total.image}
                        alt={total.description}
                      />
                    </div>
                    <div
                      key={total.id}
                      className="poppins-medium text-darkblue pl-2"
                    >
                      {total.serviceType}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* accommodations */}
            <div className="col border-right">
              <div className="px-5">
                <div className="f-24 text-darkblue text-center poppins-bold">
                  1
                </div>
                <div className="total-icon pt-2">
                  <Image className="m-auto" src={homeIcon} alt="home icon" />
                </div>
                <div className="text-center text-darkblue poppins-medium py-2">
                  Accommodations
                </div>
                <div className="f-16 poppins-semibold text-darkblue text-center pb-8">
                  $4,000.00
                </div>

                {totals.accommodations.map((total, index) => (
                  <>
                    <div className="flex items-center py-1" key={total.id}>
                      <div className="">
                        <Image
                          className="rounded-lg object-cover"
                          style={{ width: "40px", height: "40px" }}
                          src={total.image}
                          alt={total.description}
                        />
                      </div>
                      <div
                        key={total.id}
                        className="poppins-medium text-darkblue pl-2"
                      >
                        {total.serviceType}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {/* transport */}
            <div className="col border-right">
              <div className="px-5">
                <div className="f-24 text-darkblue text-center poppins-bold">
                  2
                </div>
                <div className="total-icon pt-2">
                  <Image className="m-auto" src={carIcon} alt="carIcon" />
                </div>
                <div className="text-center text-darkblue poppins-medium py-2">
                  Transport
                </div>
                <div className="f-16 poppins-semibold text-darkblue text-center pb-8">
                  $3,300.00
                </div>

                {totals.trasnport.map((total, index) => (
                  <>
                    <div className="flex items-center py-1" key={total.id}>
                      <div className="">
                        <Image
                          className="rounded-lg object-cover"
                          style={{ width: "40px", height: "40px" }}
                          src={total.image}
                          alt={total.description}
                        />
                      </div>
                      <div
                        key={total.id}
                        className="poppins-medium text-darkblue pl-2"
                      >
                        {total.serviceType}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {/* other */}
            <div className="col">
              <div className="px-5">
                <div className="f-24 text-darkblue text-center poppins-bold">
                  1
                </div>
                <div className="total-icon pt-2">
                  <Image className="m-auto" src={carIcon} alt="carIcon" />
                </div>
                <div className="text-center text-darkblue poppins-medium py-2">
                  Other
                </div>
                <div className="f-16 poppins-semibold text-darkblue text-center pb-8">
                  $1,700.00
                </div>

                {totals.other.map((total, index) => (
                  <>
                    <div className="flex items-center py-1" key={total.id}>
                      <div className="">
                        <Image
                          className="rounded-lg object-cover"
                          style={{ width: "40px", height: "40px" }}
                          src={total.image}
                          alt="paris"
                        />
                      </div>
                      <div
                        key={total.id}
                        className="poppins-medium text-darkblue pl-2"
                      >
                        {total.serviceType}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 bg-white rounded-lg py-4 mt-2">
          <div className="f-24 text-darkblue poppins-semibold text-center pb-2">
            Total
          </div>
          <div className="poppins-bold f-20 text-center">$21,000.00</div>

          <div className="absolute right-8 top-10">
            <Image
              src={eyeIcon}
              alt="eye"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
