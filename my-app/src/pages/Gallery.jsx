import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

const API_URL = 'http://localhost:8087/api/images';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(API_URL);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Our Wedding Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img
              src={image.imageUrl}
              alt={image.altText}
              className="gallery-image"
              onClick={() => handleImageClick(image)}
            />
            <div className="image-overlay">
              <p className="image-caption">{image.altText}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <div className="fullscreen-image-container">
            <img src={selectedImage.imageUrl} alt={selectedImage.altText} className="fullscreen-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
