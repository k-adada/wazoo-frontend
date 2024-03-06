"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import parisImage from "../../assets/tour_effel.jpg";
import activityIcon from "../../assets/Icon_Activity.png";
import carIcon from "../../assets/Icon_car.png";
import homeIcon from "../../assets/Icon_Home_dark.png";

export default function Totals() {
  const [totals, setTotals] = useState([
    {
      id: "1",
      serviceType: "Pricing 1",
      description: "Pricing 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "350",
    },
    {
      id: "2",
      serviceType: "Pricing 2",
      description: "Pricing 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "350",
    },
    {
      id: "3",
      serviceType: "Pricing 3",
      description: "Pricing 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "350",
    },
    {
      id: "4",
      serviceType: "Pricing 4",
      description: "Pricing 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "350",
    },
    {
      id: "5",
      serviceType: "Pricing 5",
      description: "Pricing 5 Description",
      location: "Location 5",
      method: "Method 5",
      duration: "Duration 5",
      timeslot: "Timeslot 5",
      price: "350",
    },
    {
      id: "6",
      serviceType: "Pricing 6",
      description: "Pricing 6 Description",
      location: "Location 6",
      method: "Method 6",
      duration: "Duration 6",
      timeslot: "Timeslot 6",
      price: "350",
    },
  ]);

  return (
    <div className="container-fluid totals">
      <div className="row">
        <div className="col-12 pt-5">
          <div className="f-28 text-darkblue poppins-semibold">Totals</div>
        </div>
        <div className="col-12">
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
                <div className="f-20 poppins-semibold text-darkblue text-center pb-8">
                  $12,000.00
                </div>

                {totals.map((total, index) => (
                  <div className="flex items-center py-1" key={total.id}>
                    <div className="">
                      <Image
                        className="rounded-lg object-cover"
                        style={{ width: "40px", height: "40px" }}
                        src={parisImage}
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
                <div className="f-20 poppins-semibold text-darkblue text-center pb-8">
                  $4,000.00
                </div>

                {totals.map((total, index) => (
                  <>
                    {index < 1 && (
                      <div className="flex items-center py-1" key={total.id}>
                        <div className="">
                          <Image
                            className="rounded-lg object-cover"
                            style={{ width: "40px", height: "40px" }}
                            src={parisImage}
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
                    )}
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
                <div className="f-20 poppins-semibold text-darkblue text-center pb-8">
                  $3,300.00
                </div>

                {totals.map((total, index) => (
                  <>
                    {index < 2 && (
                      <div className="flex items-center py-1" key={total.id}>
                        <div className="">
                          <Image
                            className="rounded-lg object-cover"
                            style={{ width: "40px", height: "40px" }}
                            src={parisImage}
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
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* logistics */}
            <div className="col border-right">
              <div className="px-5">
                <div className="f-24 text-darkblue text-center poppins-bold">
                  0
                </div>
                <div className="total-icon pt-2">
                  <Image className="m-auto" src={carIcon} alt="carIcon" />
                </div>
                <div className="text-center text-darkblue poppins-medium py-2">
                  Logistics
                </div>
                <div className="f-20 poppins-semibold text-darkblue text-center pb-8">
                  $0.00
                </div>

                {totals.map((total, index) => (
                  <>
                    {index < 0 && (
                      <div className="flex items-center py-1" key={total.id}>
                        <div className="">
                          <Image
                            className="rounded-lg object-cover"
                            style={{ width: "40px", height: "40px" }}
                            src={parisImage}
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
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* other */}
            <div className="col">
              <div className="px-5">
                <div className="f-24 text-darkblue text-center poppins-bold">
                  0
                </div>
                <div className="total-icon pt-2">
                  <Image className="m-auto" src={carIcon} alt="carIcon" />
                </div>
                <div className="text-center text-darkblue poppins-medium py-2">
                  Other
                </div>
                <div className="f-20 poppins-semibold text-darkblue text-center pb-8">
                  $0.00
                </div>

                {totals.map((total, index) => (
                  <>
                    {index < 0 && (
                      <div className="flex items-center py-1" key={total.id}>
                        <div className="">
                          <Image
                            className="rounded-lg object-cover"
                            style={{ width: "40px", height: "40px" }}
                            src={parisImage}
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
                    )}
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
          <div className="f-20 poppins-bold f-20 text-center">$18,300.00</div>
        </div>
      </div>
    </div>
  );
}
