'use client';
// import React from 'react'
import { useState, useEffect, useRef } from "react";
// import React, { useState } from 'react';
import Link from 'next/link'
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
   <>
   <header className="text-gray-600 body-font bg-white h-[11vh] sm:pb-1 sm:pt-1 flex items-center fixed top-0 left-0 w-full z-50 shadow-md" ref={dropdownRef}>
  {/* <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center"> */}
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">

    
    <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
      <img src='/img/logo.png' alt='' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" className="m-5 w-12 h-12" viewBox="0 0 24 24"/>
      </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <nav className="hidden gap-8 lg:flex 2xl:ml-16">
        <a href="/" className="text-lg font-semibold text-indigo-500">Home</a>


        <li className="relative">
          {/* Admission link */}
          <button
            onClick={toggleDropdown}
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
          Admission
          </button>
          {/* Dropdown */}
          {isDropdownOpen && (
            <ul className="absolute mt-2 bg-white border rounded shadow-lg">
              <li>
                <Link
                  href="/admission-updates"
                  className="block px-4 py-1 text-gray-600 transition duration-100 hover:bg-indigo-100 hover:text-indigo-500"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/admission-prediction"
                  className="block px-4 py-1 text-gray-600 transition duration-100 hover:bg-indigo-100 hover:text-indigo-500"
                >
                  Prediction
                </Link>
              </li>
            </ul>
          )}
        </li>


        {/* <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Admission</a> */}
        <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Scholarships</a>
        <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Feedback</a>
        <a href="/contactus" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Contact</a>
      </nav>
      
    </nav>
    <div className="flex divide-x border-r lg:flex 2xl:ml-16">
    
    <a href="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-2 focus:outline-none hover:bg-gray-200 rounded text-base">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
      
       </div>
  </div>
</header>
   </>
  )
}

export default Header
