import React from 'react';
import { Link } from 'react-router-dom';
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
import { FiArrowRight, FiEye } from 'react-icons/fi';

const services = [
  {
    icon: <RiGlobalLine size={32} className="text-cyan-500" />,
    title: 'Web Design & Development',
    description: 'Fast, secure, SEO-ready websites tailored to your brand.',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
    slug: 'web-development'
  },
  {
    icon: <RiSmartphoneLine size={32} className="text-cyan-500" />,
    title: 'App Development',
    description: 'Mobile-first interfaces designed for user delight.',
    features: ['iOS & Android Apps', 'Cross-platform Solutions', 'UI/UX Design', 'App Store Optimization'],
    slug: 'app-development'
  },
  {
    icon: <RiBarChartGroupedLine size={32} className="text-cyan-500" />,
    title: 'Digital Marketing & Strategy',
    description: 'Campaigns that bring traffic, leads, and conversions.',
    features: ['Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Analytics & Reporting'],
    slug: 'digital-marketing'
  },
  {
    icon: <RiBrushLine size={32} className="text-cyan-500" />,
    title: 'Branding & SEO',
    description: 'Logo, brand voice, and visuals that stick in people\'s minds.',
    features: ['Brand Identity', 'Logo Design', 'SEO Optimization', 'Brand Guidelines'],
    slug: 'branding-seo'
  },
  {
    icon: <RiGroupLine size={32} className="text-cyan-500" />,
    title: 'Social Media Management',
    description: 'Strategic social media experiences that help your brand grow.',
    features: ['Branded Post & Reel Design', 'Monthly Content Calendars', 'Meta Ads Setup', 'Analytics & Reports'],
    slug: 'social-media'
  },
  {
    icon: <RiCpuLine size={32} className="text-cyan-500" />,
    title: 'AI/ML Solutions',
    description: 'Smart tech that works for your business.',
    features: ['Custom AI Models', 'Data Analytics', 'Automation', 'Machine Learning'],
    slug: 'ai-ml-solutions'
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
        <Link to='/contact'>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:scale-105 transition">
          Get Started Today →
        </button>
        </Link>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24 py-12">
        {services.map((service, idx) => (
          <div
  key={idx}
  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
>
  <div>
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
  </div>

  {/* Aligned Learn More button */}
  <Link
    to={`/services/${service.slug}`}
    className="mt-6 w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition text-center"
  >
    Learn More →
  </Link>
</div>

        ))}
      </div>
     <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1035] mb-4">
                Our Process
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We follow a proven methodology to deliver exceptional results for every project.
              </p>
            </div>
    
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {/* Step 1 - Discovery */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1982FC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">01</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F1035] mb-2">Discovery</h3>
                <p className="text-gray-600">Understanding your needs and goals</p>
              </div>
    
              {/* Step 2 - Strategy */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1982FC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">02</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F1035] mb-2">Strategy</h3>
                <p className="text-gray-600">Creating a tailored approach</p>
              </div>
    
              {/* Step 3 - Development */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1982FC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">03</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F1035] mb-2">Development</h3>
                <p className="text-gray-600">Building your solution</p>
              </div>
    
              {/* Step 4 - Launch */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1982FC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">04</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F1035] mb-2">Launch</h3>
                <p className="text-gray-600">Deploying and optimizing</p>
              </div>
            </div>
    
            {/* CTA Section */}
            <div className="text-center mb-16">
              <p className="text-[#1982FC] font-semibold mb-2">Ready to Start?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1035] mb-2">
                Let's Build Something
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1982FC] mb-6">
                Extraordinary Together
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                Ready to take your business to the next level? Our team of experts is here to help you 
                create digital solutions that drive results.
              </p>
    
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#1982FC] mb-2">24/7</h3>
                  <p className="text-gray-600">Support Available</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#1982FC] mb-2">98%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#1982FC] mb-2">Fast</h3>
                  <p className="text-gray-600">Delivery Time</p>
                </div>
              </div>
    
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to='/contact'>
                <button className="bg-[#1982FC] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1570d8] transition-colors">
                  Get Started Today <FiArrowRight />
                </button>
                </Link>
                <Link to='/portfolio'>
                <button className="border-2 border-[#1982FC] text-[#1982FC] px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1982FC] hover:text-white transition-colors">
                  View Our Work <FiEye />
                </button>
                </Link>
              </div>
            </div>
      <Footer/>
    </div>
  );
};

export default Servicepage;
