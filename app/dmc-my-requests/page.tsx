"use client";
import React from "react";
import "./dist/myTrips.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Icons from "../Icons";
import MyTripsTable from "../components/requestTripComponents/MyTripsTable";
import DMCMyTripsTable from "../components/requestTripComponents/DMCMyTripsTable";

export default function MyRequests() {
  const router = useRouter();
  const routerBack = () => {
    router.back();
  };

  const trips = [1];
  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto">
            <div className="flex">
              <div
                className="flex items-center py-5 back-button"
                onClick={routerBack}
              >
                <Image src={Icons.backIcon} alt="back" />
                <div className="pl-2 text-darkblue">Back</div>
              </div>
            </div>
          </div>
          <div className="col-auto self-center">
            <div className="f-36 poppins-semibold text-darkblue ">My Trips</div>
          </div>
        </div>

        {trips.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <div className="row justify-between pt-10">
                <div className="col-auto">
                  <div className="f-16 py-2 px-3 bg-white rounded-lg">
                    Filters
                  </div>
                </div>

                <div className="col-auto relative">
                  <input
                    type="text"
                    className="bg-white py-2 pl-10 rounded-lg w-full w-[400px]"
                    placeholder="Search"
                  />
                  <div className="absolute left-5 top-2">
                    <Image src={Icons.searchIconDark} alt="search" />
                  </div>
                </div>

                <div className="col-12 pt-7">
                  <DMCMyTripsTable />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row items-center justify-center">
            <div className="col-12">
              <div className="text-center">
                <Image
                  className="m-auto"
                  src={Icons.serviceEmptyIconDark}
                  alt="serviceEmptyIcon"
                />
                <div className="f-48 text-darkblue poppins-medium">
                  Your List is Empty
                </div>
                <div className="f-24 text-grey">Start by Requesting a Trip</div>
              </div>
            </div>

            <div className="col-auto pt-[64px]">
              <Link href="/request-trip">
                <div className="dark-button text-gold poppins-medium cursor-pointer">
                  <div className="flex items-center h-full">
                    <Image src={Icons.paperPlaneIconGold} alt="add icon" />
                    <div className="pl-4">Request a Trip</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
