import React from "react";

function FareSummary() {
  return (
    <>
      <div className="flex shrink-0 mt-4 max-w-full h-px bg-zinc-200 w-full justify-between " />
      <div className="flex gap-5 justify-between mt-2 w-full text-sm">
        <span className="text-gray-500">Base Fare</span>
        <div className="flex  whitespace-nowrap text-neutral-800">
          <span>$</span>
          <span>35.00</span>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-2 w-full text-sm">
        <span className="text-gray-500">Surge (1.2x)</span>
        <div className="flex whitespace-nowrap text-neutral-800">
          <span>$</span>
          <span>7.00</span>
        </div>
      </div>
      <div className="flex shrink-0 mt-2 max-w-full h-px bg-zinc-200 w-full justify-between " />
      <div className="flex gap-5 justify-between mt-2.5 text-base font-medium text-neutral-800">
        <span>Total Fare</span>
        <span>42.50</span>
      </div>
    </>
  );
}

export default FareSummary;
