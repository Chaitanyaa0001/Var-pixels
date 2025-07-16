import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import {
  RiGlobalLine,
  RiSmartphoneLine,
  RiBarChartGroupedLine,
  RiBrushLine,
  RiGroupLine,
  RiCpuLine
} from 'react-icons/ri';
import Footer from '../../components/footer/Footer';

const services = [
  {
    icon: <RiGlobalLine size={32} className="text-cyan-500" />,
    title: 'Web Design & Development',
    description: 'Fast, secure, SEO-ready websites tailored to your brand.',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization']
  },
  {
    icon: <RiSmartphoneLine size={32} className="text-cyan-500" />,
    title: 'App Development',
    description: 'Mobile-first interfaces designed for user delight.',
    features: ['iOS & Android Apps', 'Cross-platform Solutions', 'UI/UX Design', 'App Store Optimization']
  },
  {
    icon: <RiBarChartGroupedLine size={32} className="text-cyan-500" />,
    title: 'Digital Marketing & Strategy',
    description: 'Campaigns that bring traffic, leads, and conversions.',
    features: ['Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Analytics & Reporting']
  },
  {
    icon: <RiBrushLine size={32} className="text-cyan-500" />,
    title: 'Branding & SEO',
    description: 'Logo, brand voice, and visuals that stick in people\'s minds.',
    features: ['Brand Identity', 'Logo Design', 'SEO Optimization', 'Brand Guidelines']
  },
  {
    icon: <RiGroupLine size={32} className="text-cyan-500" />,
    title: 'Social Media Management',
    description: 'Strategic social media experiences that help your brand grow.',
    features: ['Branded Post & Reel Design', 'Monthly Content Calendars', 'Meta Ads Setup', 'Analytics & Reports']
  },
  {
    icon: <RiCpuLine size={32} className="text-cyan-500" />,
    title: 'AI/ML Solutions',
    description: 'Smart tech that works for your business.',
    features: ['Custom AI Models', 'Data Analytics', 'Automation', 'Machine Learning']
  },
];

const Servicepage = () => {
  return (
    <div className="bg-[#f0f9ff] min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <div className="text-center px-4 py-20 max-w-3xl mx-auto">
        <span className="text-sm text-cyan-600 font-semibold uppercase">Our Services</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Digital Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Modern Businesses</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          From web development to AI solutions, we provide comprehensive digital services that help your business thrive in the digital landscape.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:scale-105 transition">
          Get Started Today →
        </button>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24 py-12">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-cyan-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Learn More →
            </button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Servicepage;
