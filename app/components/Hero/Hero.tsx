import React from 'react';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen'>
      <div className="text-center p-8 bg-white bg-opacity-25 rounded-xl">
        <h1 className="text-5xl font-bold mb-4">Welcome to WAIS Autos</h1>
        <p className="text-xl">Helping you upgrade your interior</p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  
  );
};

export default Hero;
