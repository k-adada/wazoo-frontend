"use client";
import React, { useState } from "react";

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
      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-3">
          {/* email */}
          <div className="col-span-1">
            <div className="text-ice">Email</div>
            <input
              className="bg-dark-input text-ice p-3 rounded w-full"
              placeholder="Enter your Email"
              type="email"
            />
          </div>

          {/* Phone number  */}
          <div className="col-span-1">
            <div className="text-ice">Phone Number</div>
            <div className="flex">
              <select
                className="px-2 bg-dark-input text-ice rounded"
                name=""
                id=""
              >
                <option value="91">912</option>
                <option value="1">1</option>
                <option value="44">44</option>
                <option value="61">61</option>
              </select>
              <input
                className="bg-dark-input text-ice p-3 rounded w-full ml-3"
                placeholder="Enter your Mobile Number"
                type="number"
              />
            </div>
          </div>

          {/* username */}
          <div className="col-span-1">
            <div className="text-ice">Username</div>
            <input
              className="bg-dark-input text-ice p-3 rounded w-full"
              placeholder="Enter your Username"
              type="text"
            />
          </div>

          {/* password */}
          <div className="col-span-1">
            <div className="text-ice">Password</div>
            <input
              className="bg-dark-input text-ice p-3 rounded w-full"
              placeholder="Enter your Password"
              type="password"
            />
          </div>

          {/* organization name */}
          <div className="col-span-2">
            <div className="text-ice">Organization Name</div>
            <input
              className="bg-dark-input text-ice p-3 rounded w-full"
              placeholder="Enter your Organization Name"
              type="text"
            />
          </div>

          {/* Partneship type  */}
          <div className="col-span-1">
            <div className="text-ice">Select Partnership Type</div>

            <select
              className="p-3 bg-dark-input text-ice rounded w-full"
              name=""
              id=""
            >
              <option value="none">none</option>
              <option value="ta">Travel Agency</option>
              <option value="dmc">Destination Management Company</option>
            </select>
          </div>

          {/* where are you based? */}
          <div className="col-span-1">
            <div className="text-ice">Where Are you Based?</div>

            <select
              className="p-3 bg-dark-input text-ice rounded w-full"
              name=""
              id=""
            >
              {cities.map((city) => {
                return (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Register button */}
          <div className="col-span-2">
            <div className="pt-4 w-1/2 m-auto">
              <button
                type="submit"
                className="bg-gold-gradient text-dark-input p-3 w-full rounded"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
