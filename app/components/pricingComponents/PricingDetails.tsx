"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// Dynamically import the RichTextBox component with SSR disabled
const DynamicRichTextBox = dynamic(() => import("../RichTextBox"), {
  ssr: false, // Disable server-side rendering for this component
});

type Props = {
  initialData?: string; // Define any props you want to pass to RichTextBox
};

export default function PricingDetails(props: any) {
  const { title = true } = props;
  const [serviceProviders, setServiceProviders] = useState([
    {
      name: "Price Includes",
      location: "Paris, France",
      phone: "+1234567890",
      total: "$12,000.00",
    },
    {
      name: "Price Excludes",
      location: "Paris, France",
      phone: "+1234567890",
      total: "$12,000.00",
    },
    {
      name: "T’s & C’s",
      location: "Paris, France",
      phone: "+1234567890",
      total: "$12,000.00",
    },
    {
      name: "Additional Notes",
      location: "Paris, France",
      phone: "+1234567890",
      total: "$12,000.00",
    },
  ]);

  const [selectedProvider, setSelectedProvider] = useState(0);

  return (
    <div className="container-fluid pricing-details">
      <div className="row">
        {/* Pricing Details */}
        {title && (
          <div className="col-12 pt-5 pb-4">
            <div className="f-32 text-darkblue poppins-semibold">
              Pricing Details
            </div>
          </div>
        )}

        {/* SERVICE PROVIDERS BAR */}
        <div className="col-12 pt-2">
          <div className="row rounded-lg">
            {/* service provider  */}
            {serviceProviders.map((serviceProvider, index) => (
              <div
                className={
                  (selectedProvider === index
                    ? ""
                    : "  opacity-25 border-right") +
                  (index != serviceProviders.length - 1 && "") +
                  " col-auto py-4 bg-white pointer rounded-lg"
                }
                onClick={() => setSelectedProvider(index)}
                key={serviceProvider.name}
              >
                <div className="px-5">
                  <div className="f-16 text-darkblue text-center poppins-semibold">
                    {serviceProvider.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAYABLES BAR */}
        <div className="col-12">
          <div
            className="row bg-white rounded-lg py-8"
            style={{ minHeight: "290px" }}
          >
            <DynamicRichTextBox initialData={"Notes"} />
          </div>
        </div>
      </div>
    </div>
  );
}
