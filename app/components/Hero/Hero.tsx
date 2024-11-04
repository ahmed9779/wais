import React from 'react';
import Images from './Images'
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[880px] max-w-7xl mx-auto px-4">
      <div className="md:w-1/2 text-center md:text-left p-8 md:ml-5 animate-float-up">
        <h1 className="text-5xl font-bold mb-6">Welcome to WAIS Autos</h1>
        <p className="text-xl mb-6">
          Transform your vehicle into a sanctuary of style and technology with our premium aftermarket ambient lighting and CarPlay retrofitting services. At WAIS, we specialize in enhancing your driving experience by integrating cutting-edge technology and customizable lighting solutions that reflect your personal taste.
        </p>
        <Link href={'/contact'} className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 transition duration-300">
          Get Booked In
        </Link>
      </div>

      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 animate-float-up">
        <Images/>
      </div>
    </section>
  );
}

export default Hero;
