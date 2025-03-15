import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
<<<<<<< HEAD
import Footer from '../../../components/Footer'

=======
import { LocateIcon, MapPinCheckInside } from 'lucide-react'
>>>>>>> frontend

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
            <span className="text-green-500">Smart Rides,</span><br />
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
<<<<<<< HEAD
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <input type="text" placeholder="Enter pickup location" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-lg" />
=======
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
>>>>>>> frontend
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
            </span>
            Find Route
          </button>
        </div>

        <div className="w-1/2 bg-gray-200 rounded-lg">
          {/* Placeholder for map or image */}
        </div>
      </main>


      <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">🚲</div>
            <h3 className="font-semibold mb-2">Bike</h3>
            <p className="text-gray-600">Quick and affordable rides for solo travelers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">💚</div>
            <h3 className="font-semibold mb-2">Auto</h3>
            <p className="text-gray-600">Convenient three-wheeler rides</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">🚗</div>
            <h3 className="font-semibold mb-2">Auto Share</h3>
            <p className="text-gray-600">Share your auto ride, save more</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">🚕</div>
            <h3 className="font-semibold mb-2">Cab Economy</h3>
            <p className="text-gray-600">Affordable car rides for comfort</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="font-semibold mb-2">Cab Economy Share</h3>
            <p className="text-gray-600">Share your ride, split the fare</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">👤</div>
            <h3 className="font-semibold mb-2">Cab Premium</h3>
            <p className="text-gray-600">Luxury rides for special occasions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">🚘</div>
            <h3 className="font-semibold mb-2">Cab Premium Share</h3>
            <p className="text-gray-600">Share luxury rides at better rates</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="font-semibold mb-2">Outstation</h3>
            <p className="text-gray-600">Long distance travel made comfortable</p>
          </div>
        </div>
      </section>

      {/* Add more sections as needed */}
    </main>

    <div className="w-full max-w-[1400px] mx-auto bg-white shadow-lg rounded-xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
      
      {/* Left Section */}
      <div className="flex-1 w-full">
        <h2 className="text-2xl font-bold">Log in to see your recent activity</h2>
        <p className="text-gray-600 mt-1 text-base">
          View past trips, tailored suggestions, support resources, and more.
        </p>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center text-center">
            <span className="text-green-600 text-2xl">⏳</span>
            <p className="font-semibold text-sm mt-2">Access History</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center text-center">
            <span className="text-green-600 text-2xl">⚙️</span>
            <p className="font-semibold text-sm mt-2">Get Personalized</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center text-center">
            <span className="text-green-600 text-2xl">🏷</span>
            <p className="font-semibold text-sm mt-2">Discover Offers</p>
          </div>
        </div>

        {/* Login Button & Sign-Up (Same Line) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-base hover:bg-green-600 transition">
            Log in to your account
          </button>
          <p className="text-gray-600 text-sm">
            Don't have an account? <a href="#" className="text-green-600 font-semibold">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right Section (Image Placeholder) */}
      <div className="w-[300px] h-[260px] bg-gray-300 rounded-lg hidden lg:block"></div>
      
    </div>
    <Footer/>
      <Footer/>
    </div>
  )
}

export default Home;
