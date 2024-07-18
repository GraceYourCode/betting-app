"use client"

import { useState } from "react";
import Game from "./Game";
import Stake from "./Stake";

const BetSlip = () => {
  const [bookingCodeValue, setBookingCodeValue] = useState("");
  return (
    <aside className="bg-sky-800 h-fit max-h-[1000px] no-scrollbar overflow-y-scroll flex-center flex-col gap-y-4 text-white px-1 text-center py-6 text-sm">
      <header className="border-b-2 border-green-400 py-1 uppercase text-[16px] px-4 relative">
        Betslip
        <span className="bg-gray-100 w-5 h-5 rounded-full flex-center justify-center text-xs text-red-600 font-bold right-0 absolute -top-1">
          3
        </span>
      </header>
      <main className="bg-gray-100 w-full text-gray-800">
        {/* <div className="flex flex-col gap-y-4 py-4 px-3">
        <section className="flex-center justify-center px-4 py-8 bg-white text-sky-800">
          Add events to the bet slip or enter a code to load events
        </section>
        <input
          type="text"
          placeholder="Booking code"
          className="outline-none text-xs py-1.5 px-3 text-gray-800"
          value={bookingCodeValue}
          onChange={(e) => setBookingCodeValue(e.target.value.toUpperCase())}
        />
        <button className="bg-green-900 disabled:bg-green-900/30 py-2 text-white" disabled={bookingCodeValue === ""}>Load</button>
        </div> */}
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Stake />
      </main>
    </aside>
  );
};

export default BetSlip;
