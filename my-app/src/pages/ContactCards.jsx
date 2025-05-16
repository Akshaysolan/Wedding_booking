import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Contact.css"; 

const ContactCards = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8087/api/contact/all")
      .then(response => setContacts(response.data))
      .catch(error => console.error("Error fetching contacts:", error));
  }, []);

  return (
    <div className="contact-cards-container">
      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
          <div key={index} className="contact-card">
            <h3>{contact.name}</h3>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Message:</strong> {contact.message}</p>
          </div>
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactCards;
