import React from "react";
import "./dist/taDashboard.css";
import Image from "next/image";
import Icons from "../Icons";
import Link from "next/link";

export default function DmcDashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-md-24 p-3 bg-lightblue pt-[75px] pb-[100px]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="f-36 poppins-semibold text-darkblue py-5">
              Dashboard
            </div>
          </div>

          <div className="col-auto">
            <Link href="/request-trip">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={Icons.paperPlaneIconGold} alt="submit" />
                  <div className="pl-4">Request a Trip</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-auto">
            <Link href="/explore">
              <div className="dark-button text-gold poppins-medium cursor-pointer">
                <div className="flex items-center h-full">
                  <Image src={Icons.searchIconGold} alt="search" />
                  <div className="pl-4">Explore</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
