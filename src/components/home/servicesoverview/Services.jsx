import React from 'react';
import {
  RiGlobalLine,
  RiSmartphoneLine,
  RiBarChartGroupedLine,
  RiBrushLine,
  RiCpuLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const serviceData = [
  {
    icon: <RiGlobalLine className="text-3xl text-blue-500" />,
    title: "Web Design & Development",
    description: "Fast, secure, SEO-ready websites tailored to your brand.",
  },
  {
    icon: <RiSmartphoneLine className="text-3xl text-purple-500" />,
    title: "App Development",
    description: "Mobile-first interfaces designed for user delight.",
  },
  {
    icon: <RiBarChartGroupedLine className="text-3xl text-indigo-500" />,
    title: "Digital Marketing & Strategy",
    description: "Campaigns that bring traffic, leads, and conversions.",
  },
  {
    icon: <RiBrushLine className="text-3xl text-pink-500" />,
    title: "Branding & SEO",
    description: "Logo, brand voice, and visuals that stick in people's minds.",
  },
  {
    icon: <RiCpuLine className="text-3xl text-cyan-500" />,
    title: "AI/ML Solutions",
    description: "Smart tech that works for your business.",
  },
  {
    icon: <RiCpuLine className="text-3xl text-cyan-500" />,
    title: "Social Media Managnment",
    description:"Strategic social media experiences that help your brand grow, engage, and convert."
  }
];

const Services = () => {
  return (
    <div className="relative bg-white py-16 px-6 sm:px-10 md:px-20 lg:px-32 text-center overflow-hidden z-10">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-12">
        <span className="text-cyan-600 font-bold text-lg uppercase block mb-2">
          Services Overview
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Everything You Need to Launch & Grow Online
        </h2>
        <p className="text-gray-600 text-base md:text-lg mt-4">
          From strategy to deployment, we provide comprehensive digital solutions.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-xl  cursor-pointer shadow-sm hover:shadow-gray-400 hover:-translate-y-1 transition ease-in-out duration-300 p-6 w-[90%] text-left"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <Link to ='/service'>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg text-base font-medium transition hover:from-blue-600 hover:to-indigo-600">
            Explore Services →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
