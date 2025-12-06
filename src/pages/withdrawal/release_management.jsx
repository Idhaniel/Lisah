"use client";

import { useState } from "react";
import clsx from "clsx";
import { MdHome, MdPerson } from "react-icons/md";
import { IoIosLock, IoMdWallet } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const withdrawalData = [
  {
    id: "1",
    name: "S&P 500 (VOO)",
    value: "$15,000.00",
    change: "+15%",
    statusText: "Releases in 3 days",
    icon: "trending_up",
    autoLiquidation: true,
    released: false,
  },
  {
    id: "2",
    name: "Nasdaq 100 (QQQ)",
    value: "$12,500.00",
    change: "+25%",
    statusText: "Released on 24/05/2024",
    icon: "ssid_chart",
    autoLiquidation: false,
    released: true,
  },
  {
    id: "3",
    name: "Dow Jones (DIA)",
    value: "$22,000.00",
    change: "+8%",
    statusText: "Released on 15/05/2024",
    icon: "candlestick_chart",
    autoLiquidation: true,
    released: true,
  },
];

export default function WithdrawalManagementPage() {
  const [items, setItems] = useState(withdrawalData);
  const [tab, setTab] = useState("nearing");
  const navigate = useNavigate();

  const filtered = items.filter((item) => {
    if (tab === "nearing") return !item.released;
    if (tab === "released") return item.released;
    return true;
  });

  const toggleAuto = (id, val) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, autoLiquidation: val } : p))
    );
  };

  return (
    <div className="min-h-screen w-full bg-background-light font-display">
      {/* Top bar */}
      <header className="flex items-center justify-between sticky top-0 z-10 p-4 pb-2 bg-background-light">
        <div className="size-12 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>

        <h2 className="flex-1 text-center text-lg font-bold">
          Withdrawal Management
        </h2>

        <div className="size-12" />
      </header>

      {/* Tabs */}
      <div className="flex gap-3 p-4 overflow-x-auto">
        {[
          { value: "nearing", label: "Nearing Release" },
          { value: "released", label: "Released" },
          { value: "all", label: "All" },
        ].map((t) => (
          <button
            key={t.value}
            onClick={() => setTab(t.value)}
            className={clsx(
              "shrink-0 rounded-lg px-4 h-8 flex items-center text-sm font-medium",
              tab === t.value
                ? "bg-primary/20 text-black"
                : "bg-background-light text-black"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="px-4 py-3 flex flex-col gap-4 max-w-2xl mx-auto">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-xl shadow bg-background-light p-4 flex flex-col gap-4"
          >
            {/* Row */}
            <div className="flex items-start gap-4">
              <div className="size-12 shrink-0 bg-background-dark rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>

              <div className="flex flex-col flex-1">
                <p className="text-base font-medium">{item.name}</p>
                <p className="text-sm text-zinc-500">
                  {item.value}{" "}
                  <span className="text-green-500 font-medium">
                    ({item.change})
                  </span>
                </p>
                <p className="text-sm text-zinc-500">{item.statusText}</p>
              </div>
            </div>

            {/* Auto-liquidation toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">Auto-Liquidation</p>
                <span className="material-symbols-outlined text-zinc-500">
                  info
                </span>
              </div>

              {/* Tailwind toggle switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={item.autoLiquidation}
                  onChange={(e) => toggleAuto(item.id, e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
                <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
              </label>
            </div>

            {/* Withdraw button */}
            {item.released && (
              <button
                className="w-full bg-primary text-background-dark font-bold py-3 rounded-lg"
                onClick={() => navigate("/choose-bank")}
              >
                Withdraw
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background-light border-t border-zinc-200">
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

function NavItem({ icon, label, active }) {
  return (
    <a
      className={`flex flex-col items-center gap-1 ${
        active ? "text-primary" : "text-[#8c8c5f]"
      }`}
      href="#"
    >
      <span>{icon}</span>
      <p className="text-xs font-medium">{label}</p>
    </a>
  );
}
