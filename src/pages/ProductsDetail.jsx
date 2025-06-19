// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
  import Productimage from './assets/Iphone3.png';

const productData = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: '$1,199',
    description: 'Latest iPhone with A17 Pro chip.',
    imageUrl: Productimage
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    price: '$1,299',
    description: 'Powerful and portable MacBook.',
    imageUrl: Productimage
  },
  {
    id: 3,
    name: 'iPad Pro M4',
    price: '$999',
    description: 'Top performance for creative work.',
    imageUrl: Productimage
  },
  {
    id: 4,
    name: 'Apple Watch Series 9',
    price: '$399',
    description: 'Track health, fitness and more.',
    imageUrl: Productimage
  },
  {
    id: 5,
    name: 'AirPods Pro (2nd Gen)',
    price: '$249',
    description: 'Immersive sound with ANC.',
    imageUrl: Productimage
  }
];

function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-8 text-center text-red-500">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
        <img src={product.imageUrl} alt={product.name} className="w-full md:w-1/2 object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none" />
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1D51] mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-[#0B1D51]">{product.price}</p>
          </div>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-semibold">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
