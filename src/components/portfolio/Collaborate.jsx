import React from 'react';
import { Link } from 'react-router-dom';

const Collaborate = () => {
  return (
    <section className="w-full px-4 py-16 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Headings */}
        <h3 className="text-xl text-indigo-500 font-semibold mb-2">Let's Collaborate</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Build Something <br />
          <span className="text-indigo-600">Extraordinary Together?</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Transform your ideas into reality with our expert team. Let's create digital experiences that make your brand stand out.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '25+', label: 'Happy Clients' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl py-6 px-4 flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
            >
              <h4 className="text-3xl font-bold text-indigo-600">{stat.value}</h4>
              <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to='/contact'>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
            Start Your Project
          </button>
          </Link>
          <Link to='/service'>
          <button className="px-6 py-3 border border-indigo-600 hover:bg-indigo-100 text-indigo-600 rounded-lg font-medium transition-colors">
            View Our Services
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
