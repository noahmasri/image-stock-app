import React, { useState } from 'react';
import { data } from '../data/data.js';
import { ImageList, ImageListItem } from '@mui/material';
import '../style.css'; 
const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  let currentImage = 0;
  // res = fetchImages(); data = res.images? 
  const handleImageClick = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleNextImage = () =>{
    var nextId = parseInt(selectedImage.id) + 1;

    if (nextId <= data.length) {
      var nextImage = data.find(function(image) {
          return image.id === nextId;
      });

      if (nextImage !== undefined) {
        setSelectedImage(nextImage)
      }
    }
  };

  const handlePrevImage = () =>{
    var nextId = parseInt(selectedImage.id) - 1;
    if (nextId > 0) {
      var nextImage = data.find(function(image) {
        return image.id === nextId;
      });

      if (nextImage !== undefined) {
        setSelectedImage(nextImage)
      }
    }
  };
 
 
  return (
    <div className='w-auto m-auto px-4 py-8'>
      <ImageList variant="masonry" cols={4} gap={10} sx={{ '& > img': { marginBottom: '3px' } }}>
        {data.map((item, index) => (
          <ImageListItem key={item.id}>
            <img
            //cuando lo fetchiemos seria en vez de item.image seria URL.createObjectUrl(item.view)
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.name}
              onClick={() => handleImageClick(item)}
            />
          </ImageListItem>
        )
        )}
      </ImageList>

      {selectedImage && (
        <div>
          <div className="overlay" onClick={closePopup}></div> {/* Div para el fondo gris */}
            <div className="image-popup">
              <img src={selectedImage.image} alt={selectedImage.name} className="large-img" />
              <button class="controls pre-btn" alt="" onClick={() => handlePrevImage() }> {'\<'} </button>
              <button class="controls nxt-btn" alt= "" onClick={() => handleNextImage() }> {'\>'} </button>
              {/*Top right buttons*/}
              <div className="buttons-container">
                {/*Download button*/}
                <button className="download-btn" onClick={() => window.open(selectedImage.links.html)}>
                  <div className="button-container">
                  <svg className="icon-style" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                    <span className="down-text-style">Download</span>
                  </div>
                </button>
                {/*Close button*/}
                <button className="close-button" onClick={closePopup}>
                <div className="button-container">
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" className="icon-style" />
                    <span className="close-text-style">Close</span>
                  </div>
                </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
