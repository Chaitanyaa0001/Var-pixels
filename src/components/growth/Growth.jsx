import React from 'react';
import './Growh.css';
import { Cube } from '../cube/Cube'; // Correct import path to Cube component

const Growth = () => {
  const growthData = [
    { content: "End to End Development" },
    { content: "Transparent Collaboration" },
    { content: "On-Time Delivery" },
    { content: "Modern, Scalable, Performance-First Design" },
  ];

  return (
    <div id="growth" className="growth-section">
      {/* Background Cubes */}
      <div className="cube-wrapper cube-pos-1"><Cube /></div>
      <div className="cube-wrapper cube-pos-2"><Cube /></div>

      {/* Background Circles */}
      <div className="circle circle-pos-1"></div>
      <div className="circle circle-pos-2"></div>
      <div className="circle circle-pos-3"></div>

      <div className="growth-container">
        <div className="growth-heading">
          <span>WHY VAR PIXELS</span>
          <h2>Trusted by Creators, Startups & Growth-Driven Brands</h2>
          <p>
            We can make your digital presence creative as well as functional.
            From strategy to deployment, we're your design and tech team rolled into one.
          </p>
        </div>
        <div className="growth-cards-container">
          {growthData.map((item, index) => (
            <div className="growth-card" key={index}>
              <h3>{item.content}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Growth;
