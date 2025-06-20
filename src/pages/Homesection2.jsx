import image from "../assets/applewatch.png";
import {Link } from "react-router-dom";



const data = [
  {
    title: "Deals on top categories",
    items: [
      { label: "Books", img: image },
      { label: "Fashion", img: image },
      { label: "PC", img:  image},
      { label: "Beauty", img: image },
    ],
  },
  {
    title: "Most-loved watches",
    items: [
      { label: "Women", img:  image },
      { label: "Men", img:  image },
      { label: "Girls", img:  image },
      { label: "Boys", img:  image },
    ],
  },
  {
    title: "Gaming merchandise",
    items: [
      { label: "Apparel", img: image },
      { label: "Hats", img:  image },
      { label: "Action figures", img: image },
      { label: "Mugs", img: image },
    ],
  },
  {
    title: "Have more fun with family",
    items: [
      { label: "Outdoor Play Sets", img: image },
      { label: "Learning Toys", img:  image },
      { label: "Action Figures", img:  image },
      { label: "Pretend Play Toys", img: image },
    ],
  },

];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {data.map((section, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {section.items.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-24 h-24 object-cover rounded"
                />
                <span className="mt-2 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <Link to="/products" className="text-blue-600 text-sm mt-4 block">
            See more
          </Link>
        </div>
      ))}
    </div>
  );
}
