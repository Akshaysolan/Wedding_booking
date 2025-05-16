import React, { useState } from 'react';
import axios from 'axios';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    brideName: '',
    groomName: '',
    email: '',
    phone: '',
    weddingDate: '',
    guestCount: '',
    eventType: '',
    packageInterest: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8087/api/inquiry', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200) {
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({
          brideName: '',
          groomName: '',
          email: '',
          phone: '',
          weddingDate: '',
          guestCount: '',
          eventType: '',
          packageInterest: '',
          additionalInfo: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit inquiry. Please try again later.');
    }
  };

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="brideName">Bride's Name:</label>
        <input 
          type="text" 
          id="brideName" 
          name="brideName" 
          value={formData.brideName} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="groomName">Groom's Name:</label>
        <input 
          type="text" 
          id="groomName" 
          name="groomName" 
          value={formData.groomName} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="weddingDate">Wedding Date:</label>
        <input 
          type="date" 
          id="weddingDate" 
          name="weddingDate" 
          value={formData.weddingDate} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="guestCount">Estimated Guest Count:</label>
        <input 
          type="number" 
          id="guestCount" 
          name="guestCount" 
          min="1" 
          value={formData.guestCount} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="eventType">Event Type:</label>
        <select 
          id="eventType" 
          name="eventType" 
          value={formData.eventType} 
          onChange={handleChange} 
          required
        >
          <option value="">Select event type</option>
          <option value="wedding">Wedding</option>
          <option value="reception">Reception Only</option>
          <option value="elopement">Elopement</option>
          <option value="vow-renewal">Vow Renewal</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="packageInterest">Package Interest:</label>
        <select 
          id="packageInterest" 
          name="packageInterest" 
          value={formData.packageInterest} 
          onChange={handleChange} 
          required
        >
          <option value="">Select a package</option>
          <option value="basic">Basic Package</option>
          <option value="standard">Standard Package</option>
          <option value="premium">Premium Package</option>
          <option value="custom">Custom Package</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="additionalInfo">Additional Information:</label>
        <textarea 
          id="additionalInfo" 
          name="additionalInfo" 
          value={formData.additionalInfo} 
          onChange={handleChange}
          placeholder="Tell us about your vision, special requests, or questions..."
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">Submit Inquiry</button>
    </form>
  );
};

export default InquiryForm;