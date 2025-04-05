import react, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import RideBook from "../../../components/RideBook";
import AvailableRides from "../../../components/AvailableRides";
import RideMap from "../../../components/RideMap";
import axios from "axios";
import { SocketDataContext } from "../../../context/SocketContext";
import { UserDataContext } from "../../../context/UserContext";
import MapView from "../../../components/MapView";

function Ride() {
  const [isShow, setIsShow] = useState(false);
  const [fare, setFare] = useState({});
  const { sendMessage, receiveMessage } = useContext(SocketDataContext);
  const { user } = useContext(UserDataContext);
  const [rideConfirmData, setRideConfirmData] = useState(null);
  const [bookRideInvisible, setBookRideInvisible] = useState(false);
  const { socket } = useContext(SocketDataContext);
  const [locationFromStorage, setLocationFromStorage] = useState({});
  const [pickupCoordinates, setPickupCoordinates] = useState({});
  const [destinationCoordinates, setDestinationCoordinates] = useState({});
  const navigate = useNavigate();
  const ShowRide = (value) => {
    setIsShow(value);
  };
  const location = useLocation();

  console.log("Ride Confirm Data : ", rideConfirmData);

  console.log("location from storage : ", locationFromStorage);
  console.log("pickup coordinates : ", pickupCoordinates);
  console.log("destination coordinates : ", destinationCoordinates);
  console.log("location from storage : ", locationFromStorage);

  const getFareFun = (data) => {
    setFare(data);
  };

  const setBookRideInvisibleFun = (value) => {
    setBookRideInvisible(value);
  };

  const getCoordinates = async (address) => {
    const key = import.meta.env.VITE_GOMAPS_API_KEY;
    // console.log("address : ", address);
    const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${key}`;
    try {
      const response = await axios.get(url);
      // console.log("response data from getCoordinates: ", response.data);
      if (response.data.status === "OK") {
        const location = response.data.results[0].geometry.location;

        return {
          ltd: location.lat,
          lng: location.lng,
        };
      } else {
        // console.error("Error fetching coordinates:", response.data.status);
        throw new Error("Unable to fetch coordinates");

      }
    } catch (error) {
      // console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const storedPickup = localStorage.getItem("pickup");
    const storedDestination = localStorage.getItem("destination");

    const updatedLocation = {
      pickup: storedPickup,
      destination: storedDestination,
    };

    setLocationFromStorage(updatedLocation);


    getAllCoordinates();

  }, []);

  const getAllCoordinates = async () => {
    // console.log("location from storage from getallcoordinates: ", locationFromStorage);
    if (locationFromStorage.pickup) {
      // console.log("pickup location I am here : ", locationFromStorage.pickup);
      getCoordinates(locationFromStorage.pickup)
        .then((data) => {
          // console.log("pickup coordinates : ", data);
          setPickupCoordinates(data);
        })
        .catch((error) => {
          console.error("Error fetching pickup coordinates:", error);
        });
    }

    if (locationFromStorage.destination) {
      getCoordinates(locationFromStorage.destination)
        .then((data) => {
          // console.log("destination coordinates : ", data);
          setDestinationCoordinates(data);
        })
        .catch((error) => {
          console.error("Error fetching destination coordinates:", error);
        });
    }
  }



  useEffect(() => {
    sendMessage("join", { userType: "user", userId: user._id });
    console.log("user is : ", user);

    socket.on("ride-confirmed", (data) => {
      console.log("Ride confirmed: ", data);
      setRideConfirmData(data);
    });

    socket.on("ride-started", (data) => {
      console.log("Ride started: ", data);
      navigate("/riding", { state: { ride: data } }); // Pass ride data as state
    });
  }, [isShow, socket, user]);

  useEffect(() => {
    const rideComplete = location.state?.ride; // Retrieve ride data from state

    if (rideComplete) {
      console.log("ride complete data : ", rideComplete);
      location.state.ride = null; // Reset ride state to normal
      alert("Ride Ended Congrats");
    }
  }, []);

  const createRide = async (vehicleType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup,
        destination,
        vehicleType,
      },
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  return (
    <div className="container min-w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto h-full min-h-screen px-4 py-8">
        <div className={`grid grid-cols-1 md:grid-cols-[3fr_3fr_4fr] sm:grid-cols-1 gap-8 h-full`}>
          <RideBook setIsShow={ShowRide} setFare={getFareFun} />
          <AvailableRides
            isShow={isShow}
            rideConfirmData={rideConfirmData}
            setBookRideInvisible={setBookRideInvisibleFun}
          />
          <MapView pickupLoc={pickupCoordinates} destinationLoc={destinationCoordinates} />
        </div>
      </div>
    </div>
  );
}

export default Ride;
