import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaStar, FaUsers, FaTools } from 'react-icons/fa'

import Navbar from '../../components/navbar/Navbar';
import Collaborate from '../../components/portfolio/Collaborate';
import Footer from '../../components/footer/Footer';

// Project images
import HH1 from '../../assets/homepage/HH1.png';
import HH2 from '../../assets/homepage/HH4.png';
import PP1 from '../../assets/homepage/PP1.png';
import PP2 from '../../assets/homepage/PP2.png';

// Social campaign images
import S1 from '../../assets/portfolio/S1.png';
import S2 from '../../assets/portfolio/S2.png';
import S3 from '../../assets/portfolio/S3.png';

const projects = [
  {
    slug: 'antar-darshnam',
    title: "AntarDarshnam",
    category: "Web Development & Design",
    image: PP1,
    description: "A spiritual wellness platform brought to life through a minimalist design...",
    technologies: ["React", "UI/UX Design", "Content Strategy", "Social Media"]
  },
  {
    slug: 'ayodhya-skates',
    title: "The Ayodhya Skates",
    category: "Web Development & Branding",
    image: HH1,
    description: "Complete branding, website, and digital marketing for Ayodhya's premier skating academy...",
    technologies: ["React", "Node.js", "MongoDB", "Digital Marketing", "Branding"]
  },
  {
    slug: 'dubey-misthan-bhandar',
    title: "Dubey Misthan Bhandar",
    category: "E-commerce Development",
    image: HH2,
    description: "Designed and developed a high-conversion website for a local sweet shop...",
    technologies: ["E-commerce", "SEO", "Online Ordering", "Local Marketing"]
  },
  {
    slug: 'portfolio-website',
    title: "Advocate Portfolio Website",
    category: "Portfolio Development",
    image: PP2,
    description: "Crafted a sleek portfolio for law professionals blending aesthetics and usability...",
    technologies: ["React", "TailwindCSS", "Professional Design", "SEO"]
  }
];

const socialMediaCampaigns = [
  {
    title: "The Ayodhya Skates",
    industry: "Sports & Youth Training",
    image: S1,
    description: "Complete social media management for the academy including reels, stories, and more.",
    results: [
      "Instagram growth: +40%",
      "Parent inquiries up 30%",
      "Created student testimonials & workshop creatives"
    ],
    services: [
      "Content Strategy", "Daily Posts", "Reel Production", "Community Management"
    ]
  },
  {
    title: "Hurricane Vent",
    industry: "Industrial Ventilation & Skylight Solutions – UAE & Oman",
    image: S2,
    description: "Managing tailored digital strategies, Meta Ads, and SEO-focused content.",
    results: [
      "Meta ad campaigns with 1L+ reach",
      "Reels explaining product benefits",
      "SEO for multilingual visibility"
    ],
    services: [
      "Meta Ads", "SEO Optimization", "Content Creation", "B2B Marketing"
    ]
  },
  {
    title: "Hurricane Vent LLC",
    industry: "Construction & Engineering – Oman",
    image: S3,
    description: "Lead generation through WhatsApp marketing, carousel content & more.",
    results: [
      "Boosted traffic 4x",
      "30+ qualified leads",
      "Educational content for roof turbines"
    ],
    services: [
      "Infographic Design", "WhatsApp Marketing", "Lead Generation", "Educational Content"
    ]
  }
];

const ProjectCard = ({ title, category, description, technologies, image, slug }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all flex flex-col justify-between">
    <div>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-indigo-500 font-medium mb-2">{category}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <Link to={`/portfolio/${slug}`} className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">
      More Info →
    </Link>
  </div>
);

const SocialMediaCard = ({ title, industry, description, results, services, image }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-sm text-indigo-500 font-medium mb-2">{industry}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-3">
      <h4 className="text-sm font-semibold text-gray-700 mb-1">✅ Results Achieved</h4>
      <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
        {results.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-gray-700 mb-1">🛠️ Services Provided</h4>
      <div className="flex flex-wrap gap-2">
        {services.map((service, index) => (
          <span key={index} className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-full">
            {service}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const SuccessStoriesBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Project Success Stories
        </h2>
        <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
          Numbers that speak for our expertise and client satisfaction
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mb-4">
              <FaRocket className="text-4xl text-orange-400 mx-auto" />
            </div>
            <h3 className="text-white text-4xl font-bold mb-2">50+</h3>
            <p className="text-blue-100">Projects Completed</p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <FaStar className="text-4xl text-yellow-400 mx-auto" />
            </div>
            <h3 className="text-white text-4xl font-bold mb-2">98%</h3>
            <p className="text-blue-100">Client Satisfaction</p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <FaUsers className="text-4xl text-red-400 mx-auto" />
            </div>
            <h3 className="text-white text-4xl font-bold mb-2">25+</h3>
            <p className="text-blue-100">Happy Clients</p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <FaTools className="text-4xl text-gray-300 mx-auto" />
            </div>
            <h3 className="text-white text-4xl font-bold mb-2">24/7</h3>
            <p className="text-blue-100">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => (
  <div className="bg-[#f0faff] min-h-screen text-gray-800">
    <Navbar />

    <section className="text-center py-12 px-4">
      <p className="text-sm text-teal-600 font-medium uppercase">Our Work</p>
      <h1 className="text-4xl md:text-5xl font-bold mt-2">
        Our <span className="text-blue-600">Portfolio</span>
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        Every project is a unique story — we help shape yours into a digital masterpiece.
      </p>
    </section>

    <section className="px-6 md:px-12 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🚀 Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </div>
    </section>

    <section className="px-6 md:px-12 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">📱 Social Media & Digital Marketing</h2>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Building brands and driving engagement across digital platforms.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {socialMediaCampaigns.map((campaign, index) => (
          <SocialMediaCard key={index} {...campaign} />
        ))}
      </div>
    </section>

    {/* Success Stories Banner */}
    <SuccessStoriesBanner />

    <Collaborate />
    <Footer />
  </div>
);

export default Portfolio;
