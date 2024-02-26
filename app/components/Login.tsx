"use client";
import React, { useState } from "react";

export default function Login() {


  return (
        <>
          <div className="w-1/3 pt-4">
            <div className="text-ice self-start pt-3 pb-2">Username</div>
            <input
              className="bg-dark-input text-ice p-3 rounded w-full"
              placeholder="Enter your Username"
              type="text"
            />

            <div className="text-ice self-start pt-3 pb-2">Password</div>
            <input
              className="bg-dark-input text-ice p-3 rounded w-full"
              placeholder="Enter your Password"
              type="password"
            />

            <div className="flex justify-between pt-4">
              <div className="flex">
                <input
                  type="checkbox"
                  className="bg-dark-input text-ice mr-2 rounded"
                />
                <div className="text-ice f-12">Remember me</div>
              </div>
              <div className="text-ice f-12">
                <a href="#">
                  <u>Forgot Password?</u>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-gold-gradient text-dark-input p-3 w-full rounded"
              >
                Login
              </button>
            </div>
          </div>
        </>
  );
}
