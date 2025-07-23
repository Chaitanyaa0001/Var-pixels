import React from 'react';
import { useParams } from 'react-router-dom';
import HH1 from '../../assets/homepage/HH1.png';
import HH2 from '../../assets/homepage/HH2.png';
import HH3 from '../../assets/homepage/HH3.png';
import HH4 from '../../assets/homepage/HH4.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Crousal from '../../components/Crousal';

// Crousal image imports
import C1 from '../../assets/crousal/ayodhyaaskates/C1.png';
import C2 from '../../assets/crousal/ayodhyaaskates/C2.png';
import C3 from '../../assets/crousal/ayodhyaaskates/C3.png';
import C4 from '../../assets/crousal/ayodhyaaskates/C4.png';
import C5 from '../../assets/crousal/ayodhyaaskates/C5.png';

import b1 from '../../assets/crousal/bhanar/b1.png';
import b2 from '../../assets/crousal/bhanar/b2.png';
import b3 from '../../assets/crousal/bhanar/b3.png';
import b4 from '../../assets/crousal/bhanar/b4.png';
import b5 from '../../assets/crousal/bhanar/b5.png';

import h1 from '../../assets/crousal/hurricant/h1.png';
import h2 from '../../assets/crousal/hurricant/h2.png';
import h3 from '../../assets/crousal/hurricant/h3.jpg';

import hehe1 from '../../assets/crousal/apardarshnam/hehe1.png'
import hehe2 from '../../assets/crousal/apardarshnam/hehe2.png'
import hehe3 from '../../assets/crousal/apardarshnam/hehe3.png'
import hehe4 from '../../assets/crousal/apardarshnam/hehe4.png'
import hehe5 from '../../assets/crousal/apardarshnam/hehe5.png'

import p1 from '../../assets/crousal/portfolioc/p1.png';
import p2 from '../../assets/crousal/portfolioc/p2.png';
import p3 from '../../assets/crousal/portfolioc/p3.png';
import Featurecard from '../../components/Featurecard';

import PP1 from '../../assets/homepage/PP1.png'

const projectData = [
  {
    slug: 'antar-darshnam',
    title: "AntarDarshnam",
    description: "Spiritual wellness platform with minimalist design reflecting peace and mindfulness.",
    image: PP1,
    client:'Antar Darshnam',
    duration: '3 months',
    year:'2024',
    tag:'Web developnment and design'
  },
  {
    slug: 'ayodhya-skates',
    title: 'The Ayodhya Skates',
    description: "Complete branding, website, and digital marketing for Ayodhya's premier skating academy.",
    image: HH1,
    client: 'The Ayodhya Skates',
    duration: '3 months',
    year: '2024',
    tag: 'Branding & Web Development',
  },
  {
    slug: 'hurricane-vent',
    title: 'Hurricane Vent',
    description: 'Digital Marketing + SEO for industrial audience in UAE & Oman.',
    image: HH2,
    client: 'Hurricane Vent LLC',
    duration: '6 months',
    year: '2024',
    tag: 'Digital Marketing & SEO',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Sleek personal portfolio for law professionals with aesthetic functionality.',
    image: HH3,
    client: 'Legal Professional',
    duration: '2 months',
    year: '2024',
    tag: 'Portfolio Design',
  },
  {
    slug: 'dubey-misthan-bhandar',
    title: 'Dubey Misthan Bhandar',
    description: "High-conversion website for one of the region's oldest sweet shops.",
    image: HH4,
    client: 'Dubey Misthan Bhandar',
    duration: '4 months',
    year: '2024',
    tag: 'Website Development',
  },
];

const imageMap = {
  'ayodhya-skates': [C1, C2, C3, C4, C5],
  'hurricane-vent': [h1, h2, h3],
  'portfolio-website': [p1, p2, p3],
  'dubey-misthan-bhandar': [b1, b2, b3, b4, b5],
  'antar-darshnam' : [hehe1,hehe2,hehe3,hehe4,hehe5]
};

