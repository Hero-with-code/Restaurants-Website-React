import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <div className="text-white mt-20">
      <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          {/* Heading Section */}
          <h1 className="text-3xl text-center py-16 font-bold">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-14 border-b-2 border-white pb-6">
            {/* Address Section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p className="text-xl">J47, 1rd Main, Abul Fajal,
              Delhi,<br /> Delhi India 841227</p>
            </div>
            {/* Email Section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <p className="text-xl">
                <Link to="">mdreyaz7079@gmail.com<br /></Link>
                <Link to="">info@restaurent.com<br /></Link>
                <Link to="">mdreyaz7079@gmail.com<br /></Link>
                <Link to="">riyajansari99999@gmail.com</Link>
                </p>
            </div>
            {/* Calling Section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <p className="text-xl">
              +91 91170484802 - Sales and Services<br />
              +91 91170484802 - Hiring Queries<br />
              +91 91170484802 - Whatsapp
              </p>
            </div>
          </div>
          {/* Copyright section */}
          <hr />
          <div className="flex justify-between items-center">
            <p className="py-5">© 2024 @Reyaz. All Rights Reserved</p>
            <div className="flex items-center gap-6">
              <Link to="">Develop By Md Reyaz</Link>
              <Link to="">Privacy Policy</Link>
              <Link to="">Terms & Condition</Link>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Contact