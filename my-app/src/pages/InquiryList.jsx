import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './inquirylist.css';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8087/api/inquiry/all')
      .then(response => {
        setInquiries(response.data);
      })
      .catch(error => {
        console.error('Error fetching inquiries:', error);
      });
  }, []);

  return (
    <div className="inquiry-container">
      <div className="inquiry-list">
        {inquiries.length > 0 ? (
          inquiries.map((inquiry) => (
            <div key={inquiry.id} className="inquiry-card">
              <h2>{inquiry.brideName} & {inquiry.groomName}</h2>
              <p><strong>Email:</strong> {inquiry.email}</p>
              <p><strong>Phone:</strong> {inquiry.phone}</p>
              <p><strong>Wedding Date:</strong> {new Date(inquiry.weddingDate).toLocaleDateString()}</p>
              <p><strong>Guest Count:</strong> {inquiry.guestCount}</p>
              <p><strong>Event Type:</strong> {inquiry.eventType}</p>
              <p><strong>Package:</strong> {inquiry.packageInterest}</p>
              <p><strong>Additional Info:</strong> {inquiry.additionalInfo || "N/A"}</p>
            </div>
          ))
        ) : (
          <p className="no-inquiries">No inquiries found.</p>
        )}
      </div>
    </div>

  );
};

export default InquiryList;
