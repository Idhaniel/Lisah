"use client";

import React, { useEffect, useState } from "react";
import { MdHome, MdPerson } from "react-icons/md";
import { IoIosLock, IoMdWallet } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function WithdrawalProcessing() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalTime = 60000; // 60 seconds
    const updateInterval = 100;

    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += updateInterval;
      const percent = Math.min((elapsed / totalTime) * 100, 100);
      setProgress(percent);
    }, updateInterval);

    const timeout = setTimeout(() => {
      navigate("/withdrawal-success");
    }, totalTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-background-light min-h-screen flex flex-col">
      {/* MAIN CONTENT - NOW SCROLLABLE */}
      <div className="flex-1 overflow-y-auto p-4 pb-24 flex flex-col items-center justify-center">
        {/* Loading circle */}
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-8">
          <svg
            className="animate-spin h-16 w-16 text-background-dark"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 
                3 7.938l3-2.647z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-[#161811] text-center text-3xl font-bold mb-3 max-w-md px-2">
          Withdrawal in Progress
        </h1>

        <p className="text-[#161811] text-center max-w-sm mb-6 px-2 leading-normal">
          Your funds are on their way and will arrive in your account within 1–3
          business days.
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-sm px-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[#161811] font-medium">Processing your funds</p>
            <p className="text-[#161811]">{Math.floor(progress)}%</p>
          </div>

          <div className="w-full bg-black/10 p-1 rounded-md">
            <div
              className="h-2 rounded bg-primary transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3 w-full max-w-sm mt-50 md:mt-8">
          <button
            className="bg-primary text-[#161811] font-bold h-12 rounded-lg w-full"
            onClick={() => navigate("/portfolio")}
          >
            Go to Dashboard
          </button>

          <button className="border border-gray-300 text-[#161811] font-bold h-12 rounded-lg w-full">
            Contact Support
          </button>
        </div>
      </div>

      {/* FIXED FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background-light border-t border-zinc-300">
        <nav className="grid grid-cols-4 p-3">
          <NavItem icon={<MdHome />} label="Home" />
          <NavItem icon={<IoMdWallet />} label="Invest" />
          <NavItem icon={<IoIosLock />} label="Vault" active />
          <NavItem icon={<MdPerson />} label="Profile" />
        </nav>
      </footer>
    </div>
  );
}

const NavItem = ({ icon, label, active }) => (
  <button
    className={`flex flex-1 flex-col items-center gap-1 py-1 ${
      active ? "text-[#161811]" : "text-[#7c8a60]"
    }`}
  >
    {icon}
    <p className="text-sm font-medium">{label}</p>
  </button>
);
