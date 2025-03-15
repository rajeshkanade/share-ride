import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import RideBook from "../../../components/RideBook";
import AvailableRides from "../../../components/AvailableRides";
import RideMap from "../../../components/RideMap";

function Ride() {
  const [isShow, setIsShow] = useState(false)
  const ShowRide = (value) =>{
    setIsShow(value);
  }

  console.log("isShow : ",isShow);
  useEffect(() => {
    
  }, [isShow])
  
  return (
    <div className="container min-w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto h-full px-4 py-8">
        <div className="grid grid-cols-1  md:grid-cols-[3fr_3fr_4fr] sm:grid-cols-1   gap-8">
          <RideBook setIsShow={ShowRide}/>
         <AvailableRides isShow={isShow}/>
          <RideMap/>
        </div>
      </div>
    </div>
  );
}

export default Ride;
