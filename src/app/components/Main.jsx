'use client'

import { useState } from "react";

export default function Main() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");

  const tipValue = tip === "custom" ? parseFloat(customTip) : tip;
  const billValue = parseFloat(bill);
  const peopleValue = parseInt(people);

  const tipAmount =
    billValue && peopleValue && tipValue? (billValue * (tipValue / 100)) / peopleValue : 0;

  const totalAmount =
    billValue && peopleValue ? billValue / peopleValue + tipAmount : 0;

  const reset = () => {
    setBill("");
    setTip(null);
    setCustomTip("");
    setPeople("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-teal-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl flex flex-col md:flex-row">
        
        <div className="flex-1 p-4">
          
          <label className="block font-bold text-gray-600 text-sm">Bill</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="w-full p-2 mt-1 border rounded bg-gray-100"
            placeholder="$"
          />

          
          <label className="block font-bold text-gray-600 text-sm mt-4">
            Select Tip %
          </label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {[5, 10, 15, 25, 50].map((percentage) => (
              <button
                key={percentage}
                onClick={() => setTip(percentage)}
                className={`p-2 rounded font-semibold ${
                  tip === percentage
                    ? "bg-teal-800 text-white"
                    : "bg-teal-700 text-white"
                }`}
              >
                {percentage}%
              </button>
            ))}
            <input
              type="number"
              value={customTip}
              onChange={(e) => {
                setTip("custom");
                setCustomTip(e.target.value);
              }}
              className="w-full cursor-pointer font-semibold p-2 border rounded bg-gray-100 placeholder:text-center"
              placeholder="Custom"
            />
          </div>

         
          <label className="block font-bold text-gray-600 text-sm mt-4">
            Number of People
          </label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full p-2 mt-1 border rounded bg-gray-100"
            placeholder="👤"
          />
        </div>

        
        <div className="flex-1 p-4 bg-teal-900 text-white rounded-lg">
          <div className="flex justify-between">
            <span className=" font-semibold self-center">Tip Amount / person</span>
            <span className="text-4xl text-green-500 font-extrabold">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className=" font-semibold self-center">Total / person</span>
            <span className="text-4xl text-green-500 font-extrabold">${totalAmount.toFixed(2)}</span>
          </div>
          <button
            onClick={reset}
            className="w-full mt-[7rem] font-bold bg-teal-700 text-gray-800 p-3 rounded hover:bg-teal-600"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
