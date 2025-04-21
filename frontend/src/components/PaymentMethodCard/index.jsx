"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

function PaymentMethodCard({ selectedPayment, setSelectedPayment, paymentOptions }) {
  const [paymentDone, setPaymentDone] = useState(false);

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

  // Function to handle payment success
  const paymentSuccessful = () => {
    toast.success("Payment Successful!");
    setPaymentDone(true);
  };

  return (
    <article className="bg-white rounded-[12px] p-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-[16px]">Payment</h3>
      {paymentDone ? (
        <div className="bg-green-50 rounded-md p-4 flex items-start space-x-4">
          <div className="text-2xl">⚡</div>
          <div>
            <h3 className="font-semibold text-gray-800">Payment Done</h3>
            <p className="text-sm text-gray-600">Thank you for your payment!</p>
          </div>
        </div>
      ) : (
       <div class="flex justify-center items-center w-full"><button class="flex justify-center items-center w-full py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4">Ride Completed</button></div>
      )}
    </article>
  );
}

export default PaymentMethodCard;
