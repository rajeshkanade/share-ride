"use client";
import React, { useEffect, useState } from "react";
import PassengerInfo from "../PassengerInfo";
import LocationDetails from "../LocationDetails";
import RideDetails from "../RideDetails";
import FareSummary from "../FareSummary";
import ConfirmActionButtons from "../ConfirmActionsButtons"
import ActionButtons from "../ActionButtons";

function RideRequestCard({RideDetails}) {
    const [confirmButtonPanel,setConfirmButtonPanel] = useState(false);
    console.log("confirmButtonPanel : ",confirmButtonPanel);
    const ConfirmPanelFun = (data) =>{
        setConfirmButtonPanel(data);
    }
    useEffect(()=>{
        
    },[confirmButtonPanel])
  return (
    <article className="flex flex-col p-6 mx-auto w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full text-sm max-md:max-w-full">
        <div className="flex gap-2 font-medium text-yellow-400">
          <div className="flex shrink-0 my-auto w-2 h-2 bg-yellow-400 rounded-[26843500px]" />
          <span className="basis-auto">New Ride Request</span>
        </div>
        <time className="text-gray-500">1:23:13 AM</time>
      </div>

      <div className="w-full">
       
      {
        (confirmButtonPanel) ? <> <input type="text" className="w-full px-5 py-4 mt-2 rounded-xl font-mono border border-green-400 focus:border-green-700 focus:outline-none " placeholder="Enter OTP"/><ConfirmActionButtons/> </>  : <ActionButtons setConfirmButtonPanel={ConfirmPanelFun} />
      }
      </div>
      <PassengerInfo />
      <LocationDetails />
      {/* {RideDetails} */}
        {
            (RideDetails) ? 
      <RideDetails/>
      : ""
    }
    </article>
  );
}

export default RideRequestCard;
