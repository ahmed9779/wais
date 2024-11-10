import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const page = () => {
  return (
    <div>
      <Navbar />
      <hr className="border-t-2 border-blue-500 max-w-[90%] md:max-w-[1280px] mx-auto animate-float-up" />

      <section className="flex flex-col items-center justify-center min-h-[880px] max-w-7xl mx-auto px-4 py-8">
        <div className="text-center md:text-left p-8 animate-float-up">
          <h2 className="text-3xl font-semibold mb-4">About WAIS Autos</h2>
          <p className="mb-4">
            <strong>Enhancing Your Driving Experience, One Upgrade at a Time</strong>
          </p>
          <p className="mb-4">
            At WAIS Autos, we believe that every vehicle should reflect its owner's style and enhance their journey. We specialize in high-quality aftermarket solutions, including ambient lighting installations and CarPlay retrofitting, designed to transform your car's interior and bring a seamless, modern experience to your drive.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h3>
          <p className="mb-4">
            Our mission is to bring the best in automotive technology to your vehicle, enhancing both functionality and aesthetics. We’re committed to delivering reliable, tailored solutions that meet each client’s unique needs, helping drivers enjoy a safer, more connected, and more enjoyable experience on the road.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Our Expertise</h3>
          <p className="mb-4">
            With years of experience in vehicle customizations, our team combines technical skill with a passion for automotive innovation. We stay ahead of industry trends and use the latest tools and techniques to provide seamless installations and solutions that blend naturally with your car’s existing design.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Why Choose WAIS Autos?</h3>
          <ul className="list-disc list-inside mb-4">
            <li>High-Quality Installations: We use premium components and rigorously tested systems to ensure durability and performance.</li>
            <li>Personalized Service: Each vehicle is unique, and so is each client. We work closely with you to understand your vision and bring it to life.</li>
            <li>Experienced Technicians: Our team is skilled and experienced, ensuring every installation meets the highest standards of quality and safety.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Our Services</h3>
          <p className="mb-4">
            <strong>Ambient Lighting:</strong> Customizable lighting that adds a stylish, personalized ambiance to your car's interior, enhancing the mood and visibility.
          </p>
          <p className="mb-4">
            <strong>CarPlay Retrofitting:</strong> Seamlessly integrate CarPlay into your vehicle to access navigation, music, calls, and more directly from your dashboard, enhancing safety and convenience.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Get in Touch</h3>
          <p>
            If you're ready to enhance your driving experience or have questions about our services, feel free to reach out to us. We’re here to help you achieve the perfect balance of style and functionality for your vehicle.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
