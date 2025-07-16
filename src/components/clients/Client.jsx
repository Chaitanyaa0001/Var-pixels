import React from 'react';
import './Client.css';
import { Cube } from '../home/cube/Cube';

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
    <div id="client" className="client-section">
      {/* Background Elements with New Positions */}
      <div className="cube-wrapper cube-client-1"><Cube /></div>
      <div className="cube-wrapper cube-client-2"><Cube /></div>
      <div className="circle circle-client-1"></div>
      <div className="circle circle-client-2"></div>

      <div className="client-container">
        <span>CLIENT TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>

        <div className="client-card-container">
          {client.map((item, index) => (
            <div className="client-card" key={index}>
              <div className="stars">{'★'.repeat(item.stars)}</div>
              <p className="client-feedback">"{item.content}"</p>
              <div className="client-info">
                <img src={item.image} alt={item.name} className="client-img" />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.company}</p>
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
