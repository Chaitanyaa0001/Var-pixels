import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import WhatsAppButton from '../whatsapp/WhatsAppButton';

const Footer = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ email: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.email.includes('@')) {
      alert('Please enter a valid email address!');
      return;
    }

    // ✅ Here you could connect it to an API or Firebase etc.
    console.log('Subscribed email:', formData.email);

    setSubmitted(true);
    setFormData({ email: '' });

    setTimeout(() => setSubmitted(false), 3000); // Hide message after 3s
  };

  return (
    <footer className="bg-[#0f172a] text-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Quick Links */}
        <div>
          <h4 className="text-[#06b6d4] font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/service" className="hover:text-white">Services</a></li>
            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#06b6d4] font-semibold text-lg mb-4">Get in Touch</h4>
          <ul className="text-sm text-gray-300 space-y-3">
            <li className="flex items-center gap-2"><FaEnvelope className="text-[#06b6d4]" /> varpixels@gmail.com</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-[#06b6d4]" /> +91-7905095656</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#06b6d4]" /> Ayodhya, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-[#06b6d4] font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex gap-4 text-lg mb-3">
            <a href="#"><FaInstagram className="text-pink-500 hover:scale-110 transition" /></a>
            <a href="#"><FaLinkedinIn className="text-blue-500 hover:scale-110 transition" /></a>
            <a href="#"><FaTwitter className="text-cyan-400 hover:scale-110 transition" /></a>
            <a href="#"><FaYoutube className="text-red-500 hover:scale-110 transition" /></a>
          </div>
          <p className="text-sm text-gray-400">
            Stay connected with us for updates, events, and digital marketing tips!
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[#06b6d4] font-semibold text-lg mb-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to get the latest news and updates from VAR PIXELS.
          </p>
          <form onSubmit={submitHandler} className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#1e293b] text-white rounded-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-md font-semibold hover:opacity-90 transition"
            >
              Subscribe
            </button>
            {submitted && (
              <p className="text-sm text-green-400">Thanks for subscribing!</p>
            )}
          </form>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <div className="mb-3 md:mb-0">
          <span className="text-[#06b6d4] font-semibold">VAR PIXELS</span> <span>– Digital Excellence</span>
        </div>
        <div className="text-center md:text-right space-x-2">
          <span>© 2024 VAR PIXELS. All rights reserved.</span>
          <a href="#" className="hover:text-white">Privacy Policy</a> |
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>

      <WhatsAppButton />
    </footer>
  );
};

export default Footer;
