import react from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import RideBook from "../../../components/RideBook";
import AvailableRides from "../../../components/AvailableRides";
import RideMap from "../../../components/RideMap";

function Ride() {
  return (
    <div className="container min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_3fr_4fr] sm:grid-cols-1   gap-8">
          <RideBook />
         <AvailableRides/>
          <RideMap/>
        </div>
      </div>
    </div>
  );
}

export default Ride;
