"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import tagIcon from "../../assets/Icon_Tag.png";
import invoiceIcon from "../../assets/Icon_Invoice_dark.png";
import addIcon from "../../assets/Icon_Add_Dark.png";
import deleteIcon from "../../assets/delete_red.png";

export default function MyPricing() {
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
  return (
    <div className="container-fluid myPricings">
      <div className="row">
        <div className="col-12 pt-8 pb-4">
          <div className="f-32 text-darkblue poppins-semibold">
            My Pricing & Payment Terms
          </div>
        </div>

        {/* PRICING AND PAYMENT TERMS */}
        <div className="col-12 pt-1">
          <div className="row bg-white py-5 px-4">
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
                {/* total  */}
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

                <div className="f-14 poppins-semibold text-darkblue pt-4 pb-2">
                  Deductions/Discounts
                </div>
                {/* discount titles  */}
                <div className="row">
                  <div className="col-5">
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

                  <div className="col-auto" style={{ paddingLeft: "0px" }}>
                    <div className="opacity-0">
                      <Image src={deleteIcon} alt="delete" />
                    </div>
                  </div>
                </div>

                {/* discounts  */}
                {paymentTerms.map((paymentTerm, index) => (
                  <div className="row py-1 items-center" key={paymentTerm.id}>
                    <div className="col-5">
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
                {/* add discount line  */}
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
                        Add Deduction / Discount Line
                      </div>
                    </div>
                  </div>
                </div>

                {/* ########################################################################################################## */}

                {/* net total  */}
                <div className="bg-white rounded-lg py-2 px-4 mt-4">
                  <div className="f-20 text-darkblue poppins-semibold">
                    Net Total
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-darkblue">
                      Sixteen Thousand dollars
                    </div>
                    <div className="text-darkblue f-20 poppins-bold">
                      $16,000.00
                    </div>
                  </div>
                </div>

                <div className="f-14 poppins-semibold text-darkblue pt-4 pb-2">
                  Taxes & Fees
                </div>
                {/* Taxes Fees titles  */}
                <div className="row">
                  <div className="col-5">
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

                  <div className="col-auto" style={{ paddingLeft: "0px" }}>
                    <div className="opacity-0">
                      <Image src={deleteIcon} alt="delete" />
                    </div>
                  </div>
                </div>

                {/* taxes  */}
                {paymentTerms.map((paymentTerm, index) => (
                  <div className="row py-1 items-center" key={paymentTerm.id}>
                    <div className="col-5">
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
                {/* add tax line  */}
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
                        Add Tax/Fee Line
                      </div>
                    </div>
                  </div>
                </div>

                {/* gross total  */}
                <div className="bg-white rounded-lg py-2 px-4 mt-4">
                  <div className="f-20 text-darkblue poppins-semibold">
                    Gross Total
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-darkblue">
                      Sixteen Thousand dollars
                    </div>
                    <div className="text-darkblue f-20 poppins-bold">
                      $16,000.00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-7">
              {/* Payments Terms */}
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

              {/* Cancellation Terms */}
              <div className="flex items-center pt-5 pb-3">
                <div className="pr-3">
                  <Image width={30} src={invoiceIcon} alt="invoice" />
                </div>
                <div className="text-darkblue f-24 poppins-semibold">
                  Cancellation Terms
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
                {/* add cancellation line  */}
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
                        Add cancellation Line
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
