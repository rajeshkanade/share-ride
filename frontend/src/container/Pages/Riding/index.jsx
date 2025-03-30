"use client";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import CaptainStatusBar from "../../../components/CaptainStatusBar";
import RideRequestCard from "../../../components/RideRequestCard";
import MapView from "../../../components/MapView";
import RideDetails from "../../../components/RideDetails";
import Ride from "../Ride";
import Footer from "../../../components/Footer";
import { RideDataContext } from "../../../context/RideContext";
import { CaptainDataContext } from "../../../context/CaptainContext";
import Navbar from "../../../components/Navbar";
import RideStartDetails from "../../../components/RideStartDetails";

function Riding() {
  const location = useLocation();
  const ride = location.state?.ride; // Retrieve ride data from state
  const { captain } = useContext(CaptainDataContext);
  const getDistanceAndTime = () => {};

  console.log("rides from ass : ", ride);

  return (
    <main className="overflow-hidden  bg-white min-h-screen">
      <Navbar />
      <RideStartDetails ride={ride} /> {/* Pass ride data to RideStartDetails */}
    </main>
  );
}

export default Riding;
