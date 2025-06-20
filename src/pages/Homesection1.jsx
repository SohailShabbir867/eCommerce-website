// components/ImageCarousel.jsx
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/img1.jpg';
import headphone from '../assets/headphone.png';
import airpods from '../assets/airpods2.png';

const images = [
    img1,
    headphone,
    airpods,
 img1,
    headphone,
    airpods,
  img1,
    headphone,
    airpods,
  img1,
    headphone,
    airpods,
];

export default function ImageCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Best Sellers in Clothing, Shoes & Jewelry</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-10"
        >
          {images.map((src, index) => (
            
            <img
              key={index}
              src={src}
              alt={`Item ${index}`}
              className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
