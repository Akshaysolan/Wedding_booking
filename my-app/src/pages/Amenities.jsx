import React from 'react';
import './Amenities.css';

const amenities = [
  {
    title: 'Ceremony Spaces',
    items: [
      'Outdoor garden ceremony site',
      'Covered patio for inclement weather',
      'Indoor chapel option',
      'Customizable seating arrangements'
    ]
  },
  {
    title: 'Reception Facilities',
    items: [
      'Elegant barn reception hall',
      'Dance floor and staging',
      'Bridal suite and groom\'s room',
      'Catering kitchen'
    ]
  },
  {
    title: 'Additional Features',
    items: [
      'On-site parking',
      'Beautiful photo locations',
      'Event planning assistance',
      'Vendor recommendations'
    ]
  }
];

const Amenities = () => {
  return (
    <div className="amenities">
      <h1>Our Amenities</h1>
      <div className="amenities-container">
        {amenities.map((category, index) => (
          <div key={index} className="amenity-category">
            <h2>{category.title}</h2>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;