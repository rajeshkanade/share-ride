import React from 'react'
import SecondaryButton from '../SecondaryButton'
import PrimaryButton from '../PrimaryButton'

const RideBook = () => {
  return (
    <div>
       <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Book a Ride</h2>

              <div className="space-y-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">📍</span>
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">📍</span>
                    <input
                      type="text"
                      placeholder="Enter destination"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
                <div className="py-3">
                    <PrimaryButton content={'Book Ride'}/>
              <SecondaryButton content={'Schedule for Later'}/>
                </div>
                    

              <div className="bg-green-50 rounded-md p-4 flex items-start space-x-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Quick Booking</h3>
                  <p className="text-sm text-gray-600">Save your favorite locations for faster booking next time!</p>
                </div>
              </div>
            </div>
          </div>
    </div>  
  )
}

export default RideBook
