import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Wedding Farm House</h3>
          <p>Your perfect wedding destination</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧 Email: contact@rapidcoresolution.com</p>
          <p>📞 Phone: +91 9457929074</p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>Meerut, Uttar Pradesh</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} RapidCoreSolution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;