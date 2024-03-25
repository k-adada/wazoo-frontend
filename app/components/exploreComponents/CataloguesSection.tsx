import React from "react";
import Image from "next/image";

import Images from "@/app/Images";

import Link from "next/link";
import threeDotsIcon from "../../assets/three_dots_white.png";
import casinoImage from "../../assets/Bellagio-Hotel-Casino-Las-Vegas.webp";

export default function CataloguesSection() {
  return (
    <div className="row mt-2" style={{ maxWidth: "95%" }}>
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div className="col-2xl-3 col-lg-4 col-md-6 py-3 px-5" key={index}>
            <Link href="/catalogue">
              <div className="row bg-white rounded-lg py-2 bg-white catalogue-card">
                <div className="col-12 pb-4 px-2">
                  <div className="image-wrapper-83">
                    <Image src={casinoImage} alt="casinoImage" />
                  </div>
                  <div className="absolute top-2 right-8 pointer">
                    <Image
                      src={threeDotsIcon}
                      alt="three dots"
                      className="three-dots"
                    />
                  </div>

                  <div className="absolute bottom-8 left-8 pointer">
                    <div className="rounded-full bg-white text-grey flex items-center justify-center pl-1 pr-2 py-1">
                      <Image
                        src={Images.avatarIcon}
                        alt="avatar"
                        className="rounded-full"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <div className="pl-1 f-14">DMC Name</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-2 flex justify-between">
                  <div className="f-18 text-darkblue poppins-medium">
                    Service Catalogue Name {index + 1}
                  </div>
                </div>

                <div className="col-12 px-2 pb-4">
                  <div className="f-14 text-grey pt-2 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam voluptates eveniet iste corrupti! Cum,
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="bg-grey text-darkblue rounded-xl px-2 py-1 f-12">
                    #Outdoor activity
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="bg-grey text-darkblue rounded-xl px-2 py-1 f-12">
                    #Beach&Sun
                  </div>
                </div>

                <div className="col-auto px-2 py-1">
                  <div className="bg-grey text-darkblue rounded-xl px-2 py-1 f-12">
                    #Snow&Skii
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="bg-grey text-darkblue rounded-xl px-2 py-1 f-12">
                    #Snow&Skii
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="bg-grey text-darkblue rounded-xl px-2 py-1 f-12">
                    #Snow&Skii
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="bg-grey text-darkblue rounded-xl px-2 py-1 f-12">
                    #Snow&Skii
                  </div>
                </div>
                <div className="col-auto px-2 py-1">
                  <div className="bg-grey text-darkblue rounded-xl px-2 py-1 f-12">
                    #Skii
                  </div>
                </div>

                <div className="col-12 flex items-center justify-between pt-3">
                  <div className="text-darkblue f-14 poppins-medium">
                    Itineraries
                    <div className="flex">
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                        }}
                        src={casinoImage}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-50%)",
                        }}
                        src={casinoImage}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-100%)",
                        }}
                        src={casinoImage}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-150%)",
                        }}
                        src={casinoImage}
                        alt="casino"
                      />
                    </div>
                  </div>
                  <div className="text-darkblue f-14 poppins-medium pr-10">
                    Services
                    <div className="flex">
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                        }}
                        src={casinoImage}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-50%)",
                        }}
                        src={casinoImage}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-100%)",
                        }}
                        src={casinoImage}
                        alt="casino"
                      />
                      <Image
                        className="rounded-full"
                        style={{
                          width: "36px",
                          height: "36px",
                          transform: "translateX(-150%)",
                        }}
                        src={casinoImage}
                        alt="casino"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
