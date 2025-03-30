"use client";
import React, { useState } from "react";
import DriverCard from "../DriverCard";
import TripRouteCard from "../TripRouteCard";
import TripSummaryCard from "../TripSummaryCard";
import PaymentMethodCard from "../PaymentMethodCard";
import MapView from "../MapView";

function RideStartDetails({ ride }) {
  const [driver, setDriver] = useState({
    name: ride?.captain?.fullname.firstname + " " + ride?.captain?.fullname.lastname || "N/A",
    email: ride?.captain?.email || "N/A",
    rating: ride?.captain?.rating || "N/A",
    image: ride?.captain?.image || "https://placehold.co/100x100",
  });

  const [trip, setTrip] = useState({
    pickup: ride?.pickup || "N/A",
    destination: ride?.destination || "N/A",
    distance: (ride?.distance / 1000).toFixed(2) || "N/A",
    duration: {
      hours : Math.floor(ride?.duration / 3600) || "N/A",
      minutes : Math.floor((ride?.duration / 60) % 60) || "N/A",
    },
    price: ride?.fare || 0,
    discount: ride?.fare * 2 /100 || 0,
  });

  const [selectedPayment, setSelectedPayment] = useState("card");
  const [paymentOptions, setPaymentOptions] = useState([
    "card",
    "cash",
    "wallet",
  ]);

  return (
    <main className="flex font-[Inter] min-h-screen w-screen bg-[#F8FAF8]">
      <div className="flex w-full p-[24px] gap-[24px] max-lg:flex-col">
        <section className="w-[30%] max-lg:w-full flex flex-col gap-[16px]">
          <DriverCard driver={driver} />
          <TripRouteCard trip={trip} />
          <TripSummaryCard trip={trip} />
          <PaymentMethodCard
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            paymentOptions={paymentOptions}
          />
        </section>
        <div className="h-[90%] w-full">
        <MapView />
        </div>
      </div>
    </main>
  );
}

export default RideStartDetails;
