import React from 'react';
import { useNavigate } from 'react-router-dom';
import Homeimage  from "../assets/Image2.png"// Update this import path as needed

const HomeSection = () => {
  const navigate = useNavigate(); // useNavigate is a hook for programmatic navigation

  return (
    <div className="bg-[#c8dcdc] w-full">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center px-8 py-12 lg:px-24 lg:py-20">
        {/* Left Text */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-[#1e3d3f] leading-tight">
            All Your <br /> Favourite Is <br /> Here
          </h1>
          <p className="text-lg text-gray-700">
            Get Your Branded Electronics Gadgets At Best Prices<br />
            Click The Button And Order 
          </p>
          <button
            className="bg-[#3b3b6d] text-white px-6 py-2 rounded-full font-semibold"
            onClick={() => navigate('/products')}
          >
            SHOP NOW
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-15 lg:mt-0 flex justify-center lg:justify-end">
          <img 
            src={Homeimage} 
            alt="Electronics display" 
            className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
