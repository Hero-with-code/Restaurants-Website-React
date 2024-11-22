import React, { useState, useEffect } from 'react'
import Hero from "../Hero/Hero.js"
import Banner from "../Banner/Banner.js";
import Choose from "../Why Choose/WhyChoose.js";
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import Popup from '../Popup/Popup.js';
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const HandlePopup = () =>{
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <>
    <div className="overflow-x-hidden">
    <Hero />
    <Banner />
    <Choose />
    <About HandlePopup={HandlePopup} />
    <Banner />
    <Footer />
    <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
    </>
  )
}

export default Home