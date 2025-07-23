import React from 'react';
import { FiArrowRight, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProcessSection = () => {
  return (
    <div className="bg-[#EDF4FF] py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Our Process Section */}
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
      </div>
    </div>
  );
};

export default ProcessSection;
