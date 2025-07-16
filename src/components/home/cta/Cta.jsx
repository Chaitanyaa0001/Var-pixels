import React from 'react';
import './Cta.css';
import { Cube } from '../home/cube/Cube';

const Cta = () => {
  return (
    <div className="cta-section">
      {/* Background Decorative Elements */}
      <div className="cube-wrapper cta-cube-1"><Cube /></div>
      <div className="cube-wrapper cta-cube-2"><Cube /></div>
      <div className="cube-wrapper cta-cube-3"><Cube /></div>
      <div className="cube-wrapper cta-cube-4"><Cube /></div>
      <div className="cube-wrapper cta-cube-5"><Cube /></div>

      <div className="circle cta-circle-1"></div>
      <div className="circle cta-circle-2"></div>

      <h2>Let's Bring Your Brand Online</h2>
      <p>
        Ready to transform your digital presence? Let's discuss your project.
      </p>
      <button className="cta-button">
        Start Your Project <span>&rarr;</span>
      </button>
    </div>
  );
};

export default Cta;
