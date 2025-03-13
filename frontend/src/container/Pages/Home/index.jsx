import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import HomeTwo from '../../../components/HomeTwo'
// import HomeThree from '../../../components/HomeThree'
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full mr-2"></div>
            <span className="text-xl font-bold text-green-500">ShareRide</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-green-500">About</Link>
            <Link to="/how-to-use" className="text-gray-600 hover:text-green-500">How to Use</Link>
            <Link to="/help" className="text-gray-600 hover:text-green-500">Help</Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-500">Contact</Link>
            <Link to="/login" className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-50">Login</Link>
            <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Sign Up</Link>
          </nav>
        </div>
      </header>

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
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <input type="text" placeholder="Enter pickup location" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-lg" />
            </div>
          </div>

          <div className="mb-8 flex items-center text-gray-600">
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
    </div>
  )
}

export default Home
