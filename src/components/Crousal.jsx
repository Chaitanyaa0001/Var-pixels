import React, { useState } from 'react';

const Crousal = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative  w-[80%] mx-auto aspect-[16/9]">
      {/* Carousel wrapper */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              className="max-w-full max-h-full object-contain rounded-md"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-4 left-1/2">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 6 10">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 6 10">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Crousal;
