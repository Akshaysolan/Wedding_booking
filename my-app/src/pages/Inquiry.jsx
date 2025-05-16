import React from 'react';
import InquiryForm from './InquiryForm';
import './Inquiry.css';

const Inquiry = () => {
  return (
    <div className="inquiry-page">
      <h1>Wedding Inquiry</h1>
      
      <div className="inquiry-container">
        <div className="inquiry-info">
          <h2>Start Planning Your Special Day</h2>
          <p>
            Please fill out the form with details about your wedding plans. 
            Our team will review your information and contact you to discuss 
            availability and options. We're excited to help make your dream wedding a reality.
          </p>
          
          <div className="inquiry-process">
            <h3>Our Process</h3>
            <ol>
              <li>Submit your inquiry form with your wedding details</li>
              <li>We'll contact you within 48 hours to discuss options</li>
              <li>Schedule a personalized venue tour</li>
              <li>Review customized package options</li>
              <li>Reserve your date with a deposit</li>
              <li>Begin detailed wedding planning with our coordinators</li>
            </ol>
          </div>
        </div>
        
        <div className="inquiry-form-container">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
};

export default Inquiry;