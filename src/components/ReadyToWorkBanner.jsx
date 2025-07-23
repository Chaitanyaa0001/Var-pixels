import React from "react";
import { Link } from "react-router-dom";

const ReadyToWorkBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your digital presence and achieve your business goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to='/service'>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </Link>
        <Link to ='/contact'>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Learn More
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadyToWorkBanner;