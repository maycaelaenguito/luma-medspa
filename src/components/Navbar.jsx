// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookBtn from './BookBtn';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`xl:flex hidden navbar-con font-raleway flex-row justify-around text-slate-100 tracking-widest font-medium ${
          scrolled ? 'bg-stone-950' : ''
        }`}
      >
        <ul className='flex left-nav uppercase flex-row gap-[2vw] text-[16px] 2xl:text-[17px] items-center '>
          <li className='hover:text-[#f5a6a6] transition duration-300'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:text-[#f5a6a6] transition duration-300'>
            <Link to="/about">About</Link>
          </li>
          <li className='hover:text-[#f5a6a6] transition duration-300'>
            <Link to="/services">Services</Link>
          </li>
          <li className='hover:text-[#f5a6a6] transition duration-300'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="logo-container w-[full] flex justify-center">
          <Link to="/">
            <div className='logo-container w-[150px] py-5'>
              <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694767971/Luma%20Medspa/Luma_Logo_white_2_y5owy3.png" alt="" />
            </div>
          </Link>
        </div>
        <ul className='flex left-nav uppercase flex-row gap-[2vw] text-[16px] 2xl:text-[17px] items-center'>
          <li className='hover:text-[#f5a6a6] transition duration-300'>
            <Link to="/blog">Blog</Link>
          </li>
          <li className='hover:text-[#f5a6a6] transition duration-300'> 
            <Link to="/shop">Shop</Link>
          </li>
          <li className='hover:text-[#f5a6a6] transition duration-300'>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <BookBtn/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
