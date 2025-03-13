"use client";
import React from "react";

function GoOnlineCard() {
  return (
    <section className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold text-neutral-800">
        Ready to start driving?
      </h2>
      <button className="px-8 py-4 text-base font-medium text-white bg-green-600 rounded-xl shadow-sm">
        Go Online Now
      </button>
    </section>
  );
}

export default GoOnlineCard;
