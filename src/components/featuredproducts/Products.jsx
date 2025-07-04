import React from 'react';
import './Products.css';
import { Cube } from '../cube/Cube'; // Ensure path is correct
import f1 from "../../assets/f1.jpg"
import f2 from "../../assets/f2.jpg"
import f3 from "../../assets/f3.jpg"
import f4 from "../../assets/f4.jpg"



const projectData = [
  {
    title: 'The Ayodhya Skates',
    description: "Complete branding, website, and digital marketing for Ayodhya's premier skating academy.",
    image: f1,
    link: '#',
  },
  {
    title: 'Hurricane Vent',
    description: "Digital Marketing + SEO for industrial audience in UAE & Oman.",
    image: f2,
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Sleek personal portfolio for law professionals with aesthetic functionality.',
    image: f3,
    link: '#',
  },
  {
    title: 'Dubey Misthan Bhandar',
    description: "High-conversion website for one of the region's oldest sweet shops.",
    image: f4,
    link: '#',
  },
];

const Products = () => {
  return (
    <div id="products" className="products-section">
      {/* Floating Cubes */}
      <div className="cube-wrapper cube-left"><Cube /></div>
      <div className="cube-wrapper cube-right"><Cube /></div>

      {/* Floating Circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>

      <div className="products-container">
        <div className="products-heading">
          <span>Featured Projects</span>
          <h2>Our Work that Speaks for Itself</h2>
        </div>

        <div className="products-grid">
          {projectData.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.title} className="product-image" />
              <div className="product-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="view-link">
                  View Details <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="products-button">
          <button>View Full Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
