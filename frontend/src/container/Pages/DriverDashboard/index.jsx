"use client";
import React from "react";
import CaptainHeader from "../../../components/CaptainHeader"
import GoOnlineCard from "../../../components/GoOnlineCard"
import RecentTripsSection from "../../../components/RecentTripsSection"
import WeeklySummarySection from "../../../components/WeeklySummarySection";

function DriverDashboard() {
  return (
    <main className="flex flex-col bg-gray-50 min-h-screen">
      <CaptainHeader />
      <section className="flex flex-col gap-6 px-6 py-8">
        <GoOnlineCard />
        <div className="flex gap-6 max-md:flex-col">
          <RecentTripsSection />
          <WeeklySummarySection />
        </div>
      </section>
    </main>
  );
}

export default DriverDashboard;
