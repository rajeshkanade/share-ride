"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ActionButtons({setConfirmButtonPanel}) {
    // const [confirmButtonPanel, setConfirmButtonPanel] = useState(false)
    const currentPath = window.location.pathname;
  const handleDecline = () => {
    // Handle decline action
    console.log("Ride declined");
  };

  console.log(currentPath)

  const handleAccept = () => {
    setConfirmButtonPanel(true);
    console.log("Ride accepted");
  };
  useEffect(()=>{
    
  },[])
  return (
    <div className="flex gap-4 mt-6 text-sm font-medium text-center w-full justify-center items-center max-md:max-w-full">
      <button
        onClick={handleDecline}
        className="px-16 py-3.5 text-red-500 whitespace-nowrap bg-gray-50 rounded-lg max-md:px-5"
      >
        Decline
      </button>
      {
        (currentPath == "/captain-assignment") ? <button
        onClick={handleAccept}
        className="px-16 py-3.5 text-white bg-green-600 rounded-lg shadow-[0px_2px_4px_rgba(40,167,69,0.2)] max-md:px-5"
      >
        Accept Ride
      </button>
     :  <Link
     to="/captain-assignment"
     className="px-16 py-3.5  text-white bg-green-600 rounded-lg  shadow-[0px_2px_4px_rgba(40,167,69,0.2)] max-md:px-5"
   >
     View Details
   </Link>
      }
    </div>
  );
}

export default ActionButtons;
