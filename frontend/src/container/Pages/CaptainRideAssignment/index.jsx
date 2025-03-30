"use client";
import React, { useContext, useEffect, useState } from "react";
import CaptainStatusBar from "../../../components/CaptainStatusBar";
import RideRequestCard from "../../../components/RideRequestCard";
import MapView from "../../../components/MapView";
import RideDetails from "../../../components/RideDetails";
import Ride from "../Ride";
import Footer from "../../../components/Footer"
import { RideDataContext } from "../../../context/RideContext";
import { CaptainDataContext } from "../../../context/CaptainContext";
import CaptainRideStartComp from "../../../components/CaptainRIdeStartComp";
import axios from "axios";
function CaptainRideAssignment() {
  const [rideStartCard, setRideStartCard] = useState(false)
  const {ride} = useContext(RideDataContext);
  const {captain} = useContext(CaptainDataContext);
  const [otp,setOtp] = useState("");
  const [rideData, setRideData] = useState(null);
  const getDistanceAndTime = () =>{

  }
  console.log("rides from ass : ",ride )
  console.log("token from storage : ", localStorage.getItem("token"));

  function setRideStartCardFun(data){
    setRideStartCard(data);
  }

  function setRideDataFun(data){
    setRideData(data);
  }
    
  useEffect(() => {
  }, [rideStartCard, rideData])
  

  return (
    <main className="overflow-hidden  bg-white min-h-screen">
      <section className="w-full bg-gray-100 max-md:max-w-full ">
        <CaptainStatusBar captain={captain} />
        <div className="max-md:max-w-full w-full h-full">
          <div className="flex w-full max-md:flex-col ">
            <div className="w-[30%] max-md:ml-0 max-md:w-full p-5">
             {
              (!rideStartCard) ? (
                <RideRequestCard
                  captain={captain}
                  ride={ride}
                  setRideStartCard={setRideStartCardFun}
                  // handleSubmit={handleSubmit}
                  RideDetails={RideDetails}
                  setRideData={setRideDataFun}
                />
              ) : (
                <CaptainRideStartComp ride={rideData} />
              )
             }
            </div>
            <div className=" w-[70%] p-5 h-[90vh]  max-md:ml-0 max-md:w-full">
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
