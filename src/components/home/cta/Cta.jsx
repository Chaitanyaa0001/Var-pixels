import React from 'react';
import Cube from '../cube/Cube';

const Cta = () => {
  return (
    <div className="relative bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-center py-12 px-6 overflow-hidden">
      {/* Floating Cubes */}
      <div className="absolute top-[30%] left-[5%] w-20 h-20 opacity-30 pointer-events-none animate-[floatCube1_8s_ease-in-out_infinite]">
        <Cube />
      </div>
      <div className="absolute top-[60%] right-[8%] w-20 h-20 opacity-30 pointer-events-none animate-[floatCube2_10s_ease-in-out_infinite]">
        <Cube />
      </div>
      <div className="absolute top-[10%] right-[25%] w-20 h-20 opacity-30 pointer-events-none animate-[floatCube3_12s_ease-in-out_infinite]">
        <Cube />
      </div>
      <div className="absolute bottom-[20%] left-[15%] w-20 h-20 opacity-30 pointer-events-none animate-[floatCube4_9s_ease-in-out_infinite]">
        <Cube />
      </div>
      <div className="absolute top-[45%] left-[50%] w-20 h-20 opacity-30 pointer-events-none animate-[floatCube5_11s_ease-in-out_infinite]">
        <Cube />
      </div>

      {/* Circles */}
      <div className="absolute top-[15%] left-[10%] w-[60px] h-[60px] border-2 border-white/30 rounded-full pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-[60px] h-[60px] border-2 border-white/30 rounded-full pointer-events-none" />

      {/* CTA Content */}
      <h2 className="text-4xl font-bold mb-4">Let's Bring Your Brand Online</h2>
      <p className="text-lg mb-6">
        Ready to transform your digital presence? Let's discuss your project.
      </p>
      <button className="bg-white text-cyan-500 px-6 py-3 font-semibold rounded-lg text-base transition duration-300 hover:bg-slate-100">
        Start Your Project <span>&rarr;</span>
      </button>
    </div>
  );
};

export default Cta;
