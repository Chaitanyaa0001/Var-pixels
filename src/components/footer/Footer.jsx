import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <h3>VAR PIXELS</h3>
          <p><FaEnvelope /> varpixels@gmail.com</p>
          <p><FaPhoneAlt /> +91-7905095656</p>
          <p><FaMapMarkerAlt /> Ayodhya, India</p>
        </div>
        <div className="footer-right">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
      <hr />
      <p className="footer-copy">© 2024 VAR PIXELS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
