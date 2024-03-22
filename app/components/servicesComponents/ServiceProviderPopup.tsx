"use client";
import React from "react";
import Image from "next/image";

import addGoldIcon from "../../assets/Icon_Add.png";
import SelectSPTable from "../../components/serviceProvidersComponents/SelectSPTable";

export default function ServiceProviderPopup(props: any) {
  const { selectProviderPopup, setSelectProviderPopup } = props;
  return (
    <>
      {selectProviderPopup != "false" && (
        <>
          <div className="overlay-dark"></div>
          <div className="popup-container bg-grey rounded-lg px-10 py-10">
            {selectProviderPopup == "select" && (
              <>
                <div className="f-36 poppins-semibold text-darkblue text-center pb-10">
                  Select Provider(s) for this service
                </div>
                <div className="flex justify-end pb-4">
                  <div className="light-input w-1/4">
                    <input
                      className="px-5 py-2 rounded-lg bg-white text-grey w-full"
                      type="text"
                      placeholder="Search Service Provider"
                    />
                  </div>
                  <div
                    className="dark-button flex text-gold items-center w-1/4 justify-center poppins-medium f-16 ml-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("create");
                    }}
                  >
                    <div className="">
                      <Image src={addGoldIcon} alt="add icon" />
                    </div>
                    <div className="pl-4">Add New Provider</div>
                  </div>
                </div>
                <div className="">
                  <SelectSPTable />
                </div>

                <div className="flex justify-between pt-5">
                  <div
                    className="light-button flex text-darkblue items-center w-full justify-center poppins-medium f-16 mr-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("false");
                    }}
                  >
                    cancel
                  </div>
                  <div
                    className="dark-button flex text-gold items-center w-full justify-center poppins-medium f-16 ml-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("false");
                    }}
                  >
                    <div className="">
                      <Image src={addGoldIcon} alt="add icon" />
                    </div>
                    <div className="pl-4">Link Service Provider(s)</div>
                  </div>
                </div>
              </>
            )}

            {selectProviderPopup == "create" && (
              <>
                <div className="f-36 poppins-semibold text-darkblue text-center pb-10">
                  Create new Service Provider
                </div>

                <div className="row">
                  {/* name  */}
                  <div className="col-12">
                    <div className="text-darkblue pb-2 pt-5 f-20">
                      Service Provider Name{" "}
                      <span className="text-orange">*</span>
                    </div>
                    <div className="light-input">
                      <input
                        className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                        type="text"
                        placeholder="Service Provider Name"
                      />
                    </div>
                  </div>
                  {/* number  */}
                  <div className="col-6">
                    <div className="text-darkblue pb-2 pt-5 f-20">
                      Phone Number
                    </div>
                    <div className="light-input">
                      <input
                        className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                        type="number"
                        placeholder="e.g: +1234567890"
                      />
                    </div>
                  </div>
                  {/* email  */}
                  <div className="col-6">
                    <div className="text-darkblue pb-2 pt-5 f-20">
                      Email <span className="text-orange">*</span>
                    </div>
                    <div className="light-input">
                      <input
                        className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                        type="email"
                        placeholder="e.g: exemple@email.com"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-12">
                    <div className="text-darkblue pt-5 pb-2 f-20">
                      Description <span className="text-orange">*</span>
                    </div>
                    <div className="light-input">
                      <textarea
                        className="px-5 py-4 rounded-lg bg-white text-grey w-full"
                        placeholder="Description"
                        style={{ height: "200px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-10">
                  <div
                    className="light-button flex text-darkblue items-center w-full justify-center poppins-medium f-16 mr-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("select");
                    }}
                  >
                    cancel
                  </div>
                  <div
                    className="dark-button flex text-gold items-center w-full justify-center poppins-medium f-16 ml-2 pointer"
                    onClick={() => {
                      setSelectProviderPopup("select");
                    }}
                  >
                    <div className="">
                      <Image src={addGoldIcon} alt="add icon" />
                    </div>
                    <div className="pl-4">Create Service Provider</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
