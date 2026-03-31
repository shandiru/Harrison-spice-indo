import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Desktop Dropdown State
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Mobile Dropdown State
  const dropdownRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  // Handle mobile menu close and reset dropdowns
  const handleMobileMenuClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setShowDropdown(false);
  };

  const services = [
    { name: "MOT", path: "/services/mot" },
    { name: "Brakes", path: "/services/brake" },
    { name: "Timing Belts", path: "/services/time-belts" },
    { name: "Batteries", path: "/services/batteries" },
    { name: "Suspension", path: "/services/suspension" },
    { name: "Servicing", path: "/services/servicing" },
    { name: "Clutches", path: "/services/clutches" },
    { name: "Diagnostics", path: "/services/diagnostics" },
    { name: "Aircon", path: "/services/aircon" },
    { name: "Customisation", path: "/services/customisation" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo-white.png"
            alt="TT Automotive Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-8 font-semibold relative">
          <HashLink to="/#" className="hover:text-[#861918] transition">Home</HashLink>
          <HashLink to="/#about" className="hover:text-[#861918] transition">About Us</HashLink>

          {/* Desktop Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 hover:text-[#861918] transition focus:outline-none"
            >
              Services
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`}
              />
            </button>

            {showDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-black border border-gray-700 rounded-md shadow-lg w-48 py-2 z-50">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#861918]/80 transition"
                    onClick={() => setShowDropdown(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <HashLink to="/#package" className="hover:text-[#861918] transition">Package</HashLink>
          <HashLink to="/#testimonials" className="hover:text-[#861918] transition">Testimonials</HashLink>
          <HashLink to="/review" className="hover:text-[#861918] transition">Review</HashLink>
          <HashLink to="/#contact" className="hover:text-[#861918] transition">Contact Us</HashLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center">
          <HashLink to="/#contact">
            <button className="px-7 py-2.5 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-medium text-base rounded-lg border-2 border-white/15 shadow-[0_6px_25px_rgba(255,0,0,0.4)] transition-all duration-300">
              Get In Touch
            </button>
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={`xl:hidden absolute top-full left-0 w-full px-6 py-6 space-y-4 backdrop-blur-lg bg-black/95 text-white transition-all duration-300 border-t border-gray-800 max-h-[90vh] overflow-y-auto`}
        >
          <HashLink to="/#" className="block text-lg font-medium" onClick={handleMobileMenuClick}>Home</HashLink>
          <HashLink to="/#about" className="block text-lg font-medium" onClick={handleMobileMenuClick}>About Us</HashLink>

          {/* Mobile Services Accordion */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between w-full items-center text-lg font-medium"
            >
              Services
              <FiChevronDown
                size={20}
                className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            
            {mobileServicesOpen && (
              <div className="pl-4 space-y-3 mt-2 border-l-2 border-[#861918]">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-gray-400 hover:text-white text-base"
                    onClick={handleMobileMenuClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <HashLink to="/#package" className="block text-lg font-medium" onClick={handleMobileMenuClick}>Package</HashLink>
          <HashLink to="/#testimonials" className="block text-lg font-medium" onClick={handleMobileMenuClick}>Testimonials</HashLink>
          <HashLink to="/review" className="block text-lg font-medium" onClick={handleMobileMenuClick}>Review</HashLink>
          <HashLink to="/#contact" className="block text-lg font-medium" onClick={handleMobileMenuClick}>Contact Us</HashLink>

          <div className="pt-4">
            <HashLink to="/#contact" onClick={handleMobileMenuClick}>
              <button className="w-full px-7 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-lg">
                Get a Quote
              </button>
            </HashLink>
          </div>
        </div>
      )}
    </header>
  );
}