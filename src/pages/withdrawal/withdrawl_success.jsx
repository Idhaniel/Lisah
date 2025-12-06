"use client";

import React from "react";
import { MdHome, MdPerson } from "react-icons/md";
import { IoIosLock, IoMdWallet } from "react-icons/io";
import CheckLogo from "../../assets/images/check.png";
import { useNavigate } from "react-router-dom";

export default function WithdrawalSuccess({
  amount = "$1,250.00",
  bankDetails = "Bank of America ending in 1234",
  transactionId = "ABC123XYZ456",
}) {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen flex flex-col font-display">
      {/* MAIN CONTENT */}
      <div className="flex flex-col flex-grow items-center justify-center p-4 text-center">
        <div className="flex flex-col items-center justify-center space-y-6 max-w-xl flex-grow">
          {/* Check Icon */}
          <img
            src={CheckLogo}
            alt="check"
            className="h-40 w-40 object-contain"
          />

          <h1 className="text-3xl font-bold">Withdrawal Complete!</h1>

          <p className="text-base max-w-sm">
            Your funds are on their way to your bank account.
          </p>

          {/* DETAILS CARD */}
          <div className="w-full max-w-md bg-card-light dark:bg-card-dark rounded-xl shadow p-4">
            <DetailItem label="Amount" value={amount} />
            <DetailItem label="Destination" value={bankDetails} border />
            <DetailItem label="Transaction ID" value={transactionId} />
          </div>

          {/* ACTION BUTTON */}
          <div className="w-full max-w-md pt-4">
            <button
              className="w-full bg-primary text-background-dark font-bold py-3 h-14 rounded-lg text-lg "
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <BottomNav />
    </div>
  );
}

const DetailItem = ({ label, value, border }) => (
  <div
    className={`flex justify-between gap-x-6 py-3 ${
      border ? "border-b border-gray-200 dark:border-gray-700" : ""
    }`}
  >
    <p className="text-muted-text-light dark:text-muted-text-dark text-sm">
      {label}
    </p>
    <p className="text-text-light dark:text-text-dark text-sm font-bold text-right">
      {value}
    </p>
  </div>
);

const BottomNav = () => {
  const items = [
    { icon: <MdHome size={24} />, label: "Home", active: true },
    { icon: <IoMdWallet size={24} />, label: "Vault" },
    { icon: <IoIosLock size={24} />, label: "Analytics" },
    { icon: <MdPerson size={24} />, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-card-light dark:bg-card-dark border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-around items-center h-16 max-w-xl mx-auto">
        {items.map((item, i) => (
          <NavButton key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const NavButton = ({ icon, label, active }) => (
  <button
    className={`flex flex-col items-center justify-center text-sm ${
      active
        ? "text-primary font-semibold"
        : "text-muted-text-light dark:text-muted-text-dark"
    }`}
  >
    <span>{icon}</span>
    <span>{label}</span>
  </button>
);
