import React, { useState } from 'react';
import { data } from '../data/data.js';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Food = () => {
  const [images, setImages] = useState(data);

  return (
    <div className='w-auto m-auto px-4 py-8'>
      <ImageList variant="masonry" cols={4} gap={10} sx={{ '& > img': { marginBottom: '3px' } }}>
        {images.map((item) => (
          <ImageListItem key={item.id}>
            <img
              srcSet={`${item.image}?&fit=crop&auto=format&dpr=2 20x`}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.name}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Food;
