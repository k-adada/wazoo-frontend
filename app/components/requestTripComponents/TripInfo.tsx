"use client";
import React, { useState } from "react";

import MultipleSelectLight from "../../components/MultipleSelectLight";

export default function TripInfo() {
  return (
    <div className="row px-5 py-5 rounded-lg bg-blue">
      {/*  Trip Name */}
      <div className="col-6">
        <div className="text-darkblue pb-2 f-16">
          Trip Name <span className="text-orange">*</span>
        </div>
        <div className="f-14 text-darkblue">Give your trip a name</div>
        <div className="light-input">
          <input
            className="px-5 py-4 rounded-lg bg-white text-grey w-full"
            type="text"
            placeholder="Type Here..."
          />
        </div>
      </div>
      {/* Client Name  */}
      <div className="col-6">
        <div className="text-darkblue pb-2 f-16">
          Client Name <span className="text-orange">*</span>
        </div>
        <div className="f-14 text-darkblue">Lead Traveler Name</div>
        <div className="light-input">
          <input
            className="px-5 py-4 rounded-lg bg-white text-grey w-full"
            type="text"
            placeholder="Type Here..."
          />
        </div>
      </div>
      {/* Number of Adults  */}
      <div className="col-6 py-6">
        <div className="text-darkblue pb-2 f-16">
          Number of Adults <span className="text-orange">*</span>
        </div>
        <div className="f-14 text-darkblue">
          Please add the number of adults
        </div>
        <div className="light-input">
          <input
            className="px-5 py-4 rounded-lg bg-white text-grey w-full"
            type="number"
            placeholder="input number"
          />
        </div>
      </div>
      {/* Number of Children  */}
      <div className="col-6 py-6">
        <div className="text-darkblue pb-2 f-16">
          Number of Children <span className="text-orange">*</span>
        </div>
        <div className="f-14 text-darkblue">
          Please add the number of Children
        </div>
        <div className="light-input">
          <input
            className="px-5 py-4 rounded-lg bg-white text-grey w-full"
            type="number"
            placeholder="input number"
          />
        </div>
      </div>
      {/* Trip Dates  */}
      <div className="col-6 py-6">
        <div className="text-darkblue pb-2 f-16">
          Trip Dates <span className="text-orange">*</span>
        </div>
        <div className="f-14 text-darkblue">
          (i.e May 4-9, 2023 or First week or May)
        </div>
        <div className="light-input">
          <input
            className="px-5 py-4 rounded-lg bg-white text-grey w-full"
            type="date"
            placeholder="input date"
          />
        </div>
      </div>
      {/* How flexible are the dates? */}
      <div className="col-6 py-6">
        <div className="text-darkblue pb-2 f-16">
          How flexible are the dates? <span className="text-orange">*</span>
        </div>
        <div className="f-14 text-darkblue">Please select flexible dates</div>
        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Felxible", name: "Felxible" },
              { id: "Very", name: "Very" },
              {
                id: "Age is just a number",
                name: "Age is just a number",
              },
              { id: "Note Flexible", name: "Note Flexible" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>
      {/* Budget Approach */}
      <div className="col-6 py-6">
        <div className="text-darkblue pb-2 f-16">
          Budget Approach
          <span className="text-orange">*</span>
        </div>
        <div className="f-14 text-darkblue">
          Please select one or more Approach
        </div>
        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Felxible", name: "Felxible" },
              { id: "Very", name: "Very" },
              { id: "Not Flexible", name: "Not Flexible" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>
      {/*  Trip Budget */}
      <div className="col-6 py-6">
        <div className="text-darkblue pb-2 f-16">
          Trip Budget
          <span className="text-orange">*</span>
        </div>
        <div className="f-14 text-darkblue">Please select Budget</div>
        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "$5000-$10000", name: "$5000-$10000" },
              { id: "$10000-$15000", name: "$10000-$15000" },
              { id: "$15000-$20000", name: "$15000-$20000" },
              { id: "$20000-$25000", name: "$20000-$25000" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*  Guide Gratuity */}
      <div className="col-12 py-6">
        <div className="text-darkblue pb-2 f-16">
          Would you like us to include a guide gratuity in this quote?
          <span className="text-orange">*</span>
        </div>
        <div className="f-14 text-darkblue">
          Please note: if you choose NO we will include a suggested guide
          gratuity in your confirmation documents with the expectation that you
          will pay guide gratuity locally in the local currency.
        </div>
        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Yes", name: "Yes" },
              { id: "No", name: "No" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>
      {/* Additional info */}
      <div className="col-12">
        <div className="text-darkblue pt-4 pb-2 f-16">
          Please include any additional iformation you would like us to know
        </div>
        <div className="light-input">
          <textarea
            className="px-5 py-4 rounded-lg bg-white text-grey w-full"
            placeholder="Type Information Here..."
            style={{ height: "200px" }}
          />
        </div>
      </div>
    </div>
  );
}
