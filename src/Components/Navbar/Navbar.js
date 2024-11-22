import React from 'react'
import { FaCaretDown, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from "../../Assets/logo.png";

function Navbar({HandlePopup}) {
  return (
    <div className="fixed w-full top-0 left-0 bg-white shadow-md z-[99]">
        <div className="container flex justify-between py-4 sm:py-3">
            {/* LOGO SECTION */}
            <div className=" flex font-semibold text-2xl xs:text-xl gap-2 items-center"><img src={logo} alt='logo' className="h-[50px] w-[80px]" /> <span>Restaurant</span></div>
            {/* NAVIGATION SECTION */}
              <div className="flex">
                <ul className="flex items-center lg:gap-10 md:gap-1">
                  <li>
                    <Link to="/" className="hidden md:inline-block hover:text-primary text-xl font-semibold">Home</Link>
                  </li>
                  <li>
                    <Link to="/About" className="hidden md:inline-block hover:text-primary text-xl font-semibold">About</Link>
                  </li>
                  <li>
                    <Link to="/Contact" className="hidden md:inline-block hover:text-primary text-xl font-semibold">Contact</Link>
                  </li>
                  <li className="cursor-pointer group">
                    <Link to="/Categories" className="hidden md:inline-block hover:text-primary text-xl font-semibold">
                      <div className="flex items-center gap-[2px] py-2">
                      Categories <span><FaCaretDown className="group-hover:rotate-180 duration-300" /></span>
                      </div>
                    </Link>
                    <div className="absolute z-[999] hidden group-hover:block w-[200px] bg-white text-black shadow-md top-[60px] right-[230px]">
                      <ul className="m-2">
                        <li>
                          <Link to="" className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Vegetables</Link>
                        </li>
                        <li>
                          <Link to="" className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20">Fruits</Link>
                        </li>
                        <li>
                          <Link to="" className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20">Grains</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                    <li className="">
                      <button onClick={HandlePopup} className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 py-2 hover:scale-105 duration-300">
                        <FaUser />
                        My Account
                      </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
