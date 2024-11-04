import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const page = () => {
  return (
    <div>
        <Navbar/>
        <hr className="border-t-2 border-blue-500 max-w-[90%] md:max-w-[1280px] mx-auto animate-float-up"/>

        <section className="flex flex-col md:flex-row items-center justify-center min-h-[880px] max-w-7xl mx-auto px-4">
            <div className="md:w-1/2 text-center md:text-left p-8 md:ml-5 animate-float-up">
            <p>Ambient page in development</p>
            </div>
        </section>



    </div>
  )
}

export default page