import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

const API_URL = 'http://localhost:8087/api/images';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [altText, setAltText] = useState('');

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

  const handleAddImage = async (e) => {
    e.preventDefault();
    if (!newImageUrl || !altText) {
      alert("Please provide both Image URL and Alt Text.");
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        imageUrl: newImageUrl,  
        altText: altText
      });

      setImages([...images, response.data]); 
      setNewImageUrl('');
      setAltText('');
    } catch (error) {
      console.error("Error adding image:", error);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setImages(images.filter(image => image.id !== id));  
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Our Wedding Gallery</h1>

      <form onSubmit={handleAddImage} className="image-form">
        <input
          type="text"
          placeholder="Image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Alt Text"
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
          required
        />
        <button type="submit">Add Image</button>
      </form>

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
              <button 
                className="delete-button"
                onClick={() => handleDeleteImage(image.id)}
              >
                Delete
              </button>
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
