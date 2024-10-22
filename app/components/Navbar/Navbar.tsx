'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { LuInstagram } from 'react-icons/lu';
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [slideIn, setSlideIn] = useState<boolean>(false); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setSlideIn(true);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="pt-4">
      <div
        className={`bg-white bg-opacity-25 px-5 max-w-[1280px] mx-auto pt-5 pb-6 rounded-full transition-transform duration-500 ease-in-out transform ${slideIn ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex items-center justify-between relative">
          <div className="font-semibold text-xl">
            <div className="flex gap-4 items-center">
              <Link href="https://www.instagram.com/wais_autos">
                <LuInstagram className="mt-0.5" size={28} />
              </Link>
              <span className="w-[5px] h-[30px] bg-blue-500 rounded-full inline-block"></span>
              <Link className="mt-0.5" href="/">
                <h1>WAIS</h1>
              </Link>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-4 justify-center">
            <li>
              <a
                href="/ambients"
                className="font-semibold text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:text-transparent"
              >
                Ambient Lighting
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-semibold text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:text-transparent"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="font-semibold text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:text-transparent"
              >
                About
              </a>
            </li>
          </ul>

          <div className="md:hidden">
            <button onClick={() => setShowNav(!showNav)}>
              <CiMenuBurger size={30} />
            </button>
          </div>
        </div>

        {showNav && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="/cars"
                  className="font-semibold text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:text-transparent"
                >
                  Cars
                </a>
              </li>
              <li>
                <a
                  href="/sellmycar"
                  className="font-semibold text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:text-transparent"
                >
                  Sell My Car
                </a>
              </li>
              <li>
                <a
                  href="/ambients"
                  className="font-semibold text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:text-transparent"
                >
                  Ambient Lighting
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
