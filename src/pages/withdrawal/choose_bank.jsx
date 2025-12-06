import React, { useState } from "react";
import { MdArrowForwardIos, MdHome, MdPerson } from "react-icons/md";
import { IoIosLock, IoMdAdd, IoMdWallet } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const bankAccounts = [
  { id: "boa", bankName: "Bank of America", maskedNumber: "****1234" },
  { id: "chase", bankName: "Chase", maskedNumber: "****5678" },
];

export default function ChooseBank() {
  const [selectedBank, setSelectedBank] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark text-[#181811] dark:text-background-light flex flex-col">
      {/* ─── Header ───────────────────────────────────── */}
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 z-20 bg-background-light dark:bg-background-dark border-b border-black/5 dark:border-white/10">
        <button
          onClick={() => navigate("/withdrawal/management")}
          className="flex size-12 items-center justify-center"
        >
          <IoArrowBackOutline className="text-xl" />
        </button>

        <h2 className="text-lg font-bold flex-1 text-center">
          Choose Bank for Withdrawal
        </h2>

        <div className="w-12" />
      </header>

      {/* ─── Scrollable Content ───────────────────────── */}
      <main className="p-4 flex flex-col gap-3 flex-1 max-w-xl w-full mx-auto overflow-y-auto pb-40">
        {/* Bank List */}
        {bankAccounts.map((bank) => (
          <label
            key={bank.id}
            className={`flex items-center gap-4 rounded-lg border p-4 bg-white cursor-pointer transition
              ${selectedBank === bank.id && "border-primary bg-primary/20 "}
            `}
          >
            <input
              type="radio"
              name="bank"
              checked={selectedBank === bank.id}
              onChange={() => setSelectedBank(bank.id)}
              className="h-5 w-5 accent-primary"
            />

            <div className="flex flex-col flex-1">
              <p className="text-sm font-medium">{bank.bankName}</p>
              <p className="text-sm text-[#8c8c5f] ">{bank.maskedNumber}</p>
            </div>
          </label>
        ))}

        {/* Add new bank */}
        <div className="rounded-lg border  p-4 cursor-pointer bg-white ">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-background-light  size-10">
                <IoMdAdd />
              </div>
              <p className="truncate">Add New Bank Account</p>
            </div>

            <MdArrowForwardIos />
          </div>
        </div>
      </main>

      {/* ─── Footer (Fixed) ───────────────────────────── */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background-light  border-t border-zinc-200 ">
        {/* Action Button */}
        <div className="p-4">
          <button
            disabled={!selectedBank}
            className="w-full h-12 font-bold bg-primary text-[#181811] rounded-lg disabled:bg-gray-300 mb-5 "
            onClick={() => {
              navigate("/withdrawal-processing");
            }}
          >
            Proceed with Withdrawal
          </button>
        </div>

        {/* Bottom Navigation */}
        <nav className="grid grid-cols-4 border-t border-[#f5f5f0]  p-3 bg-white ">
          <NavItem icon={<MdHome />} label="Home" />
          <NavItem icon={<IoMdWallet />} label="Invest" />
          <NavItem icon={<IoIosLock />} label="Vault" active />
          <NavItem icon={<MdPerson />} label="Profile" />
        </nav>
      </footer>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`flex flex-col items-center gap-1 ${
        active ? "text-primary" : "text-[#8c8c5f] dark:text-[#a0a08c]"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <p className="text-sm font-medium">{label}</p>
    </button>
  );
}
