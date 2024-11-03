import React from 'react'

const ContactForm = () => {
  return (
    <div>
    <hr className="border-t-2 border-blue-500 max-w-[90%] md:max-w-[1280px] mx-auto"/>
    <div className='p-6 max-w-[90%] md:max-w-[1280px] mx-auto'>

    <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
      
      <form className="bg-white bg-opacity-25 p-8 rounded-xl shadow-md space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-25 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-25 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Your Phone Number"
            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-25 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-25 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default ContactForm