// Updated to exactly 4 cards per project with combined Technologies & Services
const featureCards = {
  'ayodhya-skates': [
    {
      title: 'The Challenge',
      content: `The Ayodhya Skates needed a complete digital transformation to establish their presence as a premier skating academy. They required comprehensive branding, a professional website, and effective digital marketing strategies to attract students and build credibility.`,
    },
    {
      title: 'Our Solution',
      content: `We developed a vibrant brand identity that captures the energy and excitement of skating. The website features an intuitive design with course information, instructor profiles, and online registration. Our digital marketing campaign increased their online visibility and student enrollment significantly.`,
    },
    {
      title: 'Results',
      content: `• 300% increase in online inquiries\n• 50+ new student registrations within first month\n • Established strong social media presence\n • Professional brand recognition in the local market`,
    },
    {
      title: 'Technologies Used',
      content: `React,Node.js, MongoDB, Tailwind CSS`,
      serviceProvided: 'Services Provided',
      lines: `Brand Identity,Web Development,Digital Marketing,SEO Optimization`,
    },
  ],
  'hurricane-vent': [
    {
      title: 'The Challenge',
      content: `Hurricane Vent needed to establish a strong digital presence in the competitive industrial market of UAE and Oman. They required targeted digital marketing strategies to reach industrial clients and improve their search engine visibility.`,
    },
    {
      title: 'Our Solution',
      content: `We implemented a comprehensive digital marketing strategy focused on industrial audience targeting. Our SEO optimization improved their search rankings for industry-specific keywords, while targeted campaigns increased qualified leads from UAE and Oman markets.`,
    },
    {
      title: 'Results',
      content: `• 200% increase in qualified leads\n • First page ranking for 15+ industry keywords\n • Expanded market reach in UAE & Oman\n • Improved brand recognition in industrial sector`,
    },
    {
      title: 'Technologies Used',
      content: `Google Ads SEO Tools Analytics Social Media`,
      serviceProvided: 'Services Provided',
      lines: `Digital Marketing,SEO Optimization,Lead Generation,Market Analysis`,
    }
  ],
  'portfolio-website': [
    {
      title: 'The Challenge',
      content: `A legal professional needed a sophisticated portfolio website that would reflect their expertise and professionalism while being user-friendly and aesthetically pleasing.`,
    },
    {
      title: 'Our Solution',
      content: `We created a clean, professional portfolio website with elegant design elements. The site features case studies, professional credentials, and an easy-to-use contact system, all optimized for both desktop and mobile viewing.`,
    },
    {
      title: 'Results',
      content: `• Professional online presence established\n • Increased client inquiries by 150%\n • Mobile-responsive design\n • SEO-optimized for legal keywords`,
    },
    {
      title: 'Technologies Used',
      content: `React Tailwind CSS TypeScript Responsive Design`,
      serviceProvided: 'Services Provided',
      lines: `Web Development,UI/UX Design,SEO Optimization,Mobile Optimization`,
    },
  ],
   'antar-darshnam': [
    {
      title: 'The Challenge',
      content: `AntarDarshnam needed a digital platform that would embody spiritual wellness and mindfulness while providing practical functionality for their community and content.`,
    },
    {
      title: 'Our Solution',
      content: `We created a serene, minimalist website that reflects the spiritual nature of the platform. The design emphasizes peace and mindfulness through careful use of whitespace, calming colors, and intuitive navigation that guides users on their spiritual journey.`,
    },
    {
      title: 'Results',
      content: `• Peaceful user experience achieved\n • Increased community engagement\n • Mobile-optimized meditation platform\n • SEO-optimized for spiritual wellness keywords`,
    },
    {
      title: 'Technologies Used',
      content: `React.js,Meditation Tools,Community platform,Mobile First `,
      serviceProvided: 'Services Provided',
      lines: `Web Development, Spritual Branding ,Community Building , Mobile Optimization`,
    },
  ],

  'dubey-misthan-bhandar': [
    {
      title: 'The Challenge',
      content: `Dubey Misthan Bhandar, one of the region's oldest sweet shops, needed to modernize their business with an online presence that could handle orders and showcase their traditional sweets while maintaining their heritage appeal.`,
    },
    {
      title: 'Our Solution',
      content: `We developed a comprehensive e-commerce website that beautifully showcases their traditional sweets and snacks. The platform includes online ordering, delivery management, and a design that honors their rich heritage while appealing to modern customers.`,
    },
    {
      title: 'Results',
      content: `• 400% increase in online orders\n • Expanded customer base beyond local area\n • Streamlined order management system\n • Preserved brand heritage in digital format`,
    },
    {
      title: 'Technologies Used',
      content: `React,E-commerce,Platform,Payment Gateway,CMS`,
      serviceProvided: 'Services Provided',
      lines: `E-commerce Development, Brand Preservation, Digital Marketing, Order Management`,
    },
    
  ],
  
};


const ViewDetails = () => {
  const { slug } = useParams();
  const project = projectData.find((item) => item.slug === slug);

  if (!project) {
    return <div className="text-center py-20 text-red-600">Project not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className=' bg-blue-50  '>
      {/* Hero Section */}
      <div className="  w-[80%] lg:w-[60%] mx-auto">
        <div className="mb-30">
          <p className="text-[0.9rem] text-blue-600 mb-4 py-6 cursor-pointer hover:underline">
            ← Back to Portfolio
          </p>

          {project.tag && (
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
              {project.tag}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{project.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{project.description}</p>

          <div className="flex flex-col sm:flex-row gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A5 5 0 0110 21h4a5 5 0 014.879-3.196A8.963 8.963 0 0021 12c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 2.307.984 4.392 2.121 5.804z" />
              </svg>
              <span><strong>Client:</strong> {project.client}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span><strong>Duration:</strong> {project.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Year:</strong> {project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Carousel */}
      <div className=" bg-white w-[100%] mx-auto h-[100%]   ">
        {imageMap[slug] && <Crousal images={imageMap[slug]} />}
      </div>

      {/* Feature Cards - Exactly 4 cards in 2x2 grid */}
      <div className='bg-white'>
      {featureCards[slug] && (
        <div className=" w-[85%] mx-auto  ">
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8   ">
            {featureCards[slug].map((card, index) => (
              <Featurecard
              key={index}
              title={card.title}
              content={card.content}
              serviceProvided={card.serviceProvided}
              lines={card.lines} /> 
            ))}
          </div>
        </div>
      )}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewDetails;
