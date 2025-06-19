import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get product data from location state (if available)
  const product = location.state;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9]">
        <div className="text-center text-gray-600 text-xl font-semibold">
          🛒 Your cart is empty. <br /> <button
            onClick={() => navigate('/')}
            className="text-blue-600 underline mt-2 inline-block"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const discountedPrice = (
    product.originalPrice *
    (1 - (product.discountPercent || 0) / 100)
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-10 px-4 font-sans">
      <h1 className="text-4xl font-bold text-center text-[#0B1D51] mb-8">
        🛒 Your Cart
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-40 h-40 object-contain rounded-lg border"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#0B1D51]">{product.name}</h2>
            <div className="mt-2">
              <span className="text-green-600 text-xl font-semibold">
                ${discountedPrice}
              </span>{' '}
              {product.discountPercent && (
                <span className="line-through text-gray-500 text-md ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.discountPercent > 0 && (
              <p className="mt-1 text-sm text-red-500">
                You saved {product.discountPercent}%!
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            className="bg-[#0B1D51] hover:bg-[#132a74] text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
            onClick={() => navigate('/payment', { state: product })}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
