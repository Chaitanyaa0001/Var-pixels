import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import {
  RiGlobalLine,
  RiSmartphoneLine,
  RiBarChartGroupedLine,
  RiBrushLine,
  RiGroupLine,
  RiCpuLine,
  RiCheckLine
} from 'react-icons/ri';
import { FiArrowRight, FiEye } from 'react-icons/fi';



const serviceData = {
  'web-development': {
    icon: <RiGlobalLine size={48} className="text-cyan-500" />,
    title: 'Web Design & Development',
    description: 'Transform your digital presence and create engaging websites that captivate, convert, and grow with your business.',
    aboutContent: 'Our web development team crafts beautiful digital experiences that seamlessly blend stunning design with powerful functionality. From responsive corporate websites to complex e-commerce platforms, we build web solutions that drive real business results.',
    features: [
      'Custom Web Development',
      'Responsive Design',
      'E-commerce Solutions',
      'CMS Integration',
      'Progressive Web Apps',
      'API Integration',
      'Performance Optimization',
      'SEO Ready Structure'
    ],
    process: [
      { step: 1, title: 'Discovery & Strategy Planning', description: 'We analyze your requirements and create a comprehensive project roadmap.' },
      { step: 2, title: 'UI/UX Design & Prototyping', description: 'Design user-centric interfaces with modern aesthetics and intuitive navigation.' },
      { step: 3, title: 'Frontend Development', description: 'Transform designs into responsive, interactive web experiences.' },
      { step: 4, title: 'Backend Integration', description: 'Build robust server-side functionality and database integration.' },
      { step: 5, title: 'Testing & Quality Assurance', description: 'Comprehensive testing across devices and browsers.' },
      { step: 6, title: 'Launch & Ongoing Support', description: 'Deploy your website and provide continuous maintenance support.' }
    ]
  },
  'app-development': {
    icon: <RiSmartphoneLine size={48} className="text-cyan-500" />,
    title: 'App Development',
    description: 'Create powerful mobile applications that engage users and drive business growth across iOS and Android platforms.',
    aboutContent: 'Our mobile app development team specializes in creating high-performance applications that deliver exceptional user experiences. We build native and cross-platform apps that scale with your business needs.',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'In-app Purchases',
      'Analytics Integration'
    ],
    process: [
      { step: 1, title: 'App Strategy & Planning', description: 'Define app objectives, target audience, and feature roadmap.' },
      { step: 2, title: 'UI/UX Design', description: 'Create intuitive and engaging mobile interface designs.' },
      { step: 3, title: 'Development & Coding', description: 'Build robust, scalable mobile applications.' },
      { step: 4, title: 'Testing & QA', description: 'Comprehensive testing across multiple devices and OS versions.' },
      { step: 5, title: 'App Store Submission', description: 'Handle app store submission and approval process.' },
      { step: 6, title: 'Maintenance & Updates', description: 'Ongoing support and regular feature updates.' }
    ]
  },
  'digital-marketing': {
    icon: <RiBarChartGroupedLine size={48} className="text-cyan-500" />,
    title: 'Digital Marketing & Strategy',
    description: 'Drive growth with data-driven marketing campaigns that bring traffic, leads, and conversions to your business.',
    aboutContent: 'Our digital marketing experts create comprehensive strategies that amplify your brand presence across all digital channels. We focus on measurable results that directly impact your bottom line.',
    features: [
      'Social Media Marketing',
      'Content Strategy',
      'PPC Campaigns',
      'Analytics & Reporting',
      'Email Marketing',
      'Influencer Marketing',
      'Conversion Optimization',
      'Marketing Automation'
    ],
    process: [
      { step: 1, title: 'Market Research & Analysis', description: 'Understand your market, competitors, and target audience.' },
      { step: 2, title: 'Strategy Development', description: 'Create comprehensive marketing strategies tailored to your goals.' },
      { step: 3, title: 'Campaign Creation', description: 'Design and launch targeted marketing campaigns across channels.' },
      { step: 4, title: 'Content Production', description: 'Create engaging content that resonates with your audience.' },
      { step: 5, title: 'Performance Monitoring', description: 'Track campaign performance and optimize for better results.' },
      { step: 6, title: 'Reporting & Optimization', description: 'Provide detailed reports and continuously improve campaigns.' }
    ]
  },
  'branding-seo': {
    icon: <RiBrushLine size={48} className="text-cyan-500" />,
    title: 'Branding & SEO',
    description: 'Build memorable brand identities and boost online visibility with comprehensive branding and SEO strategies.',
    aboutContent: 'We create compelling brand identities that resonate with your target audience while implementing SEO strategies that improve your search engine rankings and drive organic traffic.',
    features: [
      'Brand Identity Design',
      'Logo Design',
      'SEO Optimization',
      'Brand Guidelines',
      'Visual Identity Systems',
      'Keyword Research',
      'On-page SEO',
      'Technical SEO'
    ],
    process: [
      { step: 1, title: 'Brand Discovery', description: 'Understand your brand values, mission, and target audience.' },
      { step: 2, title: 'Brand Strategy Development', description: 'Create comprehensive brand positioning and messaging.' },
      { step: 3, title: 'Visual Identity Creation', description: 'Design logos, color palettes, and visual elements.' },
      { step: 4, title: 'SEO Audit & Strategy', description: 'Analyze current SEO performance and develop optimization plan.' },
      { step: 5, title: 'Implementation', description: 'Apply branding elements and implement SEO optimizations.' },
      { step: 6, title: 'Monitoring & Refinement', description: 'Track performance and refine strategies for better results.' }
    ]
  },
  'social-media': {
    icon: <RiGroupLine size={48} className="text-cyan-500" />,
    title: 'Social Media Management',
    description: 'Build engaged communities and drive brand growth through strategic social media management and content creation.',
    aboutContent: 'Our social media experts create compelling content strategies that build authentic connections with your audience across all major platforms, driving engagement and business growth.',
    features: [
      'Content Creation & Design',
      'Monthly Content Calendars',
      'Community Management',
      'Meta Ads Setup',
      'Instagram & Facebook Marketing',
      'LinkedIn Marketing',
      'Analytics & Reports',
      'Influencer Partnerships'
    ],
    process: [
      { step: 1, title: 'Social Media Audit', description: 'Analyze current social presence and identify opportunities.' },
      { step: 2, title: 'Content Strategy Planning', description: 'Develop comprehensive content strategies for each platform.' },
      { step: 3, title: 'Content Creation', description: 'Design engaging posts, stories, and multimedia content.' },
      { step: 4, title: 'Community Engagement', description: 'Actively engage with your audience and build relationships.' },
      { step: 5, title: 'Paid Advertising', description: 'Run targeted social media advertising campaigns.' },
      { step: 6, title: 'Performance Analysis', description: 'Track metrics and optimize strategies for better engagement.' }
    ]
  },
  'ai-ml-solutions': {
    icon: <RiCpuLine size={48} className="text-cyan-500" />,
    title: 'AI/ML Solutions',
    description: 'Leverage cutting-edge artificial intelligence and machine learning technologies to automate processes and gain insights.',
    aboutContent: 'Our AI/ML specialists develop custom intelligent solutions that automate complex processes, provide predictive analytics, and unlock new opportunities for business growth and efficiency.',
    features: [
      'Custom AI Models',
      'Data Analytics',
      'Process Automation',
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Consulting'
    ],
    process: [
      { step: 1, title: 'Data Assessment', description: 'Analyze your data and identify AI/ML opportunities.' },
      { step: 2, title: 'Solution Design', description: 'Design custom AI solutions tailored to your needs.' },
      { step: 3, title: 'Model Development', description: 'Build and train machine learning models.' },
      { step: 4, title: 'Integration & Testing', description: 'Integrate AI solutions into your existing systems.' },
      { step: 5, title: 'Deployment & Monitoring', description: 'Deploy solutions and monitor performance.' },
      { step: 6, title: 'Optimization & Support', description: 'Continuously improve models and provide ongoing support.' }
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return <div className="text-center py-20 text-red-600">Service not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Link to="/services" className="text-sm text-cyan-600 mb-4 hover:underline inline-block">
            ← Back to Services
          </Link>
          
          <div className="flex justify-center mb-6">
            {service.icon}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}
          </p>
          
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition">
            Get Free Quote →
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* About This Service */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.aboutContent}
              </p>
              <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition">
                Get Free Quote
              </button>
            </div>
            
            {/* What's Included */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <RiCheckLine className="text-green-500 text-lg flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Process</h2>
          <p className="text-center text-gray-600 mb-12">How we deliver exceptional results</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-600 font-bold text-xl">{step.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Get Started */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition">
              Start Your Project
            </button>
            <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition">
              Book a Call
            </button>
          </div>
        </div>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {/* Step 1 - Discovery */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#1982FC] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">01</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0F1035] mb-2">Discovery</h3>
                      <p className="text-gray-600">Understanding your needs and goals</p>
                    </div>
          
                    {/* Step 2 - Strategy */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#1982FC] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">02</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0F1035] mb-2">Strategy</h3>
                      <p className="text-gray-600">Creating a tailored approach</p>
                    </div>
          
                    {/* Step 3 - Development */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#1982FC] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">03</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0F1035] mb-2">Development</h3>
                      <p className="text-gray-600">Building your solution</p>
                    </div>
          
                    {/* Step 4 - Launch */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#1982FC] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">04</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0F1035] mb-2">Launch</h3>
                      <p className="text-gray-600">Deploying and optimizing</p>
                    </div>
                  </div>
          
                  {/* CTA Section */}
                  <div className="text-center mb-16">
                    <p className="text-[#1982FC] font-semibold mb-2">Ready to Start?</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F1035] mb-2">
                      Let's Build Something
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1982FC] mb-6">
                      Extraordinary Together
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                      Ready to take your business to the next level? Our team of experts is here to help you 
                      create digital solutions that drive results.
                    </p>
          
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-[#1982FC] mb-2">24/7</h3>
                        <p className="text-gray-600">Support Available</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-[#1982FC] mb-2">98%</h3>
                        <p className="text-gray-600">Client Satisfaction</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-[#1982FC] mb-2">Fast</h3>
                        <p className="text-gray-600">Delivery Time</p>
                      </div>
                    </div>
          
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to='/contact'>
                      <button className="bg-[#1982FC] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1570d8] transition-colors">
                        Get Started Today <FiArrowRight />
                      </button>
                      </Link>
                      <Link to='/portfolio'>
                      <button className="border-2 border-[#1982FC] text-[#1982FC] px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1982FC] hover:text-white transition-colors">
                        View Our Work <FiEye />
                      </button>
                      </Link>
                    </div>
                  </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
