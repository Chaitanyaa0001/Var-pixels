import React from 'react';
import './Mian.css';
import { Cube } from '../cube/Cube'; // Ensure correct import

const Main = () => {
  return (
    <div className="hero-section">
      {/* Cubes inside hero section */}
      <div className="cube-wrapper hero-cube-1"><Cube /></div>
      <div className="cube-wrapper hero-cube-2"><Cube /></div>
      <div className="cube-wrapper hero-cube-3"><Cube /></div>

      {/* Main Content */}
      <div className="hero-content">
        <span>Digital Innovation Partner</span>
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
    </div>
  );
};

export default Main;
