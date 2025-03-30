import react, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import RideBook from "../../../components/RideBook";
import AvailableRides from "../../../components/AvailableRides";
import RideMap from "../../../components/RideMap";
import axios from "axios";
import { SocketDataContext } from "../../../context/SocketContext";
import { UserDataContext } from "../../../context/UserContext";
function Ride() {
  const [isShow, setIsShow] = useState(false)
  const [fare, setFare] = useState({})
  const {sendMessage , receiveMessage} = useContext(SocketDataContext);
  const {user} = useContext(UserDataContext);
  const [rideConfirmData , setRideConfirmData] = useState(null);
  const [bookRideInvisible, setBookRideInvisible] = useState(false)
  const {socket} = useContext(SocketDataContext);
  const navigate = useNavigate();
  const ShowRide = (value) =>{
    setIsShow(value);
  }

  const getFareFun = (data) => {
    setFare(data);
  }

  const setBookRideInvisibleFun = (value) =>{
    setBookRideInvisible(value);
  }


  // console.log("isShow : ",isShow);
  useEffect(() => {
    sendMessage("join", {userType : "user" , userId : user._id})
    console.log("user is : ",user);

    socket.on("ride-confirmed", (data) => {
      console.log("Ride confirmed: ", data);
      setRideConfirmData(data);
    });

    socket.on("ride-started", (data) => {
      console.log("Ride started: ", data);
      navigate("/riding", { state: { ride: data } }); // Pass ride data as state
    });
  }, [isShow,socket,user])

  const createRide = async(vehicleType) =>{
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup, 
      destination,
      vehicleType
    }, 
    {
      headers : {
        Authorization : `bearer ${localStorage.getItem("token")}`
      }
    }
  )
  }

  
  return (
    <div className="container min-w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto h-full min-h-screen px-4 py-8">
        <div className={` grid grid-cols-1  md:grid-cols-[3fr_3fr_4fr] sm:grid-cols-1  gap-8 h-full`}>
        {/* <div className={`${!bookRideInvisible ?" grid grid-cols-1  md:grid-cols-[3fr_3fr_4fr] sm:grid-cols-1 " : " grid grid-cols-1 sm:grid-cols-2 gap-4" } gap-8 h-full`}> */}
      
      <RideBook setIsShow={ShowRide} setFare={getFareFun} /> 
      {/* {
        (!bookRideInvisible) ? <RideBook setIsShow={ShowRide} setFare={getFareFun} /> : null
      } */}
          
        
         <AvailableRides isShow={isShow} rideConfirmData={rideConfirmData} setBookRideInvisible={setBookRideInvisibleFun}/>
          <RideMap/>
        </div>
      </div>
    </div>
  );
}

export default Ride;
