"use client";
import React, { useState } from "react";
import DriverCard from "../DriverCard";
import TripRouteCard from "../TripRouteCard";
import TripSummaryCard from "../TripSummaryCard";
import PaymentMethodCard from "../PaymentMethodCard";
import MapView from "../MapView";
import PassengerProfile from "../PassengerProfile";
import CaptainPaymentCard from "../CaptainPaymentCard";

function CaptainRideStartComp({ ride }) {
  const [passenger, setPassenger] = useState({
    name: ride?.user?.fullname.firstname + " " + ride?.user?.fullname.lastname || "Michael Chen",
    email: ride?.user?.email || "michael.c@rideapp.com",
    rating: ride?.user?.rating || 4.8,
    image: ride?.user?.image || "https://placehold.co/100x100",
  });

  const [paymentStatus, setPaymentStatus] = useState(ride?.paymentStatus || "pending");

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

  return (
    <main className="flex font-[Inter] min-h-screen w-full bg-[#F8FAF8]">
      <div className="flex w-full p-[24px] gap-[24px] max-lg:flex-col">
        <section className="w-[30%] max-lg:w-full flex flex-col gap-[16px] w-full">
          <PassengerProfile passenger={passenger} />
          <TripRouteCard trip={trip} />
          <TripSummaryCard trip={trip} />
          <CaptainPaymentCard paymentStatus={paymentStatus} />
        </section>
      </div>
    </main>
  );
}

export default CaptainRideStartComp;
