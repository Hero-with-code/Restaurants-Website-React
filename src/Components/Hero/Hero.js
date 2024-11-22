import React from 'react'
import heroImg from "../../Assets/hero.png";
import PrimaryButton from '../Shared/PrimaryButton';
import bg from "../../Assets/heroBg.png";

const BgStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "auto",
  top: "68px"

};

function Hero() {
  return (
    <>
    <div style={BgStyle} className="z-[-1]">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {/* INFO... SECTION */}
              <div className="space-y-7 text-dark order-2 sm:order-1">
                <h1 data-aos="fade-up" className="text-5xl">Fresh & Healthy Meal Plan{" "} <span className="text-secondary font-cursive text-7xl">Delivery</span>{" "} in Delhi</h1>
                <p data-aos="fade-up" data-aos-delay="300" className="lg-pr-64 text-xl">Delicious Meals Delivered to Your Door From $100.99 per week</p>
                <div data-aos="fade-up" data-aos-delay="500" >
                  <PrimaryButton />
                </div>
              </div>
            {/* IMAGE... SECTION */}
            <div data-aos="zoom-in" data-aos-delay="500" className="order-1 sm:order-2 ">
              <img src={heroImg} alt='hero_pic' className="w-full lg:w-[650px] sm:scale-125 sm:translate-y-16" />
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
