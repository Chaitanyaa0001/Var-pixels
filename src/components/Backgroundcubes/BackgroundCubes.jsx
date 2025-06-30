import React from 'react';
import './BackgroundCubes.css';
import { Cube } from '../cube/Cube';

const BackgroundCubes = () => {
  return (
    <div className="background-cubes">
      <div className="cube-wrapper cube-global-pos-1"><Cube /></div>
      <div className="cube-wrapper cube-global-pos-2"><Cube /></div>
      <div className="cube-wrapper cube-global-pos-3"><Cube /></div>
      <div className="cube-wrapper cube-global-pos-4"><Cube /></div>
      <div className="cube-wrapper cube-global-pos-5"><Cube /></div>
      <div className="cube-wrapper cube-global-pos-6"><Cube /></div>

      <div className="circle circle-pos-1"></div>
      <div className="circle circle-pos-2"></div>
      <div className="circle circle-pos-3"></div>

      <div className="circle-wrapper circle-pos-4">
        <div className="outer-circle">
          <div className="triangle"></div>
        </div>
      </div>

      <div className="circle-wrapper circle-pos-5">
        <div className="outer-circle">
          <div className="triangle"></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCubes;
