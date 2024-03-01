"use client";
import React, { useState } from "react";
import PasswordInput from "./Password";
import MultipleSelect from "./MultipleSelect";
import Link from "next/link";

export default function Register() {
  const [cities, setCities] = useState([
    { id: 1, name: "Mumbai" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Bangalore" },
    { id: 4, name: "Hyderabad" },
    { id: 5, name: "Beirut" },
    { id: 6, name: "Cairo" },
    { id: 7, name: "Dubai" },
    { id: 8, name: "Istanbul" },
    { id: 9, name: "Jerusalem" },
    { id: 10, name: "Marrakech" },
  ]);

  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 gap-3">
          {/* email */}
          <div className="md:col-span-1 col-span-2">
            <div className="text-ice py-3">Email</div>
            <input
              className="bg-dark-input text-ice p-4 rounded-lg w-full"
              placeholder="Enter your Email"
              type="email"
            />
          </div>

          {/* Phone number  */}
          <div className="md:col-span-1 col-span-2">
            <div className="text-ice py-3">Phone Number</div>
            <div className="flex">
              <select
                className="px-2 bg-dark-input text-ice rounded-lg"
                name=""
                id=""
              >
                <option value="91">912</option>
                <option value="1">1</option>
                <option value="44">44</option>
                <option value="61">61</option>
              </select>
              <input
                className="bg-dark-input text-ice p-4 rounded-lg w-full ml-2"
                placeholder="Enter your Mobile Number"
                type="number"
              />
            </div>
          </div>

          {/* username */}
          <div className="md:col-span-1 col-span-2">
            <div className="text-ice py-3">Username</div>
            <input
              className="bg-dark-input text-ice p-4 rounded-lg w-full"
              placeholder="Enter your Username"
              type="text"
            />
          </div>

          {/* password */}
          <div className="md:col-span-1 col-span-2 password">
            <div className="text-ice py-3">Password</div>
            <PasswordInput />
          </div>

          {/* organization name */}
          <div className="md:col-span-1 col-span-2">
            <div className="text-ice py-3">Organization Name</div>
            <input
              className="bg-dark-input text-ice p-4 rounded-lg w-full"
              placeholder="Enter your Organization Name"
              type="text"
            />
          </div>

          {/* Partneship type  */}
          <div className="md:col-span-1 col-span-2">
            <div className="text-ice py-3">Select Partnership Type</div>

            <select
              className="p-4 bg-dark-input text-ice rounded-lg w-full"
              name=""
              id=""
              style={{ height: "56px" }}
            >
              <option value="none">none</option>
              <option value="ta">Travel Agency</option>
              <option value="dmc">Destination Management Company</option>
            </select>
          </div>

          {/* where are you based? */}
          <div className="col-span-2">
            <div className="text-ice py-3">Where Are you Based?</div>
            <MultipleSelect options={cities} />
          </div>

          {/* Register button */}
          <div className="col-span-2">
            <div className="pt-4 md:w-1/2 w-full m-auto">
              <Link href="/destinations">
                <button
                  type="submit"
                  className="bg-gold-gradient text-dark-input p-4 w-full rounded-lg poppins-medium"
                  onClick={() => console.log("Register")}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
