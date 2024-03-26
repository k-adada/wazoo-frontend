"use client";
import React, { useState } from "react";

import MultipleSelectLight from "../../components/MultipleSelectLight";

export default function ClientPreferences() {
  return (
    <div
      className="row px-5 py-5 rounded-lg bg-blue"
      style={{ height: "80vh", overflowY: "auto" }}
    >
      {/*Please describe how the clients most like to experience a destination*  */}
      <div className="col-6 pb-5">
        <div className="text-darkblue f-16 pb-4">
          Describe how the clients like to experience a destination
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              {
                id: "On their own most of the time",
                name: "On their own most of the time",
              },
              {
                id: "One half-day city overview tour in each destination with a good generalist guide and then on own",
                name: "One half-day city overview tour in each destination with a good generalist guide and then on own",
              },
              {
                id: "Full days of touring with a good generalist guide on most days",
                name: "Full days of touring with a good generalist guide on most days",
              },
              {
                id: "Don’t like guides, but do want unique in-destination experiences and tours",
                name: "Don’t like guides, but do want unique in-destination experiences and tours",
              },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*How does the group travel together */}
      <div className="col-6 pb-5">
        <div className="text-darkblue f-16 pb-4">
          How does the group travel together
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              {
                id: "Everyone does everything together at all times",
                name: "Everyone does everything together at all times",
              },
              {
                id: "Usually together, but some may stay behind for strenuous or special activity",
                name: "Usually together, but some may stay behind for strenuous or special activity",
              },
              {
                id: "Kids will stay back with nanny or member of the family",
                name: "Kids will stay back with nanny or member of the family",
              },
              {
                id: "Everyone does their own thing",
                name: "Everyone does their own thing",
              },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*Please describe any travel restrictions of anyone in group */}
      <div className="col-6 py-5">
        <div className="text-darkblue f-16 pb-4">
          Please describe any travel restrictions of anyone in the group
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              {
                id: "Fear of small planes/ prop planes",
                name: "Fear of small planes/ prop planes",
              },
              {
                id: "Helicopter must be twin engine",
                name: "Helicopter must be twin engine",
              },
              { id: "Fear of boats or water", name: "Fear of boats or water" },
              { id: "Fear of heights", name: "Fear of heights" },
              {
                id: "Not comfortable with helicopters",
                name: "Not comfortable with helicopters",
              },
              {
                id: "Gets car-sick or sea-sick easily",
                name: "Gets car-sick or sea-sick easily",
              },
              {
                id: "Allergic to animals (horses, wildlife, etc.)",
                name: "Allergic to animals (horses, wildlife, etc.)",
              },
              { id: "None", name: "None" },
              { id: "Other", name: "Other" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*What is the preferred transportation style of the group* */}
      <div className="col-6 py-5">
        <div className="text-darkblue f-16 pb-4">
          What is the preferred transportation style of the group
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              {
                id: "Sedan car with chauffeur throughout the trip",
                name: "Sedan car with chauffeur throughout the trip",
              },
              {
                id: "Mercedes S Class or similar throughout the trip",
                name: "Mercedes S Class or similar throughout the trip",
              },
              {
                id: "Mini bus Hyundai H1 or similar throughout the trip",
                name: "Mini bus Hyundai H1 or similar throughout the trip",
              },
              {
                id: "Luxury mini bus Mercedes V Class or similar throughout the trip",
                name: "Luxury mini bus Mercedes V Class or similar throughout the trip",
              },
              {
                id: "Luxury SUV Escalade or similar throughout the trip",
                name: "Luxury SUV Escalade or similar throughout the trip",
              },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*How many hotels do they prefer to stay in during the trip? */}
      <div className="col-6 py-5">
        <div className="text-darkblue f-16 pb-4">
          How many hotels do they prefer to stay in during the trip?
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              {
                id: "Stay in one place entire time",
                name: "Stay in one place entire time",
              },
              { id: "1-2 hotels max", name: "1-2 hotels max" },
              {
                id: "3 or more depending on the itinerary",
                name: "3 or more depending on the itinerary",
              },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*Please describe the preferred hotel style?* */}
      <div className="col-6 py-5">
        <div className="text-darkblue f-16 pb-4">
          Please describe the preferred hotel style?
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              {
                id: "Major 5 star chain (Four Seasons, Ritz, Mandarin, etc.)",
                name: "Major 5 star chain (Four Seasons, Ritz, Mandarin, etc.)",
              },
              {
                id: "5 star boutique chain (Montage, Auberge, Aman, Relais Chateaux)",
                name: "5 star boutique chain (Montage, Auberge, Aman, Relais Chateaux)",
              },
              {
                id: "4.5 star chain hotel (Hyatt, Marriott, Intercon)",
                name: "4.5 star chain hotel (Hyatt, Marriott, Intercon)",
              },
              {
                id: "4.5 star lifestyle brand (Thompson, 1 Hotel, Pendry, Andaz)",
                name: "4.5 star lifestyle brand (Thompson, 1 Hotel, Pendry, Andaz)",
              },
              {
                id: "Independent bed and breakfast",
                name: "Independent bed and breakfast",
              },
              {
                id: "Alternative accommodations (Glamp camp, tree-house, cabin, yurt)",
                name: "Alternative accommodations (Glamp camp, tree-house, cabin, yurt)",
              },
              { id: "Other", name: "Other" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*Please describe the preferred bedding configuration */}
      <div className="col-6 py-5">
        <div className="text-darkblue f-16 pb-4">
          Please describe the preferred bedding configuration
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              {
                id: "One king bedded room per couple",
                name: "One king bedded room per couple",
              },
              {
                id: "One king bedded suite for a couple",
                name: "One king bedded suite for a couple",
              },
              {
                id: "Two double beds in room for two adults",
                name: "Two double beds in room for two adults",
              },
              {
                id: "One room with two beds or king + roll-away for family (3-4 guest max)",
                name: "One room with two beds or king + roll-away for family (3-4 guest max)",
              },
              { id: "Two Connecting rooms", name: "Two Connecting rooms" },
              {
                id: "Two rooms (Requested nearby)",
                name: "Two rooms (Requested nearby)",
              },
              {
                id: "King Suite with a separate living area with pull-out or rollaway",
                name: "King Suite with a separate living area with pull-out or rollaway",
              },
              { id: "Multi-bedroom suite", name: "Multi-bedroom suite" },
              {
                id: "Stand-alone residence, apartment, villa, etc. (if available)",
                name: "Stand-alone residence, apartment, villa, etc. (if available)",
              },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/*What is the preferred decor style of accommodation?* */}
      <div className="col-6 py-5">
        <div className="text-darkblue f-16 pb-4">
          What is the preferred decor style of accommodation?
          <span className="text-orange">*</span>
        </div>

        <div className="light-input">
          <MultipleSelectLight
            options={[
              { id: "Ultra-Modern", name: "Ultra-Modern" },
              { id: "Traditional/ Classic", name: "Traditional/ Classic" },
              { id: "Contemporary", name: "Contemporary" },
              {
                id: "Fit with the indigenous culture of the area",
                name: "Fit with the indigenous culture of the area",
              },
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
