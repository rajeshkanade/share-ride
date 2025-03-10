import React from 'react'

const AvailableRides = () => {
  return (
    <>
      <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Available Rides</h3>
                <span className="text-sm text-gray-500">Updated just now</span>
              </div>

              <div className="border border-gray-200 rounded-md p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🚗</div>
                  <div>
                    <h4 className="font-semibold">Premium Sedan</h4>
                    <p className="text-sm text-gray-600">
                      BMW 5 Series or similar
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-500 mt-1">
                      <span>18 min</span>
                      <span>4 seats</span>
                      <span className="flex items-center">⭐ Highly Rated</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="font-semibold text-green-500">$32.50</h4>
                  <p className="text-sm text-gray-500">2 min away</p>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div> 
    </>
  )
}

export default AvailableRides
