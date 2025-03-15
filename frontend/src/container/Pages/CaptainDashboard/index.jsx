"use client";
import React, { useContext, useEffect, useState } from "react";
import CaptainHeader from "../../../components/CaptainHeader"
import GoOnlineCard from "../../../components/GoOnlineCard"
import RecentTripsSection from "../../../components/RecentTripsSection"
import WeeklySummarySection from "../../../components/WeeklySummarySection";
import { CaptainDataContext } from "../../../context/CaptainContext";


function CaptainDashboard() {
  const {captain} = useContext(CaptainDataContext);
  const [captainData, setCaptainData] = useState({})

  console.log("catpain " ,captain);
  console.log("catpain Data :  " ,captainData);
  useEffect(() => {
      setCaptainData(captain);

  }, [captainData])
  
  
   return (
    <main className="flex flex-col bg-gray-50 min-h-screen">
      <CaptainHeader  captainName={captainData?.fullname?.firstname}/>
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

export default CaptainDashboard;
