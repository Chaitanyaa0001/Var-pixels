import React from 'react';
import './Cube.css';

export const Cube = () => {
  return (
    <div>
      <div className="container">
        <div className="cube">
          <div className="face top"></div>
          <div className="face bottom"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face front"></div>
          <div className="face back"></div>
        </div>
      </div>
    </div>
  );
};
