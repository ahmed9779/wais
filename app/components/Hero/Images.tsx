'use client'
import React, { useState, useEffect } from 'react';

const imageUrls = [
  'https://res.cloudinary.com/dxphmt4tc/image/upload/v1729612837/WAIS/a5i4wd14pu8sticxsjwb.jpg',
  'https://res.cloudinary.com/dxphmt4tc/image/upload/a_90/v1729612843/WAIS/lfoinprdddmns6yswrly.jpg',
  'https://res.cloudinary.com/dxphmt4tc/image/upload/a_90/v1729612843/WAIS/gzjnei9hcsgsv3qron1c.jpg',
  'https://res.cloudinary.com/dxphmt4tc/image/upload/a_90/v1729612843/WAIS/vfzapbab51m36bl7lmom.jpg',
  'https://res.cloudinary.com/dxphmt4tc/image/upload/a_90/v1729612843/WAIS/xhbtqy5apxx551gh3fgv.jpg'
];

const Images = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % imageUrls.length);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden">
  
      <div className="relative w-[350px] h-80 flex justify-center mb-4">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            className={`absolute w-[350px] h-auto transition-transform duration-500 ease-in-out rounded-lg ${
              selectedImage === index ? 'translate-x-0' : 'translate-x-full'
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>


      <div className="flex gap-4 mt-40">
        {imageUrls.map((url, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden mt-10 pb-10">
            <img
              onClick={() => setSelectedImage(index)}
              className={`w-18 h-10 cursor-pointer transition-transform duration-200 ${
                selectedImage === index ? 'transform scale-110 border-2 border-gray-700' : ''
              }`}
              src={url}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
