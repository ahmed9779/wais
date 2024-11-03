'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to submit form');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="md:w-1/2 text-center md:text-left p-8 md:ml-5 animate-float-up">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p>
          Ready to enhance your vehicle with our premium aftermarket ambient lighting and CarPlay retrofitting services? We’re here to help you transform your driving experience. Whether you have questions or want to schedule an appointment, simply fill out the form below, and our dedicated team will get back to you shortly. Let’s make your car a reflection of your style!
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 animate-float-up">
        <form className="p-8 rounded-xl shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1">
              <div className="relative mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full h-10 px-0 border-b-2 bg-black focus:border-blue-500 focus:outline-none text-lg transition-all duration-300 peer"
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute left-0 top-1 transform ${formData.name ? 'scale-75 top-[-10px]' : 'scale-100 top-2'} origin-[0_0] text-white duration-300`}
                >
                  Your Name
                </label>
                <hr className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
              </div>
            </div>

            <div className="flex-1">
              <div className="relative mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full h-10 px-0 border-b-2 bg-black focus:border-blue-500 focus:outline-none text-lg transition-all duration-300 peer"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 top-1 transform ${formData.email ? 'scale-75 top-[-10px]' : 'scale-100 top-2'} origin-[0_0] text-white duration-300`}
                >
                  Your Email
                </label>
                <hr className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
              </div>
            </div>
          </div>

          <div className="relative mb-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder=" "
              value={formData.phone}
              onChange={handleChange}
              className="block w-full h-10 px-0 border-b-2 bg-black focus:border-blue-500 focus:outline-none text-lg transition-all duration-300 peer"
            />
            <label
              htmlFor="phone"
              className={`absolute left-0 top-1 transform ${formData.phone ? 'scale-75 top-[-10px]' : 'scale-100 top-2'} origin-[0_0] text-white duration-300`}
            >
              Your Phone Number
            </label>
            <hr className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </div>

          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              className="block w-full h-24 px-0 border-b-2 bg-black focus:border-blue-500 focus:outline-none text-lg transition-all duration-300 peer"
              required
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute left-0 top-1 transform ${formData.message ? 'scale-75 top-[-10px]' : 'scale-100 top-2'} origin-[0_0] text-white duration-300`}
            >
              Your Message
            </label>
            <hr className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
