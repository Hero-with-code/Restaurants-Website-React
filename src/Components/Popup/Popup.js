import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { IoCloseOutline } from 'react-icons/io5'

function Popup({showPopup, setShowPopup}) {
  return (
    <>
    {showPopup && (
      <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-[55]">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
              {/* Header Section */}
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-dark">Login Here!</h1>
                </div>
                <div>
                  <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setShowPopup(false)} />
                </div>
              </div>
              {/* Login Section */}
              <div className="mt-4">
                <input type="email" placeholder="Enter Your Email" className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4" />

                <input type="password" placeholder="Enter Your Password" className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4" />

                {/* Login Button Section */}
                <div className="">
                  <button className="w-full bg-primary text-white p-2 rounded-md" onClick={() => setShowPopup(false)}>Login</button>
                </div>
                {/* Login with Social Media Section */}
                <div className="mt-4">
                  <p className="text-center">OR Login With</p>
                  <div className="mt-4 flex justify-center items-center gap-12">
                    <FaFacebook className="text-3xl hover:text-blur-500 duration-200" />
                    <FaGoogle className="text-3xl hover:text-blur-500 duration-200" />
                    <FaLinkedin className="text-3xl hover:text-blur-500 duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )}
    </>
  )
}

export default Popup