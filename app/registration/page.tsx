"use client";
import React, { useState } from "react";
import "./dist/registration.css";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Registration() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <main className="flex min-h-screen flex-col items-center  p-md-24 p-3 bg-bluesky">
      <div className="f-48 text-gold">Luxury Travel</div>
      <div className="tabs-container w-1/3 bg-dark-input p-2 grid grid-cols-2 gap-2 rounded-lg">
        <div
          onClick={() => setActiveTab("login")}
          className={(activeTab == "login" && "active") + " tab"}
        >
          <div className={" f-20 text-center p-2"}>Login</div>
        </div>
        <div
          onClick={() => setActiveTab("register")}
          className={(activeTab == "register" && "active") + " tab"}
        >
          <div className={" f-20 text-center p-2"}>Register</div>
        </div>
      </div>

      {activeTab == "login" && <Login />}
      {activeTab == "register" && <Register />}
    </main>
  );
}
