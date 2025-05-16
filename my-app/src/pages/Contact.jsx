import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions about our venue or availability? Reach out to us using 
            the contact form or the information below.
          </p>
          
          <div className="contact-details">
            <h3>Address</h3>
            <p>123 Wedding Lane, Farmville, CA 12345</p>
            
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
            
            <h3>Email</h3>
            <p>info@weddingfarmhouse.com</p>
            
            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
      
      <div className="map-container">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <p>Map would be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;