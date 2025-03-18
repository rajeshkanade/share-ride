"use client";
import React, { useContext, useEffect, useState } from "react";
import CaptainHeader from "../../../components/CaptainHeader"
import GoOnlineCard from "../../../components/GoOnlineCard"
import RecentTripsSection from "../../../components/RecentTripsSection"
import WeeklySummarySection from "../../../components/WeeklySummarySection";
import { CaptainDataContext } from "../../../context/CaptainContext";
import RideRequestCard from "../../../components/RideRequestCard";
import { Car, X } from "lucide-react";


function CaptainDashboard() {
  const {captain} = useContext(CaptainDataContext);
  const [captainData, setCaptainData] = useState({})
  const [openRequestPanel, setOpenRequestPanel] = useState(false)

  console.log("catpain " ,captain);
  console.log("catpain Data :  " ,captainData);
  useEffect(() => {
      setCaptainData(captain);

  }, [captainData])
  
  
   return (
    <main className="flex flex-col bg-gray-50 min-h-screen relative">
      <CaptainHeader  captainName={captainData?.fullname?.firstname}/>
      <section className="flex flex-col gap-6 px-6 py-8 relative">
          <div onClick={()=>{setOpenRequestPanel(true)}}
          className="absolute left-0 cursor-pointer size-10 flex justify-center items-center rounded-r-lg bg-gray-300">
          <Car color="#28A745" />
          </div>
          {
            (openRequestPanel) ? 
            <div className={`w-[30%] absolute left-[-10px] top-8 bg-white p-4 border-2 rounded-xl border-gray-700 transition-all duration-1000 ${(openRequestPanel) ? "h-full" : "h-0"}`}>
            <div className={
              `absolute right-3 cursor-pointer top-3 size-6 flex justify-center items-center rounded-full `
            } onClick={()=>{setOpenRequestPanel(false)}}>
            <X color="#28A745" />
            </div>
            <RideRequestCard/>
          </div> : ""
          }
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
