import React from 'react'
import Apple from "../../Assets/png/apple.png";
import Kiwi from "../../Assets/png/kiwi.png";
import lemon from "../../Assets/png/lemon.png";
import leaf from "../../Assets/png/leaf.png";
import tomato from "../../Assets/png/tomato.png";
import PrimaryButton from "../Shared/PrimaryButton";

function Banner() {
  return (
    <>
    <div className="container py-14 relative">
      <div className="relative z-20">
        <h1 data-aos="fade-up" data-aos-delay="300" className="py-8 tracking-wider text-3xl font-bold text-dark text-center">Teste The Healthy Difference</h1>
        {/* text content section */}
        <div className="space-y-10">
          <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div className="">
              <p>
                {" "}
              We know that <span className="text-primary">Time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Miami is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.
              </p>
            </div>
              <div></div>
          </div>
          {/* text content section */}
          <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div >
                
            </div>
            <div className="">
              <p>
                {" "}
              We know that <span className="text-primary">Time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Miami is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.
              </p>
            </div>
            <div> </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center mt-10 sm:mt-14">
          <PrimaryButton />
        </div>
      </div>
      {/* bg fruits png */}
      <div data-aos="fade-right" className="absolute top-6 -left-6 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <img src={leaf} alt='leaf' className="max-w-[160px]" />
      </div>

      <div data-aos="fade-right" className="absolute bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <img src={tomato} alt='leaf' className="max-w-[280px]" />
      </div>

      <div data-aos="fade-left" className="absolute top-20 right-16 sm:right-20 opacity-50 sm:opacity-100">
        <img src={lemon} alt='leaf' className="max-w-[160px]" />
      </div>

      <div data-aos="fade-left" className="hidden sm:block absolute bottom-0 right-0 ">
        <img src={Apple} alt='leaf' className="max-w-[200px]" />
      </div>

      <div data-aos="fade" className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
        <img src={Kiwi} alt='leaf' className="max-w-[200px]" />
      </div>

    </div>
    </>
  )
}

export default Banner
