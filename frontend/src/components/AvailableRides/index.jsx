import React, { useEffect, useState } from 'react'
import CarImg from "../../assets/car.png";
import autoImg from "../../assets/auto.png"
import { ArrowLeftFromLine, ArrowRightFromLine, X } from 'lucide-react';
import PrimaryButton from '../PrimaryButton';
const AvailableRides = ({isShow}) => {
  console.log("from av isShow ",isShow);
  useEffect(() => {
    

  }, [isShow])
  
  const [isConfirmRide, setIsConfirmRide] = useState(false)
  return (
    <>
      <div className="col-span-1 relative">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Available Rides</h3>
                <span className="text-sm text-gray-500">Updated just now</span>
              </div>
            {
              (isShow) ? <>
              <div className="border cursor-pointer hover:border-gray-900 rounded-md p-2 flex justify-between items-center my-2">
              <div className="flex items-center gap-3" onClick={()=>{setIsConfirmRide(true)}}>
                <div className="w-16">
                  <img src={CarImg} alt="" />
                </div>
                <div>
                  <h4 className="font-semibold text-md">Premium Sedan</h4>
                  <p className="text-sm text-gray-600">
                    BMW 5 Series 
                  </p>
                  <div className="flex space-x-4 text-sm text-gray-500 mt-1">
                    <span>18 min</span>
                    <span>4 seats</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h4 className="font-semibold text-green-500"> ₹ 1232.50</h4>
              </div>
            </div>
            <div className="border cursor-pointer hover:border-gray-900 rounded-md p-2 flex justify-between items-center my-2">
              <div className="flex items-center gap-3">
                <div className="w-16">
                  <img src={autoImg} alt="" />
                </div>
                <div>
                  <h4 className="font-semibold text-md">Premium Sedan</h4>
                  <p className="text-sm text-gray-600">
                    Bajaj Auto
                  </p>
                  <div className="flex space-x-4 text-sm text-gray-500 mt-1">
                    <span>10 min</span>
                    <span>3 seats</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h4 className="font-semibold text-green-500"> ₹ 132.10</h4>
              </div>
            </div></> : ""
            }
              
            </div>

            <div className={`absolute bottom-0 left-0 w-full bg-white rounded-lg shadow-md p-4   transition-all duration-1000 overflow-hidden  ${(isConfirmRide) ? "h-full visible opacity-1"  : `h-0 invisible opacity-0`}`}>
                <span className={`absolute top-6 right-6 cursor-pointer ${(!isConfirmRide) ? "invisible" : "visible"}`} onClick={()=>setIsConfirmRide(false)}><X color="#28A745" /></span>
                <h3 className='text-xl font-semibold'>Confirm Ride</h3>
                {/* <span className="text-sm text-gray-500">Confirm Your Ride</span> */}
                <div className='flex w-full justify-center items-center flex-col'>
                  <img className='w-32' src={CarImg}>
                  </img>
                </div>
                <div className='flex flex-col justify-start w-full border-t-4 border-grey-900'>
                <div className='flex gap-2 p-3 '>
                    <span><ArrowLeftFromLine color="#28A745" /></span>
                    <div>
                    <h2 className='text-sm'><span className='font-semibold text-lg'>12 Block,</span><br /> Building, Near Karve Complex, Pune</h2>
                    </div>
                </div>
                </div>
                <div className='flex flex-col justify-start w-full border-t-4 border-grey-900'>
                <div className='flex gap-2 p-3 '>
                    <span><ArrowRightFromLine color="#28A745" /></span>
                    <div>
                    <h2 className='text-sm'><span className='font-semibold text-lg'>Flat 302,</span><br />  Shree Residency, Opposite Phoenix Mall, Viman Nagar, Pune</h2>
                    </div>
                </div>
                </div>
                <div className='flex flex-row justify-between items-center w-full border-t-4 border-grey-900'>
                   <div className='flex justify-center items-center flex-col'>
                    <h4>Seat Capacity</h4>
                    <h4>4</h4>
                   </div>
                   <div className='flex justify-center items-center flex-col'>
                    <h4>Reach In</h4>
                    <h4>20 min</h4>
                   </div>
                   <div className='flex justify-center items-center flex-col'>
                    <h4>Price Cash</h4>
                    <h4>₹ 1234.60</h4>
                </div>
                </div>
                <div className='w-full mt-5'>
                <PrimaryButton content={'confirm Ride'}/>
                </div>

            </div>
          </div> 
    </>
  )
}

export default AvailableRides
