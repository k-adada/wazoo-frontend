"use client";
import React, { useEffect, useState } from "react";
import "./dist/dmcDashboard.css";
import LeftDrawerDMC from "../components/LeftDrawerDMC";

export default function Destinations() {
  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pb-[100px]">
      <div className="container-fluid">
        <div className="row items-center">
          <div className="col-auto">
            <LeftDrawerDMC />
          </div>
          <div className="col-auto">
            <div className="poppins-semibold text-darkblue">France</div>
          </div>
          <div className="col">SEARCH HERE</div>
          <div className="col-auto">NOTI</div>
          <div className="col-auto">
            <div className="poppins-medium text-darkblue">Brit Ferguson</div>
          </div>
        </div>
      </div>
    </main>
  );
}
