"use client";
import React from "react";

function PaymentMethodCard({
  selectedPayment,
  setSelectedPayment,
  paymentOptions,
}) {
  // Payment method icons mapping
  const paymentIcons = {
    card: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path
          fillRule="evenodd"
          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    cash: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    wallet: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
      </svg>
    ),
  };

  // Payment method labels
  const paymentLabels = {
    card: "Credit Card",
    cash: "Cash",
    wallet: "E-Wallet",
  };

  return (
    <article className="bg-white rounded-[12px] p-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-[16px]">
        Payment Method
      </h3>
      <div className="flex gap-[12px] flex-wrap">
        {paymentOptions.map((option) => (
          <button
            key={option}
            className={`flex items-center gap-2 px-4 py-2 rounded-[8px] border ${
              selectedPayment === option
                ? "border-[#22C55E] bg-[#F0FDF4] text-[#22C55E]"
                : "border-[#E5E7EB] text-[#666]"
            } transition-colors`}
            onClick={() => setSelectedPayment(option)}
            aria-pressed={selectedPayment === option}
          >
            {paymentIcons[option]}
            <span className="text-[14px] font-medium">
              {paymentLabels[option]}
            </span>
          </button>
        ))}
      </div>
    </article>
  );
}

export default PaymentMethodCard;
