import React from 'react';
import ProductImage from '../assets/applewatch.png'; 
import Productimage from '../assets/Iphone3.png';
import { useNavigate } from 'react-router-dom';


const Deals = () => {
  const navigate = useNavigate(); // ✅ useNavigate inside the component

  const deals = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      originalPrice: 1399,
      discountPercent: 15,
      imageUrl: ProductImage,
    },
    {
      id: 2,
      name: 'MacBook Air M3',
      originalPrice: 1499,
      discountPercent: 20,
      imageUrl: ProductImage,
    },
    {
      id: 3,
      name: 'Apple Watch Series 9',
      originalPrice: 399,
      discountPercent: 10,
      imageUrl: ProductImage,
    },
    {
      id: 4,
      name: 'AirPods Pro (2nd Gen)',
      originalPrice: 249,
      discountPercent: 25,
      imageUrl: ProductImage,
    },
        {
          id: 5,
          name: 'iPhone 15 Pro Max',
          price: '$1,199',
          imageUrl: Productimage
        },
          {
          id: 6,
          name: 'iPhone 15 Pro Max',
          price: '$1,199',
          imageUrl: Productimage
        },
        {
          id: 7,
          name: 'MacBook Air M3',
          price: '$1,299',
          imageUrl: Productimage
        },
        {
          id: 8,
          name: 'iPad Pro M4',
          price: '$999',
          imageUrl: Productimage
        },
          {
          id: 9,
          name: 'iPad Pro M4',
          price: '$999',
          imageUrl: Productimage
        },
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-10 px-4 font-sans">
      <h1 className="text-4xl font-bold text-center text-[#0B1D51] mb-10">
        🔥 Hot Deals on Apple Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {deals.map((product) => {
          const discountedPrice = (
            product.originalPrice *
            (1 - product.discountPercent / 100)
          ).toFixed(2);

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative flex justify-center items-center p-4 bg-gray-50 rounded-t-xl">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-40 object-contain"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
                  -{product.discountPercent}%
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-[#0B1D51] truncate">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-semibold text-green-600">
                    ${discountedPrice}
                  </span>
                  <span className="text-sm line-through text-gray-500">
                    ${product.originalPrice}
                  </span>
                </div>
                <button
                  className="mt-4 w-full bg-[#0B1D51] hover:bg-[#132a74] text-white font-semibold py-2 rounded-lg transition duration-300"
                  onClick={() => navigate("/price", { state: product })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Deals;
