import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { FiPhoneCall, FiSend, FiMail, FiMapPin } from 'react-icons/fi';
import Footer from '../../components/footer/Footer';

const Contact = () => {
  return (
    <div className="bg-[#EDF4FF] min-h-screen">
      <Navbar />

      <div className="w-[95%] sm:w-[90%] lg:w-[85%] mx-auto flex flex-col">
        <button className="text-center bg-[#CDF5FD] text-sm text-[#0F1035] font-semibold inline-block px-2 lg:px-0 lg:w-[8%] hover:outline-none hover:bg-[#3B4455] hover:text-blue-400 cursor-pointer mx-auto rounded-full mt-16 mb-5">
          Contact us
        </button>
        <h1 className="text-center text-3xl lg:text-5xl md:text-4xl font-extrabold text-[#0F1035] mb-8">
          Let's Talk About Your Project
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-50 text-center">
          <button className="bg-[#1982FC] text-white px-6 py-2 rounded-lg flex items-center  cursor-pointer justify-center gap-2">
            <FiPhoneCall /> CALL NOW
          </button>
          <button className="bg-gradient-to-r from-[#6A5ACD] to-[#8A2BE2] text-white px-6 cursor-pointer  py-2 rounded-lg flex items-center justify-center gap-2 ">
            <FiSend /> SEND MESSAGE
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  w-[90%] lg:w-[70%] mx-auto gap-20 mb-20">
          {/* Left Form */}
          <div className="bg-white rounded-xl shadow-lg p-7">
            <h2 className="text-xl font-bold mb-6 text-[#0F1035]">
              Send us a message
            </h2>
            <form className="space-y-2">
              <h1>Name</h1>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <h1>Email</h1>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <h1>Projct Type</h1>
              <select
                name="projectType"
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-500"
              >
                <option value="">Select project type</option>
                <option value="website">Website Development</option>
                <option value="app">App Development</option>
                <option value="digital">Digital Marketing</option>
                <option value="seo">Branding and SEO</option>
                <option value="ai">AI & ML Solutions</option>
                <option value="other">Other</option>
              </select>
              <h1>Message</h1>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project"
                className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send a Message
              </button>
            </form>
          </div>

          {/* Right Contact Info */}
          <div className="flex flex-col justify-start gap-6 text-[#0F1035]">
            <h2 className="text-xl font-extrabold">Get in Touch</h2>
            <div className="flex items-center gap-3 ">
              <FiMail className="text-white  bg-blue-500 w-[8%] h-[65%] text-2xl p-1 rounded-[6px]  "/>
              <div>
                  <h1>Email</h1>
                  <span className='opacity-70  text-[0.9rem]'>varpixels@gmail.com</span>
              </div>
          
            </div>
            <div className="flex items-center gap-3">
              <FiPhoneCall className="text-white  bg-blue-500 w-[8%] h-[65%] text-xl p-1 rounded-[6px]" />
              <div>
                <h1>phone Number</h1>
                <span>+91-7905095656</span>
              </div>
             
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-white bg-blue-500 w-[8%] h-[65%] text-xl p-1 rounded-[6px]" />
              <div>
                <h1>Location</h1>
                <span>Ayodhya, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
