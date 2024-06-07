import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-6'>
      {/* Left side */}
      <div className='flex items-center'>
        <img
            src='https://www.svgrepo.com/show/430266/drop-2-line-waves-lidquid.svg'
            alt='logo'
            className='w-full h-[40px] object-cover rounded-t-lg'
        />
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          <span className='font-bold'>Splash</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search images'
        />
      </div>
      
    </div>
  );
};

export default Navbar;

