"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import parisImage from "../../assets/tour_effel.jpg";
import activityIcon from "../../assets/Icon_Activity.png";
import carIcon from "../../assets/Icon_car.png";
import homeIcon from "../../assets/Icon_Home_dark.png";
import locationIcon from "../../assets/Icon_Location.png";
import phoneIcon from "../../assets/phone_icon.png";
import dollarIcon from "../../assets/Icon_Dollars.png";
import userIcon from "../../assets/Icon_My_Account_dark.png";
import tagIcon from "../../assets/Icon_Tag.png";
import invoiceIcon from "../../assets/Icon_Invoice_dark.png";
import addIcon from "../../assets/Icon_Add_Dark.png";
import deleteIcon from "../../assets/delete_red.png";

export default function Payables(props: any) {
  const { title = true } = props;
  const [payables, setPayables] = useState([
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

  const [serviceProviders, setServiceProviders] = useState([
    {
      name: "Service Provider 1",
      location: "Paris, France",
      phone: "+1234567890",
      total: "$12,000.00",
    },
    {
      name: "Service Provider 2",
      location: "Paris, France",
      phone: "+1234567890",
      total: "$12,000.00",
    },
    {
      name: "Service Provider 3",
      location: "Paris, France",
      phone: "+1234567890",
      total: "$12,000.00",
    },
  ]);

  const [paymentTerms, setPaymentTerms] = useState([
    {
      id: 1,
      description: "Description 1",
      percentage: 50,
      amount: 1500,
      dueDate: "2022-12-12",
    },
    {
      id: 2,
      description: "Description 2",
      percentage: 50,
      amount: 1500,
      dueDate: "2022-12-12",
    },
  ]);

  const [selectedProvider, setSelectedProvider] = useState(0);

  return (
    <div className="container-fluid payables">
      <div className="row">
        <div className="col-12 pt-5 pb-4">
          {title && (
            <div className="f-32 text-darkblue poppins-semibold">Payables</div>
          )}
        </div>

        {/* SERVICE PROVIDERS BAR */}
        <div className="col-12">
          <div className="row rounded-lg">
            {/* service provider  */}
            {serviceProviders.map((serviceProvider, index) => (
              <div
                className={
                  (selectedProvider === index ? "" : "  opacity-25 ") +
                  " col py-8 bg-white pointer rounded-lg"
                }
                onClick={() => setSelectedProvider(index)}
                key={serviceProvider.name}
              >
                <div className="px-5">
                  <div className="flex justify-center items-center">
                    <div className="pr-3">
                      <Image width={30} src={userIcon} alt="location" />
                    </div>
                    <div className="f-20 text-darkblue text-center poppins-semibold">
                      {serviceProvider.name}
                    </div>
                  </div>

                  <div className="flex py-1 justify-center">
                    <div className="pr-3">
                      <Image src={locationIcon} alt="location" />
                    </div>
                    <div className="text-darkblue">
                      {serviceProvider.location}
                    </div>
                  </div>
                  <div className="flex py-1 justify-center">
                    <div className="pr-3">
                      <Image src={phoneIcon} alt="phoneIcon" />
                    </div>
                    <div className="text-darkblue">
                      <a href="tel:+9613123456">{serviceProvider.phone}</a>
                    </div>
                  </div>
                  <div className="flex py-1 justify-center">
                    <div className="pr-3">
                      <Image src={dollarIcon} alt="dollars" />
                    </div>
                    <div className="text-darkblue">{serviceProvider.total}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAYABLES BAR */}
        <div className="col-12">
          <div className="row bg-white rounded-lg py-8">
            {/* activities  */}
            <div className="col border-right">
              <div className="px-5">
                <div className="f-24 text-darkblue text-center poppins-bold">
                  10
                </div>
                <div className="payable-icon pt-2">
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

                {payables.map((payable, index) => (
                  <div className="flex items-center py-1" key={payable.id}>
                    <div className="">
                      <Image
                        className="rounded-lg object-cover"
                        style={{ width: "40px", height: "40px" }}
                        src={parisImage}
                        alt="paris"
                      />
                    </div>
                    <div
                      key={payable.id}
                      className="poppins-medium text-darkblue pl-2"
                    >
                      {payable.serviceType}
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
                <div className="payable-icon pt-2">
                  <Image className="m-auto" src={homeIcon} alt="home icon" />
                </div>
                <div className="text-center text-darkblue poppins-medium py-2">
                  Accommodations
                </div>
                <div className="f-20 poppins-semibold text-darkblue text-center pb-8">
                  $4,000.00
                </div>

                {payables.map((payable, index) => (
                  <>
                    {index < 1 && (
                      <div className="flex items-center py-1" key={payable.id}>
                        <div className="">
                          <Image
                            className="rounded-lg object-cover"
                            style={{ width: "40px", height: "40px" }}
                            src={parisImage}
                            alt="paris"
                          />
                        </div>
                        <div
                          key={payable.id}
                          className="poppins-medium text-darkblue pl-2"
                        >
                          {payable.serviceType}
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
                <div className="payable-icon pt-2">
                  <Image className="m-auto" src={carIcon} alt="carIcon" />
                </div>
                <div className="text-center text-darkblue poppins-medium py-2">
                  Transport
                </div>
                <div className="f-20 poppins-semibold text-darkblue text-center pb-8">
                  $3,300.00
                </div>

                {payables.map((payable, index) => (
                  <>
                    {index < 2 && (
                      <div className="flex items-center py-1" key={payable.id}>
                        <div className="">
                          <Image
                            className="rounded-lg object-cover"
                            style={{ width: "40px", height: "40px" }}
                            src={parisImage}
                            alt="paris"
                          />
                        </div>
                        <div
                          key={payable.id}
                          className="poppins-medium text-darkblue pl-2"
                        >
                          {payable.serviceType}
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
                <div className="payable-icon pt-2">
                  <Image className="m-auto" src={carIcon} alt="carIcon" />
                </div>
                <div className="text-center text-darkblue poppins-medium py-2">
                  Other
                </div>
                <div className="f-20 poppins-semibold text-darkblue text-center pb-8">
                  $0.00
                </div>

                {payables.map((payable, index) => (
                  <>
                    {index < 0 && (
                      <div className="flex items-center py-1" key={payable.id}>
                        <div className="">
                          <Image
                            className="rounded-lg object-cover"
                            style={{ width: "40px", height: "40px" }}
                            src={parisImage}
                            alt="paris"
                          />
                        </div>
                        <div
                          key={payable.id}
                          className="poppins-medium text-darkblue pl-2"
                        >
                          {payable.serviceType}
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PRICING AND PAYMENT TERMS */}
        <div className="col-12 pt-1">
          <div className="row bg-white py-5 px-4 rounded-lg">
            <div className="col-5">
              <div className="flex items-center pb-3">
                <div className="pr-3">
                  <Image width={30} src={tagIcon} alt="tag icon" />
                </div>
                <div className="text-darkblue f-24 poppins-semibold">
                  Pricing
                </div>
              </div>

              <div className="rounded-lg bg-grey px-4 py-4">
                <div className="bg-white rounded-lg py-2 px-4">
                  <div className="f-20 text-darkblue poppins-semibold">
                    Total
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-darkblue">Three thousand dollars</div>
                    <div className="text-darkblue f-20 poppins-bold">
                      $3,000.00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-7">
              <div className="flex items-center pb-3">
                <div className="pr-3">
                  <Image width={30} src={invoiceIcon} alt="invoice" />
                </div>
                <div className="text-darkblue f-24 poppins-semibold">
                  Payment Terms
                </div>
              </div>
              <div className="rounded-lg bg-grey px-4 py-4">
                {/* terms titles  */}
                <div className="row">
                  <div className="col-1">
                    <div className="f-12 text-darkblue">Nb.</div>
                  </div>
                  <div className="col-4">
                    <div className="f-12 text-darkblue">Description</div>
                  </div>
                  <div className="col">
                    <div className="f-12 text-darkblue">
                      Percentage <span className="text-orange">*</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="f-12 text-darkblue">
                      Amount ($)<span className="text-orange">*</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="f-12 text-darkblue">
                      Due Date<span className="text-orange">*</span>
                    </div>
                  </div>
                  <div className="col-auto" style={{ paddingLeft: "0px" }}>
                    <div className="opacity-0">
                      <Image src={deleteIcon} alt="delete" />
                    </div>
                  </div>
                </div>

                {/* terms  */}
                {paymentTerms.map((paymentTerm, index) => (
                  <div className="row py-1 items-center" key={paymentTerm.id}>
                    <div className="col-1">
                      <div className="bg-white rounded-lg py-2 px-2">
                        <div className="f-12 text-darkblue text-center">
                          {paymentTerm.id}
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="light-input">
                        <input
                          className="px-2 py-2 f-12 rounded-lg bg-white text-darkblue w-full"
                          type="text"
                          placeholder="Description.."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="light-input">
                        <input
                          className="px-2 py-2 f-12 rounded-lg bg-white text-darkblue w-full"
                          type="number"
                          placeholder="Percentage"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="light-input">
                        <input
                          className="px-2 py-2 f-12 rounded-lg bg-white text-darkblue w-full"
                          type="number"
                          placeholder="Amount"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="light-input">
                        <input
                          className="px-2 py-2 f-12 rounded-lg bg-white text-darkblue w-full"
                          type="date"
                        />
                      </div>
                    </div>
                    <div className="col-auto" style={{ paddingLeft: "0px" }}>
                      <div
                        className=" pointer"
                        onClick={() => {
                          setPaymentTerms(
                            paymentTerms.filter(
                              (term) => term.id !== paymentTerm.id
                            )
                          );
                        }}
                      >
                        <Image src={deleteIcon} alt="delete" />
                      </div>
                    </div>
                  </div>
                ))}
                {/* add payment line  */}
                <div className="row pt-2">
                  <div className="col-12 self-center">
                    <div
                      className=" flex justify-center items-center rounded-lg py-2 border-dashed pointer"
                      onClick={() => {
                        setPaymentTerms([
                          ...paymentTerms,
                          {
                            id: paymentTerms[paymentTerms.length - 1].id + 1,
                            description: "",
                            percentage: 50,
                            amount: 1500,
                            dueDate: "2022-12-12",
                          },
                        ]);
                      }}
                    >
                      <div className="">
                        <Image src={addIcon} alt="add" />
                      </div>
                      <div className="text-darkblue f-12 pl-2">
                        Add Payment Line
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
