"use client";
import React, { useState } from "react";
import PasswordInput from "./Password";


export default function Login() {

  return (
    <>
      <div className="">
        {/* username  */}
        <div className="">
          <label className="text-ice self-start pt-3 pb-2">Username</label>
          <input
            className="bg-dark-input text-ice p-4 rounded w-full"
            placeholder="Enter your Username"
            type="text"
          />
        </div>

        {/* password */}
        <div className="password">
          <div className="text-ice self-start pt-3 pb-2">Password</div>
   
          <PasswordInput />
        </div>

        {/* remember me and forgot password */}
        <div className="flex justify-between py-6">
          <div className="flex">
            <input
              type="checkbox"
              className="bg-dark-input text-ice mr-2 rounded"
              name="remember"
              id="remember"
            />
            <label htmlFor="remember" className="text-ice f-12">
              Remember me
            </label>
          </div>
          <div className="text-ice f-12">
            <a href="#">
              <u>Forgot Password?</u>
            </a>
          </div>
        </div>

        {/* login button */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-gold-gradient text-dark-input p-4 w-full rounded"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
