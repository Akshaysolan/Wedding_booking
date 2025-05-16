import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const isAdmin = localStorage.getItem("userRole") === "admin"; 

  const handleBookedClick = (e) => {
    e.preventDefault();
    
      alert("Only admins can access this section.");
      window.location.href = "/login"; 
    
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Wedding Farm House</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/amenities">Amenities</Link></li>
          <li><Link to="/packages">Packages</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/inquiry">Inquiry</Link></li>
          <li>
            <Link to="#" onClick={handleBookedClick}>Booked</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
