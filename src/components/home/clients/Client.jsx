import React from 'react';
import Cube from '../cube/Cube';

const client = [
  {
    stars: 5,
    content:
      "VAR PIXELS transformed our vision into a digital masterpiece. The team's professionalism, creativity, and technical skill are unmatched.",
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Ravinder Kumar',
    company: 'The Ayodhya Skates',
  },
  {
    stars: 5,
    content:
      "Their digital marketing strategy took our local brand to new heights. Highly recommended for any business looking to grow online.",
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    name: 'Awadh Kumar Dubey',
    company: 'Dubey Misthan Bhandar',
  },
];

const Client = () => {
  return (
    <div id="client" className="relative bg-[#f9fafb] py-12 px-6 text-center overflow-hidden z-10">
      {/* Floating Cubes */}
      <div className="absolute top-[15%] right-[5%] w-[70px] h-[70px] opacity-30 pointer-events-none animate-[rotateCube1_7s_ease-in-out_infinite] z-0">
        <Cube />
      </div>
      <div className="absolute bottom-[12%] left-[10%] w-[70px] h-[70px] opacity-30 pointer-events-none animate-[rotateCube2_9s_ease-in-out_infinite] z-0">
        <Cube />
      </div>

      {/* Floating Circles */}
      <div className="absolute top-[10%] left-[25%] w-[60px] h-[60px] border-2 border-cyan-400 rounded-full opacity-30 pointer-events-none animate-[floatCircle_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[15%] right-[20%] w-[60px] h-[60px] border-2 border-cyan-400 rounded-full opacity-30 pointer-events-none animate-[floatCircle_6s_ease-in-out_infinite]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <span className="text-cyan-600 font-bold text-lg uppercase block mb-2">Client Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Clients Say</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {client.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 max-w-sm w-full text-left p-6"
            >
              <div className="text-yellow-400 text-xl mb-4">{'★'.repeat(item.stars)}</div>
              <p className="italic text-gray-800 mb-6">"{item.content}"</p>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
