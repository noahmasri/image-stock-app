import React, { useState } from 'react';
import { data } from '../data/data.js';
import { ImageList, ImageListItem } from '@mui/material';
import '../style.css'; 
const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='w-auto m-auto px-4 py-8'>
      <ImageList variant="masonry" cols={4} gap={10} sx={{ '& > img': { marginBottom: '3px' } }}>
        {data.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.name}
              onClick={() => handleImageClick(item)}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {selectedImage && (
        <div>
          <div className="overlay" onClick={closePopup}></div> {/* Div para el fondo gris */}
          <div className="image-popup">
            <img src={selectedImage.image} alt={selectedImage.name} className="large-img" />
            <div className="button-container">
              <button className="download-btn" onClick={() => window.open(selectedImage.links.html)}>
                
                Download
              </button>
              <button className="close-button" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
