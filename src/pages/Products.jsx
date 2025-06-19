import React from 'react';
import Productimage from '../assets/Iphone3.png';
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate(); // ✅ useNavigate inside the component

  const appleDevices = [
    {
      id: 99,
      name: 'iPhone 15 Pro Max',
      price: '$1,199',
      imageUrl: Productimage
    },
      {
      id: 0,
      name: 'iPhone 15 Pro Max',
      price: '$1,199',
      imageUrl: Productimage
    },
    {
      id: 1,
      name: 'MacBook Air M3',
      price: '$1,299',
      imageUrl: Productimage
    },
    {
      id: 2,
      name: 'iPad Pro M4',
      price: '$999',
      imageUrl: Productimage
    },
    {
      id: 3,
      name: 'Apple Watch Series 9',
      price: '$399',
      imageUrl: Productimage
    },
    {
      id: 4,
      name: 'AirPods Pro (2nd Gen)',
      price: '$249',
      imageUrl: Productimage
    }
  ];

  return (
    <div className="min-h-screen bg-[#c8dcdc] flex items-center justify-center p-4 font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center text-[#0B1D51] mb-12 drop-shadow-sm">
          Explore Apple Devices
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {appleDevices.map(device => (
            <div
              key={device.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200"
            >
              <div className="w-full h-48 sm:h-56 lg:h-64 flex items-center justify-center bg-gray-100 overflow-hidden">
                <img
                  src={device.imageUrl}
                  alt={device.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/400x300/F5F5F5/4B5563?text=Image+Not+Found`;
                  }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#0B1D51] mb-1 truncate" title={device.name}>
                  {device.name}
                </h2>
                <p className="text-lg font-semibold text-gray-800 mb-4">{device.price}</p>
                <div className="text-right">
                  <button
                    onClick={() => navigate("/price", { state: device })}
                    className="bg-[#0B1D51] hover:bg-[#132a74] text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0B1D51] focus:ring-opacity-50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
