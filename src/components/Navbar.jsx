import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// SVG icons
const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.65 13.65z" />
  </svg>
);

const CartIcon = () => (
  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h14l-1.5 8H6.4L7 13zm0 0L5.4 5H21" />
  </svg>
);

function EcommerceNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const navigate = useNavigate();

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/deals", label: "Deals" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="bg-[#0B1D51] shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 text-white text-2xl font-bold">
            ElectroShop
          </Link>

          {/* Search Bar (hidden on small) */}
          <div className="hidden md:flex items-center w-1/2 mx-6 bg-slate-500 rounded-md">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search electronics..."
                className="w-full py-2 pl-10 pr-4 rounded-md bg-[#abafbe] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="text-white hover:text-indigo-300 text-sm font-medium"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Cart Button */}
            <div className="relative">
              <button
                className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-700"
                onClick={() => navigate("/Price")}
              >
                <CartIcon />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2 {/* Replace with dynamic count later */}
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B1D51] px-2 pt-2 pb-4 space-y-2">
          {/* Mobile Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search electronics..."
              className="w-full py-2 pl-10 pr-4 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default EcommerceNavbar;
