"use client";
import React, { useState } from "react";

import MultipleSelectLight from "../../components/MultipleSelectLight";

export default function ClientPreferences() {
  return (
    <div className="row px-5 py-5 rounded-lg bg-blue">
      {/*Please describe how the clients most like to experience a destination*  */}
      <div className="col-6 pb-6">
        <div className="text-darkblue f-16 pb-4">
          Describe how the clients like to experience a destination
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Adventure", name: "adventure" },
              { id: "Cultural", name: "cultural" },
              { id: "Religious", name: "religious" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*How does the group travel together */}
      <div className="col-6 pb-6">
        <div className="text-darkblue f-16 pb-4">
          How does the group travel together
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Adventure", name: "adventure" },
              { id: "Cultural", name: "cultural" },
              { id: "Religious", name: "religious" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*Please describe any travel restrictions of anyone in group */}
      <div className="col-6 py-6">
        <div className="text-darkblue f-16 pb-4">
          Please describe any travel restrictions of anyone in the group
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Adventure", name: "adventure" },
              { id: "Cultural", name: "cultural" },
              { id: "Religious", name: "religious" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*What is the preferred transportation style of the group* */}
      <div className="col-6 py-6">
        <div className="text-darkblue f-16 pb-4">
          What is the preferred transportation style of the group
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Adventure", name: "adventure" },
              { id: "Cultural", name: "cultural" },
              { id: "Religious", name: "religious" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*How many hotels do they prefer to stay in during the trip? */}
      <div className="col-6 py-6">
        <div className="text-darkblue f-16 pb-4">
          How many hotels do they prefer to stay in during the trip?
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Adventure", name: "adventure" },
              { id: "Cultural", name: "cultural" },
              { id: "Religious", name: "religious" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*Please describe the preferred hotel style?* */}
      <div className="col-6 py-6">
        <div className="text-darkblue f-16 pb-4">
          Please describe the preferred hotel style?
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Adventure", name: "adventure" },
              { id: "Cultural", name: "cultural" },
              { id: "Religious", name: "religious" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*Please describe the preferred bedding configuration */}
      <div className="col-6 py-6">
        <div className="text-darkblue f-16 pb-4">
          Please describe the preferred bedding configuration
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Adventure", name: "adventure" },
              { id: "Cultural", name: "cultural" },
              { id: "Religious", name: "religious" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*What is the preferred decor style of accommodation?* */}
      <div className="col-6 py-6">
        <div className="text-darkblue f-16 pb-4">
          What is the preferred decor style of accommodation?
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Adventure", name: "adventure" },
              { id: "Cultural", name: "cultural" },
              { id: "Religious", name: "religious" },
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
