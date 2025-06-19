// src/pages/ProductPrice.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductPrice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  if (!product) {
    return <div className="p-10 text-red-500 text-center">No product details available.</div>;
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex justify-center items-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#0B1D51] mb-6">Product Summary</h2>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-contain mb-6 bg-gray-100 rounded-lg"
        />
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-lg text-gray-600 mb-4">Price: <span className="font-bold">{product.price}</span></p>

        <button
          onClick={() => navigate("/payment", { state: product })}
          className="mt-4 bg-[#0B1D51] hover:bg-[#132a74] text-white py-2 px-6 rounded-full transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ProductPrice;
