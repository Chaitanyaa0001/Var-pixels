import React from 'react';
import Cube from '../cube/Cube';
import HH1 from '../../../assets/homepage/HH1.png'
import HH2 from '../../../assets/homepage/HH2.png'
import HH3 from '../../../assets/homepage/HH3.png'
import HH4 from '../../../assets/homepage/HH4.png'


const projectData = [
  {
    title: 'The Ayodhya Skates',
    description: "Complete branding, website, and digital marketing for Ayodhya's premier skating academy.",
    image: HH1,
    link: '#',
  },
  {
    title: 'Hurricane Vent',
    description: "Digital Marketing + SEO for industrial audience in UAE & Oman.",
    image: HH2,
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Sleek personal portfolio for law professionals with aesthetic functionality.',
    image:HH3,
    link: '#',
  },
  {
    title: 'Dubey Misthan Bhandar',
    description: "High-conversion website for one of the region's oldest sweet shops.",
    image:HH4,
    link: '#',
  },
];

const Products = () => {
  return (
    <div id="products" className="relative bg-white py-16 px-6 overflow-hidden z-10">
      {/* Floating Cubes */}
      <div className="absolute top-[10%] left-0 w-[80px] h-[80px] opacity-50 pointer-events-none animate-[floatCubeLeft_6s_ease-in-out_infinite] z-0">
        <Cube />
      </div>
      <div className="absolute bottom-[15%] right-0 w-[80px] h-[80px] opacity-50 pointer-events-none animate-[floatCubeRight_8s_ease-in-out_infinite] z-0">
        <Cube />
      </div>

      {/* Floating Circles */}
      <div className="absolute top-[20%] left-[40%] w-[50px] h-[50px] border-2 border-cyan-600 rounded-full opacity-40 pointer-events-none animate-[floatCircle_7s_ease-in-out_infinite]" />
      <div className="absolute top-[50%] left-[50%] w-[50px] h-[50px] border-2 border-cyan-600 rounded-full opacity-40 pointer-events-none animate-[floatCircle_7s_ease-in-out_infinite] transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-[20%] right-[40%] w-[50px] h-[50px] border-2 border-cyan-600 rounded-full opacity-40 pointer-events-none animate-[floatCircle_7s_ease-in-out_infinite]" />

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto text-center z-10 relative">
        {/* Heading */}
        <div className="mb-12">
          <span className="text-cyan-600 font-semibold text-xl block mb-2">Featured Projects</span>
          <h2 className="text-4xl font-bold md:text-3xl">Our Work that Speaks for Itself</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 max-w-xs w-full cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <a
                  href={item.link}
                  className="text-cyan-500 font-semibold inline-flex items-center gap-1"
                >
                  View Details <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3 px-6 rounded-lg text-base font-medium transition">
            View Full Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
