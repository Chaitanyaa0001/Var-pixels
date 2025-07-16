import React from 'react';
import './Mian.css';
import { Cube } from '../cube/Cube'; // Ensure correct import

const Main = () => {
  return (
    <div className="hero-section">
      {/* Background Circles */}
      <div className="circle circle-pos-top-1"></div>
      <div className="circle circle-pos-top-2"></div>

      <div className="circle-wrapper circle-pos-top-3">
        <div className="outer-circle">
          <div className="triangle"></div>
        </div>
      </div>

      {/* Cubes inside hero section */}
      <div className="cube-wrapper hero-cube-1"><Cube /></div>
      <div className="cube-wrapper hero-cube-2"><Cube /></div>
      <div className="cube-wrapper hero-cube-3"><Cube /></div>

      {/* Main Content */}
      <div className="hero-content">
        <h5>Digital Innovation Partner</h5>
        <h2>
          Turning Brands into <span>Digital Experiences</span>
        </h2>
        <p>
          Websites, Apps, AI/ML Solutions, SEO & Digital Marketing that make your brand unforgettable.
        </p>
        <div className="buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Contact Us</button>
        </div>
      </div>

      {/* Circles at bottom */}
      <div className="circle circle-pos-bottom-1"></div>
      <div className="circle circle-pos-bottom-2"></div>

      <div className="circle-wrapper circle-pos-bottom-3">
        <div className="outer-circle">
          <div className="triangle"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
