import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  const [images, setImages] = useState(data);

  return (
    <div className='w-auto m-auto px-4 py-8'>

      {/* Display images*/}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {images.map((item, index) => (
            <img
              src={item.image}
              alt={item.name}
              className='width: 100% height: auto'
            />
        ))}
      </div>
    </div>
  );
};

export default Food;
