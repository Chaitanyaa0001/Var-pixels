import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';

const team = [
  {
    name: 'Virendra Kumar',
    role: 'Founder & CEO',
    image: '/images/virendra.png', // Upload your image to public/images/
  },
  {
    name: 'Riya Kumari',
    role: 'Product Design & Marketing Head',
    image: '/images/riya.png',
  },
  {
    name: 'Divyansh Shrivastava',
    role: 'Technical Lead',
    image: '/images/divyansh.png',
  },
  {
    name: 'Ajay Dubey',
    role: 'AI & ML Specialist',
    image: '/images/ajay.png',
  },
];

const About = () => {
  return (
    <div className="bg-[#e6f9ff] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2">
          <span className="inline-block bg-[#c2f0ff] text-[#0077b6] text-sm px-4 py-1 rounded-full font-medium mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            A Creative-Driven Team <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              Building the Future of Digital Brands
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            We're a team of developers, designers, and marketers driven by quality, purpose, and results.
            At VAR PIXELS, we collaborate with brands that want to make a real impact online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition">
              Get Started Today →
            </button>
            <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-3 rounded-md font-medium">
              Our Portfolio
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/images/team-work.png" // Upload your team image as 'team-work.png'
            alt="Team working"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-16 py-20 text-center">
        <span className="inline-block bg-[#c2f0ff] text-[#0077b6] text-sm px-4 py-1 rounded-full font-medium mb-2">
          Our Visionaries
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Talented professionals dedicated to delivering exceptional results and shaping the future of digital experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-[320px] w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-blue-600 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About;
