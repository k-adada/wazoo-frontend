"use client";
import React, { useState } from "react";
import "./dist/registration.css";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Registration() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 pt-10 p-3 bg-bluesky">
      <div className="f-48 text-gold text-center">Luxury Travel</div>

      <div className="w-full" style={{ maxWidth: "330px" }}>
        <div className="tabs-container bg-dark-input grid grid-cols-2 gap-2 rounded-lg p-2 my-7">
          <div
            onClick={() => setActiveTab("login")}
            className={(activeTab == "login" && "active") + " tab"}
          >
            <div className={" f-16 text-center p-2"}>Login</div>
          </div>
          <div
            onClick={() => setActiveTab("register")}
            className={(activeTab == "register" && "active") + " tab"}
          >
            <div className={" f-16 text-center p-2"}>Register</div>
          </div>
        </div>
      </div>
      <div className="w-full" style={{ maxWidth: "435px" }}>
        {activeTab == "login" && <Login />}
      </div>
      {activeTab == "register" && <Register />}
    </main>
  );
}
