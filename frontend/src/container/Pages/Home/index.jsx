import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import { LocateIcon, MapPinCheckInside } from 'lucide-react'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [dropout, setDropout] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const openLocationRef = useRef(null)
  console.log("isOpen : ",isOpen) ;
  
const locations = [
  
  "12 Block, Radhakrishna Building, Near Karve Complex, Pune",
  "Flat 302, Shree Residency, Opposite Phoenix Mall, Viman Nagar, Pune",
  "Shop 15, Sai Plaza, Near Swargate Bus Stand, Pune"

]

useEffect(()=>{

},[isOpen])


  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar/>


      <main className="container mx-auto px-4 py-12 flex">
        <div className="w-1/2 pr-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-green-500">Smart Rides,</span>
            <br />
            <span className="text-gray-800">Smarter Savings.</span>
          </h1>

          <div className="flex space-x-4 mb-8">
            <button className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full text-lg font-semibold">
              <span className="mr-2">🚕</span>
              Private Cab
            </button>
            <button className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-full text-lg font-semibold">
              <span className="mr-2">🚗</span>
              Share Cab
            </button>
          </div>

          <div className="mb-8">
            <div className="relative py-3">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#28A745]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </span>
              <input
              value={pickup}
              onChange={(e)=>[
                setPickup(e.target.value)
              ]}
              onClick={()=>{
                setIsOpen(true)
              }}
                type="text"
                placeholder="Enter pickup location"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
              />
            </div>
            <div className="relative py-3">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#28A745]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                value={dropout}
              onChange={(e)=>[
                setDropout(e.target.value)
              ]}
                onClick={()=>{
                  setIsOpen(true);
                }}
                placeholder="Enter Dropped location"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
              />
            </div>
          </div>

          <div className="mb-8 flex relative items-center text-gray-600 z-10">
           {
            (isOpen) ?  <div ref={openLocationRef} className='bg-red absolute w-full bg-gray-100 top-[-35px] '>

            {/* temporary locations  */}
            {
              locations.map((elem,idx)=>{
                return <div key={idx} className="flex justify-start items-center gap-5  border border-1 p-4 hover:border-black rounded-lg cursor-pointer" onClick={()=>{setIsOpen(false)}}>
                <div className='rounded-full flex justify-center items-center'>
                <MapPinCheckInside color="#28A745" />
                </div>
                <div className='text-md font-semibold'>
                  <h4>{elem}</h4>
                </div>
              </div>
              })
            }

          
         
        </div> : ""
           }
            <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
            <span className="text-lg">Use current location</span>
          </div>

          <button className="w-full flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-full text-lg font-semibold hover:bg-green-600">
            <span className="mr-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                ></path>
              </svg>
            </span>
            Find Route
          </button>
        </div>

        <div className="w-1/2 bg-gray-200 rounded-lg">{/* Placeholder for map or image */}</div>
      </main>
    </div>
  )
}

export default Home
