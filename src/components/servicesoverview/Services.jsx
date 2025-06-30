import React from 'react';
import './Services.css';
import { RiGlobalLine, RiSmartphoneLine, RiBarChartGroupedLine, RiBrushLine, RiCpuLine } from 'react-icons/ri';

const serviceData = [
  {
    icon: <RiGlobalLine />,
    title: "Web Design & Development",
    description: "Fast, secure, SEO-ready websites tailored to your brand.",
  },
  {
    icon: <RiSmartphoneLine />,
    title: "App Development",
    description: "Mobile-first interfaces designed for user delight.",
  },
  {
    icon: <RiBarChartGroupedLine />,
    title: "Digital Marketing & Strategy",
    description: "Campaigns that bring traffic, leads, and conversions.",
  },
  {
    icon: <RiBrushLine />,
    title: "Branding & SEO",
    description: "Logo, brand voice, and visuals that stick in people's minds.",
  },
  {
    icon: <RiCpuLine />,
    title: "AI/ML Solutions",
    description: "Smart tech that works for your business.",
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="heading">
        <span>SERVICES OVERVIEW</span>
        <h2>Everything You Need To Launch & Grow Online</h2>
        <p>From strategy to deployment, we provide comprehensive digital solutions.</p>
      </div>

      <div className="cards-container">
        {serviceData.map((service, index) => (
          <div className="card" key={index}>
            <div className="icon">
              <i className="service-icon">{service.icon}</i>
            </div>
            <span className="card-title">{service.title}</span>
            <p className="card-desc">{service.description}</p>
          </div>
        ))}
      </div>

      <button>Explore Services →</button>
    </div>
  );
};

export default Services;
