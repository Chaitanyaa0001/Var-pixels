import React from 'react';
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'; // Importing icons
import Cube from '../cube/Cube';
import { Link } from 'react-router-dom';


const Main = () => {
  const phoneNumber = '+917905095656'; // Phone number for calling

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div className="relative bg-[#f0fdfd] py-24 px-5 overflow-hidden text-center z-20">
      {/* Background Circles Top */}
      <div className="absolute top-[10%] left-[5%] w-[50px] h-[50px] rounded-full border-2 border-sky-500 opacity-50 animate-[floatCircle_6s_ease-in-out_infinite]" />
      <div className="absolute top-[15%] right-[10%] w-[50px] h-[50px] rounded-full border-2 border-sky-500 opacity-50 animate-[floatCircle_6s_ease-in-out_infinite]" />
      <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] animate-[floatCircle_7s_ease-in-out_infinite] flex items-center justify-center rounded-full border-2 border-cyan-400">
        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[18px] border-transparent border-b-yellow-300" />
      </div>


      {/* Floating Cubes */}
      <div className="absolute top-[5%] left-[10%] w-[80px] h-[80px] opacity-40 pointer-events-none animate-[floatHeroCube_6s_ease-in-out_infinite]">
        <Cube />
      </div>
      <div className="absolute bottom-[10%] right-[10%] w-[80px] h-[80px] opacity-40 pointer-events-none animate-[floatHeroCube_6s_ease-in-out_infinite]">
        <Cube />
      </div>
      <div className="absolute top-[10%] right-[10%] w-[80px] h-[80px] opacity-40 pointer-events-none animate-[floatHeroCube_6s_ease-in-out_infinite]">
        <Cube />
      </div>
      <div className="absolute top-[50%] left-[40%] w-[80px] h-[80px] opacity-40 pointer-events-none animate-[floatHeroCube_7s_ease-in-out_infinite]">
        <Cube />
      </div>


      {/* Hero Content */}
      <div className="relative z-30 max-w-3xl mx-auto">
        <h5 className="inline-block text-[0.8rem] font-semibold px-2  rounded-xl border border-cyan-500 bg-cyan-100 mb-3 hover:bg-[#3C4455] hover:text-cyan-400 cursor-pointer transition-colors">
          Digital Innovation Partner
        </h5>
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          Turning Brands into <span className="text-[#2266E6]">Digital Experiences</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Websites, Apps, AI/ML Solutions, SEO & Digital Marketing that make your brand unforgettable.
        </p>
        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <Link to='/service'>
          <button className="px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-blue-500 hover:to-indigo-500 transition flex items-center gap-2 shadow-md hover:shadow-lg">
            <FiArrowRight className="text-lg" />
            Get Started
          </button>
          </Link>
          <button 
            onClick={handleCallClick}
            className="px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-500 hover:to-blue-600 transition flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <FiPhoneCall className="text-lg" />
            Contact Us
          </button>
        </div>
      </div>


      {/* Background Circles Bottom */}
      <div className="absolute bottom-[12%] left-[7%] w-[50px] h-[50px] rounded-full border-2 border-sky-500 opacity-50 animate-[floatCircle_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] right-[12%] w-[50px] h-[50px] rounded-full border-2 border-sky-500 opacity-50 animate-[floatCircle_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[8%] left-[45%] transform -translate-x-1/2 w-[60px] h-[60px] animate-[floatCircle_7s_ease-in-out_infinite] flex items-center justify-center rounded-full border-2 border-cyan-400">
        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[18px] border-transparent border-b-yellow-300" />
      </div>
    </div>
  );
};


export default Main;
