"use client";
import React from "react";
import CaptainStatusBar from "../../../components/CaptainStatusBar";
import RideRequestCard from "../../../components/RideRequestCard";
import MapView from "../../../components/MapView";
import RideDetails from "../../../components/RideDetails";
import Ride from "../Ride";
import Footer from "../../../components/Footer"

function CaptainRideAssignment() {
  return (
    <main className="overflow-hidden  bg-white min-h-screen">
      <section className="w-full bg-gray-50 max-md:max-w-full">
        <CaptainStatusBar />
        <div className="max-md:max-w-full w-full">
          <div className="flex w-full max-md:flex-col">
            <div className="w-[35%] max-md:ml-0 max-md:w-full">
              <RideRequestCard  RideDetails={RideDetails}/>
            </div>
            <div className=" w-[65%] max-md:ml-0 max-md:w-full">
              <MapView />
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </main>
  );
}

export default CaptainRideAssignment;
