import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Collaborate from '../../components/portfolio/Collaborate';
import Footer from '../../components/footer/Footer';

// projects pics 
import HH1 from '../../assets/homepage/HH1.png';
import HH2 from '../../assets/homepage/HH4.png';
import PP1 from '../../assets/homepage/PP1.png';
import PP2 from '../../assets/homepage/PP2.png';

// social pics 
import S1 from '../../assets/portfolio/S1.png';
import S2 from '../../assets/portfolio/S2.png';
import S3 from '../../assets/portfolio/S3.png';

const projects = [
  {
    title: "AntarDarshnam",
    category: "Web Development & Design",
    image: PP1,
    description:
      "A spiritual wellness platform brought to life through a minimalist design, reflecting peace and mindfulness resulting in increased user engagement and followers.",
    technologies: ["React", "UI/UX Design", "Content Strategy", "Social Media"],
  },
  {
    title: "The Ayodhya Skates",
    category: "Web Development & Branding",
    image: HH1,
    description:
      "Complete branding, website, and digital marketing for Ayodhya's premier skating academy, enhancing their online presence and attracting local skating enthusiasts.",
    technologies: ["React", "Node.js", "MongoDB", "Digital Marketing", "Branding"],
  },
  {
    title: "Dubey Misthan Bhandar",
    category: "E-commerce Development",
    image: HH2,
    description:
      "Designed and developed a high-conversion, user-friendly website for one of the region's oldest sweet shops, integrating online ordering and local SEO optimization.",
    technologies: ["E-commerce", "SEO", "Online Ordering", "Local Marketing"],
  },
  {
    title: "Advocate Portfolio Website",
    category: "Portfolio Development",
    image: PP2,
    description:
      "Crafted a sleek, personal portfolio for law professionals, blending aesthetics with functionality to showcase their work and influence clients.",
    technologies: ["React", "TailwindCSS", "Professional Design", "SEO"],
  }
];

const socialMediaCampaigns = [
  {
    title: "The Ayodhya Skates",
    industry: "Sports & Youth Training",
    image: S1,
    description:
      "Complete social media management for The Ayodhya Skates, a national-level skating academy for children. From content strategy to daily posts and reel production, we've elevated their Instagram and Facebook presence with educational, motivational, and behind-the-scenes content.",
    results: [
      "Instagram growth: +40%",
      "Parent inquiries up 30%",
      "Designed workshop creatives, participation in competitions, and student testimonials"
    ],
    services: [
      "Content Strategy",
      "Daily Posts",
      "Reel Production",
      "Community Management"
    ]
  },
  {
    title: "Hurricane Vent",
    industry: "Industrial Ventilation & Skylight Solutions – UAE & Oman",
    image: S2,
    description:
      "We manage two tailored digital strategies: one for the B2B audience in the UAE and another for the Oman region. Our services include ad campaign design, SEO optimization, and content creation focusing on educating contractors, builders, and factory owners about energy-saving solutions.",
    results: [
      "Meta ad campaigns with 1Lakh+ monthly reach",
      "Instagram Reels explaining product benefits",
      "SEO-focused content for multilingual visibility"
    ],
    services: [
      "Meta Ads",
      "SEO Optimization",
      "Content Creation",
      "B2B Marketing"
    ]
  },
  {
    title: "Hurricane Vent LLC",
    industry: "Construction & Engineering Services – Oman",
    image: S3,
    description:
      "In addition to product promotions, we've positioned Hurricane Vent LLC as a thought leader through expert-level infographics, installation visuals, and carousel content. Our campaign strategy included WhatsApp funneling, inquiry generation, and cross-platform consistency.",
    results: [
      "Boosted website traffic by 4x in 2 months",
      "Generated over 30 qualified leads",
      "Created educational content for roof turbine installations"
    ],
    services: [
      "Infographic Design",
      "WhatsApp Marketing",
      "Lead Generation",
      "Educational Content"
    ]
  }
];

const ProjectCard = ({ title, category, description, technologies, image }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-sm text-indigo-500 font-medium mb-2">{category}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span key={index} className="bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded-full">
          {tech}
        </span>
      ))}
    </div>
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
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
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

const Portfolio = () => {
  return (
    <div className="bg-[#f0faff] min-h-screen text-gray-800">
      <Navbar />

      <section className="text-center py-12 px-4">
        <p className="text-sm text-teal-600 font-medium uppercase">Our Work</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Our <span className="text-blue-600">Portfolio</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Every project is a unique story and we're passionate about shaping yours into a digital masterpiece.
          Explore our collection of successful projects that showcase our expertise.
        </p>
      </section>

      <section className="px-6 md:px-12 py-12 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🚀 Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-12 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">📱 Social Media Management & Digital Marketing</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Building brands and driving engagement across digital platforms
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {socialMediaCampaigns.map((campaign, index) => (
            <SocialMediaCard key={index} {...campaign} />
          ))}
        </div>
      </section>
      <Collaborate />
      <Footer />
    </div>
  );
};

export default Portfolio;
