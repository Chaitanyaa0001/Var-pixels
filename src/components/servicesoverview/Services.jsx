import React from 'react';
import './Services.css'; // optional, if you're styling

const serviceData = [
  {
    title: "Web Design & Development",
    description: "Fast, secure, SEO-ready websites tailored to your brand.",
  },
  {
    title: "App Development",
    description: "Mobile-first interfaces designed for user delight.",
  },
  {
    title: "Digital Marketing & Strategy",
    description: "Campaigns that bring traffic, leads, and conversions.",
  },
  {
    title: "Branding & SEO",
    description: "Logo, brand voice, and visuals that stick in people's minds.",
  },
  {
    title: "AI/ML Solutions",
    description: "Smart tech that works for your business.",
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="heading">
        <span>SERVICES OVERVIEW</span>
        <h2>Everything You Need To Launch And Grow Online</h2>
        <p>From strategy to deployment, we provide comprehensive digital solutions.</p>
     </div>

      <div className="cards-container">
        {serviceData.map((service, index) => (
          <div className="card" key={index}>
            <div className="icon">
                <i className="service-icon">🛠️</i> {/* Placeholder icon */}
            </div>
            <span className="card-title">{service.title}</span>
            <p className="card-desc">{service.description}</p>
          </div>
        ))}
      </div>

      <button>EXplore Services</button>
    </div>
  );
};

export default Services;
