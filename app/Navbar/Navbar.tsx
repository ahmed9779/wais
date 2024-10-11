'use client'
import Link from "next/link";
import React, { useState } from "react";
import { LuInstagram } from 'react-icons/lu';
import { CiMenuBurger } from 'react-icons/ci'; // Import a burger icon or use a different one.

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div>
      <div className="px-5 max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between pt-4 relative">

          <div className="font-semibold text-xl">
            <div className="flex gap-4 items-center">
              <Link href="https://www.instagram.com/wais_autos">
                <LuInstagram className="mt-1" size={28} />
              </Link>
              <span className="w-[5px] h-[30px] mt-1 bg-blue-500 rounded-full inline-block"></span>
              <Link className="mt-0.5" href="/">
                <h1>WAIS Autos</h1>
              </Link>
            </div>
          </div>


          <ul className="hidden md:flex items-center gap-4 justify-between m-0 p-0 mt-2">
            <li>
              <a href="/cars" className="hover:text-blue-500 font-semibold">
                Cars
              </a>
            </li>
            <li>
              <a href="/sellmycar" className="hover:text-blue-500 font-semibold">
                Sell My Car
              </a>
            </li>
            <li>
              <a href="/ambients" className="hover:text-blue-500 font-semibold">
                Ambient Lighting
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
                <a href="/cars" className="hover:text-blue-500 font-semibold">
                  Cars
                </a>
              </li>
              <li>
                <a href="/sellmycar" className="hover:text-blue-500 font-semibold">
                  Sell My Car
                </a>
              </li>
              <li>
                <a href="/ambients" className="hover:text-blue-500 font-semibold">
                  Ambient Lighting
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <hr className="border-t-2 mt-5 max-w-[1280px] mx-auto border-blue-500" />
    </div>
  );
};

export default Navbar;
