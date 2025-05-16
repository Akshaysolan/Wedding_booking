import React from 'react';
import './Home.css';
import { services, testimonials } from './Data'; 


const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Green Meadows Farmhouse</h1>
          <p>Your Perfect Venue for Weddings, Parties & Events</p>
          <button className="btn">Book a Tour</button>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span>✔</span>
              <p>Prime Location – Easily accessible from the city yet away from the hustle-bustle</p>
            </div>
            <div className="benefit-item">
              <span>✔</span>
              <p>Spacious & Luxurious – Ample parking, lush green gardens, and stunning architecture</p>
            </div>
            <div className="benefit-item">
              <span>✔</span>
              <p>All-in-One Services – Catering, decoration, lighting, and entertainment</p>
            </div>
            <div className="benefit-item">
              <span>✔</span>
              <p>Customizable Packages – Tailored to fit your budget and preferences</p>
            </div>
            <div className="benefit-item">
              <span>✔</span>
              <p>24/7 Support – Our team ensures a hassle-free experience from start to finish</p>
            </div>
            
            <div className="benefit-item">
                <span>✔</span>
                <p>Photography & Film Shoots - Scenic backgrounds, poolside & terrace areas, and custom décor.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='im'>
      <section className="testimonials-section">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <p className="about-text">
            Nestled in the heart of nature, Green Meadows Farmhouse offers a luxurious and serene setting
            for weddings, private parties, and grand celebrations. Our beautifully landscaped gardens,
            elegant banquet hall, and state-of-the-art amenities create the perfect ambiance for your
            special occasions.
          </p>
        </div>
      </section>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>Book Your Event Today!</h2>
          <p>Looking for the perfect venue for your next celebration?</p>
        </div>
      </section>
    </div>
  );
};

export default Home;