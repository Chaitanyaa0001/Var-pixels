import React from 'react';

const Cube = () => {
  return (
    <div className="w-[60px] h-[60px] perspective-[500px]">
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'turn 5s linear infinite',
        }}
      >
        <div className="absolute w-full h-full bg-sky-300 border border-black opacity-50" style={{ transform: 'translateZ(30px)' }} />
        <div className="absolute w-full h-full bg-sky-300 border border-black opacity-50" style={{ transform: 'translateZ(-30px) rotateY(180deg)' }} />
        <div className="absolute w-full h-full bg-sky-300 border border-black opacity-50" style={{ transform: 'translateX(-30px) rotateY(-90deg)' }} />
        <div className="absolute w-full h-full bg-sky-300 border border-black opacity-50" style={{ transform: 'translateX(30px) rotateY(90deg)' }} />
        <div className="absolute w-full h-full bg-sky-300 border border-black opacity-50" style={{ transform: 'translateY(-30px) rotateX(90deg)' }} />
        <div className="absolute w-full h-full bg-sky-300 border border-black opacity-50" style={{ transform: 'translateY(30px) rotateX(-90deg)' }} />
      </div>
    </div>
  );
};

export default Cube;
