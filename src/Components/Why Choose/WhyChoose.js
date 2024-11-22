import React from 'react'
import { FaBus } from 'react-icons/fa'

function WhyChoose() {
  return (
    <>
        <div className="py-16 md:py-28 bg-gray-50">
            <div className="container">
                <h1 data-aos="fade" className="pb-16 tracking-wider text-2xl font-bold text-dark text-center">Why Choose Us</h1>
                {/* Card Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
                    {/* 1st Card */}
                    <div data-aos="fade" data-aos-delay="300" className="text-center flex justify-center items-center flex-col gap-2 px-2">
                        <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                        <p className="text-5xl rotate-90 text-primary text-center translate-x-5">.....</p>
                        <FaBus className="text-5xl text-primary" />
                    </div>
                    {/* 2nd Card */}
                    <div data-aos="fade" data-aos-delay="600" className="text-center flex justify-center items-center flex-col gap-2 px-2">
                        <FaBus className="text-5xl text-secondary" />
                            <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">.....</p>
                            <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet</p> 
                    </div>
                    {/* 3th Card */}
                    <div data-aos="fade" data-aos-delay="900" className="text-center flex justify-center items-center flex-col gap-2 px-2">
                        <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                        <p className="text-5xl rotate-90 text-primary text-center translate-x-5">.....</p>
                        <FaBus className="text-5xl text-primary" />
                    </div>
                    {/* 4th Card */}
                    <div data-aos="fade" data-aos-delay="1200" className="text-center flex justify-center items-center flex-col gap-2 px-2">
                        <FaBus className="text-5xl text-secondary" />
                            <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">.....</p>
                            <p className="text-dark/70 font-semibold">Lorem ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet</p> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyChoose