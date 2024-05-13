import React, {useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
const [nav, setNav] = useState(false)

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
  

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      
    </div>
  );
};

export default Navbar;

/* 
// Index.html
<div class = "image-popup">
  <button class = "close-button"> </button>
  <a href  = '#' class = "download-btn">download-images </a>
  <img src ="img/img.pmg" class "large-image" alt= "">
</div>

// styles
.large-img
{
  height: 80%;
  width :auto;
  max-width:80 %;
  object-fit: cover;
  border-radius : 10px;
}
.image-popup
{
  positions: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
  width:80%;
  height:80vh;
  background: #f9f9f9
  box-shadow: 0px 5px 50 px rgba(0,0,0,0.25);
  border-radius: 10px;
  transition: .5s;
  display: flex;
  justify-content: center;
  align-items:center;

}
.close-btn{
  position: absolute;
  top:10px;
  left:10px;
  width:20px;
  height:20px;
  background:#ff4f4f;
  border-radius: 50%;
  border:none;
  cursor:pointer;
}
.download-btn{
  text-transform: capitalize;
  padding: 10px 20px;
  background: #192f2e;
  color: #fff;
  text-transform:capitalize;
  border-radius:5px;
  position:absolute;
  right: 10px;
  top:10px;
}
//App.js
const showPopup = (item) =>
{
    let popup = document.querySelector('.image-popup');
    const downloadBtn = document.querySelector('.download-btn);
    const closeBtn = document.querySelector('.close-button');
    const image = document.querySelector('.large-img);

    popup.classList.remove('hide');
    downloadBtn.href = item.links.html;
    image.src = item.urls.regular;

    closeBtn.addEventListener('click', () = >
    {
      popup.classList.add('hide');
    })

}

*/ 