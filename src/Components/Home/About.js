import React from 'react'
import bg from "../../Assets/polygon.png";
import { FaUser } from 'react-icons/fa';

const BgStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "auto",
  position: "relative",
};
function About({HandlePopup}) {
  return (
    <>
    <div style={BgStyle} className="py-14">
      <div className="container min-h-[500px] relative z-10">
        <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">About Us</h1>
        {/* Card Section */}
        <div className="bg-white/80 p-10 my-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus blanditiis culpa ipsa autem! Quas in ut cumque quo, eum ab ea inventore voluptatum at dignissimos repellat placeat quaerat veniam fugit? Quasi quidem, saepe tenetur quam nihil velit nobis eum ad hic odio mollitia itaque consectetur eaque unde cumque possimus reprehenderit quas beatae praesentium consequatur? Eum magni doloremque obcaecati necessitatibus soluta doloribus quos temporibus aperiam, at harum earum, commodi, eligendi omnis fugiat error exercitationem ullam labore culpa aliquam possimus pariatur? Atque repudiandae beatae animi ducimus voluptate minima temporibus neque libero dolore ipsam, accusamus omnis ullam id aspernatur, quas fuga esse. ipsam, accusamus omnis ullam id aspernatur, quas fuga esse. ipsam, accusamus omnis ullam id aspernatur, fuga esse.
        <div className="pt-10 flex justify-center">
          <button onClick={HandlePopup} className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
            <FaUser />
            My Account Here!
          </button>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default About