import React from 'react';
import Cube from '../cube/Cube'; // ✅ Use your tailwind-based Cube

const Growth = () => {
  const growthData = [
    { content: "End to End Development" },
    { content: "Transparent Collaboration" },
    { content: "On-Time Delivery" },
    { content: "Modern, Scalable, Performance-First Design" },
  ];

  return (
    <div id="growth" className="relative bg-[#f7fafb] my-20 overflow-hidden">
      {/* Floating Cubes */}
      <div className="absolute top-[8%] left-[4%] w-[80px] h-[80px] opacity-50 pointer-events-none z-[1] animate-[floatCube_6s_ease-in-out_infinite]">
        <Cube />
      </div>
      <div className="absolute bottom-[8%] right-[4%] w-[80px] h-[80px] opacity-50 pointer-events-none z-[1] animate-[floatCube_8s_ease-in-out_infinite]">
        <Cube />
      </div>

      {/* Floating Circles */}
      <div className="absolute top-[12%] right-[8%] w-[50px] h-[50px] rounded-full border-2 border-cyan-600 opacity-40 z-[1] animate-[floatCircle_7s_ease-in-out_infinite]" />
      <div className="absolute bottom-[18%] left-[10%] w-[50px] h-[50px] rounded-full border-2 border-cyan-600 opacity-40 z-[1] animate-[floatCircle_7s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 w-[50px] h-[50px] rounded-full border-2 border-cyan-600 opacity-40 z-[1] animate-[floatCircle_7s_ease-in-out_infinite] transform -translate-x-1/2 -translate-y-1/2" />

      <div className="w-[90%] max-w-6xl mx-auto text-center py-8 relative z-[2]">
        {/* Heading */}
        <div className="mb-10">
          <span className="text-cyan-600 text-xl font-semibold block mb-1">WHY VAR PIXELS</span>
          <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-3">
            Trusted by Creators, Startups & Growth-Driven Brands
          </h2>
          <p className="text-lg md:text-base text-gray-700 opacity-70 mx-auto max-w-3xl leading-relaxed">
            We can make your digital presence creative as well as functional. From strategy to deployment, we're your design and tech team rolled into one.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12">
          {growthData.map((item, index) => (
            <div
              key={index}
              className="w-full  bg-white rounded-xl shadow-md p-6 cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <h3 className="text-lg font-semibold text-gray-800">{item.content}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Growth;
