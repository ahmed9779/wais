import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Page = () => {
  return (
    <div>
      <Navbar/>
      <hr className="border-t-2 border-blue-500 max-w-[90%] md:max-w-[1280px] mx-auto"/>
    </div>
  );
}

export default Page;
